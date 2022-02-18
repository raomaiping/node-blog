import { exec, escape } from "../db/mysql";
import { genPassword } from "../utils/cryp";
interface LoginResult {
  username?: string;
  realname?: string;
}
export const login = (
  username: string,
  password: string
): Promise<LoginResult> => {
  username = escape(username);
  //生成加密密码
  password = genPassword(password);
  password = escape(password);

  const sql = `
      select username, realname from users where username=${username} and password=${password};
  `;

  return exec<LoginResult[]>(sql).then((rows) => {
    return rows[0] || {};
  });
};

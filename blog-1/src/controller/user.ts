import { exec } from"../db/mysql"
interface LoginResult {
  username?:string
  realname?:string
}
export const login = (username:string, password:string):Promise<LoginResult> => {
  const sql = `
      select username, realname from users where username='${username}' and password='${password}';
  `;

  return exec<LoginResult[]>(sql).then((rows) => {
    return rows[0] || {};
  });
};
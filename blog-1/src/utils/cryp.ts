import crypto from "crypto";

// 密匙
const SECRET_KEY = "前端小菜鸟吖";

// md5 加密
function md5(content: string): string {
  const md5 = crypto.createHash("md5");
  return md5.update(content).digest("hex");
}

//加密函数
export function genPassword(password: string): string {
  const str = `password=${password}&key=${SECRET_KEY}`;
  return md5(str);
}

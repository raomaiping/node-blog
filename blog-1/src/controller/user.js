const loginCheck = (username, password) => {
  //先使用假数据
  if (username === "前端小菜鸟吖" && password === "123") {
    return true;
  }
  return false;
};

module.exports = {
  loginCheck,
};

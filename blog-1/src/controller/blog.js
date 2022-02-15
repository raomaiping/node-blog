const getList = (author, keyword) => {
  //先返回假数据，(格式是正确的)
  return [
    {
      id: 1,
      title: "标题A",
      content: "内容A",
      createTime: 1644895955215,
      author: "前端小菜鸟吖",
    },
    {
      id: 2,
      title: "标题B",
      content: "内容B",
      createTime: 1644896022057,
      author: "张三",
    },
  ];
};

module.exports = {
  getList,
};

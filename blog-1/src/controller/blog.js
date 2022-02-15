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

const getDetail = (id) => {
  //先返回假数据
  return {
    id: 1,
    title: "标题A",
    content: "内容A",
    createTime: 1644895955215,
    author: "前端小菜鸟吖",
  };
};

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含title content 属性
  return {
    id: 3, // 表示新建博客，插入到数据表里面的id
  };
};

const updateBlog = (id, blogData = {}) => {
  // id 就是要更新博客的id
  //blogData 是一个博客对象，包含title content 属性
  return true;
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
};

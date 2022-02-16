const { exec } = require("../db/mysql");

const getList = (author, keyword) => {
  let sql = `select * from blogs where 1=1 `;
  if (author) {
    sql += `and author='${author}' `;
  }
  if (keyword) {
    sql += `and title like '%${keyword}%' `;
  }
  sql += `order by createtime desc;`;

  //返回 promise
  return exec(sql);
};

const getDetail = (id) => {
  const sql = `select * from blogs where id='${id}'`;
  return exec(sql).then((rows) => {
    return rows[0];
  });
};

const newBlog = (blogData = {}) => {
  //blogData 是一个博客对象，包含title content author属性
  const { title, content, author } = blogData;
  const createTime = Date.now();

  const sql = `
      insert into blogs (title, content, createtime, author)
      values ('${title}', '${content}', ${createTime}, '${author}');
  `;

  return exec(sql).then((insertData) => {
    console.log("insertData is", insertData);
    return {
      id: insertData.insertId, // 表示新建博客，插入到数据表里面的id
    };
  });
};

const updateBlog = (id, blogData = {}) => {
  // id 就是要更新博客的id
  //blogData 是一个博客对象，包含title content 属性
  return true;
};

const delBlog = (id) => {
  // id 就是要删除博客的id
  return true;
};
module.exports = {
  getList,
  getDetail,
  newBlog,
  updateBlog,
  delBlog,
};

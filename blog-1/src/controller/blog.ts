import { exec } from"../db/mysql"
import { OkPacket} from 'mysql'
interface BlogData {
  id: number,
  title: string,
  content: string,
  createtime: number,
  author: string
}

interface Blog {
  title: string,
  content: string,
  author: string
}



export const getList = (author:string, keyword:string):Promise<BlogData[]> => {
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

export const getDetail = (id:number):Promise<BlogData> => {
  const sql =`select * from blogs where id='${id}'`;
  return exec<BlogData[]>(sql).then((rows) => {
    return rows[0];
  });
};

export const newBlog = (blogData:Blog):Promise<{id:number}> => {
  //blogData 是一个博客对象，包含title content author属性
  const { title, content, author } = blogData;
  const createTime = Date.now();

  const sql = `
      insert into blogs (title, content, createtime, author)
      values ('${title}', '${content}', ${createTime}, '${author}');
  `;

  return exec<OkPacket>(sql).then((insertData) => {
    return {
      id: insertData.insertId, // 表示新建博客，插入到数据表里面的id
    };
  });
};

export const updateBlog = (id:number, blogData:Blog):Promise<boolean> => {
  // id 就是要更新博客的id
  //blogData 是一个博客对象，包含title content 属性
  const { title, content } = blogData;

  const sql = `
      update blogs set title='${title}', content='${content}' where id=${id}
  `;
  return exec<OkPacket>(sql).then((updateData) => {
    if (updateData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};

export const delBlog = (id:number, author:string):Promise<boolean> => {
  // id 就是要删除博客的id
  const sql = `delete from blogs where id='${id}' and author='${author}';`;
  return exec<OkPacket>(sql).then((delData) => {
    if (delData.affectedRows > 0) {
      return true;
    }
    return false;
  });
};
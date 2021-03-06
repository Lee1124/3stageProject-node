const dbPool = require("../config/dbpoolconfig");//连接数据库

const goodsModel={
  model_21cake_goods(params){
    return new Promise(function (resolve, reject) {
      dbPool.connect("select * from goods", params,
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err)
          }
        })
    })
  },
  getUserDate(params){
    return new Promise(function (resolve,reject) {
      dbPool.connect("select * from users",params,(err,data)=>{
        if(!err){
          resolve(data);
        }
        else {
          reject(err)
        }
      })
    })
  },
  Pay3(params){
    return new Promise(function (resolve,reject) {
      dbPool.connect("select * from shop_ord",params,(err,data)=>{
        if(!err){
          resolve(data);
        }
        else {
          reject(err)
        }
      })
    })
  },
  addgoods(params){
    return new Promise(function (resolve, reject) {
      dbPool.connect("INSERT INTO shop VALUES (?,?,?,?)", params,
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err)
          }
        })
    })
  },
  Pcenter(params){
    return new Promise(function (resolve, reject) {
      dbPool.connect("select * from users", params,
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err)
          }
        })
    })
  },
  /*单独一个页面payagain做的跳转*/
  Pay31(params){
    return new Promise(function (resolve, reject) {
      dbPool.connect("select * from shop", params,
        (err, data) => {
          if (!err) {
            resolve(data);
          } else {
            reject(err)
          }
        })
    })
  },
};
module.exports=goodsModel;
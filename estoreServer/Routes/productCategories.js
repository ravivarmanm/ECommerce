import express from "express";
import mysql from "mysql";
const productCategoires = express.Router();
const port = 4000;

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Adidas@007",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});
let categoryData;
let productData;

// Connect to the MySQL database

productCategoires.get("/productCategories",(req,res)=>{
  let categorydata;

          pool.query("Select * from categories",(error,categories)=>{
              if(error){
                  categorydata = error;
                  res.status(500).send(categorydata);
              }else{
                  categorydata = categories;
                  res.status(200).send(categorydata);
              }
          })

})

productCategoires.get("/getProducts",(req,res)=>{
  let productData;

  pool.query("select * from products",(err,rows)=>{
      if(err){
          res.status(500).send(err);
      }else{
          productData = rows;
          res.status(200).send(productData);
      }
  })
})

export default productCategoires;

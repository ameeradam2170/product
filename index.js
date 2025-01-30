//1)npm init
//2)express,mongoose
//index
//





const express=require("express")
const app=express()
require("./db")
const productModel=require("./model/product");
var port= 8083

app.use (express.json())
app.post('/',(req,res)=>{
  try {
    productModel(req.body).save();
    res.send("data added successfully")
  } catch (error) {
    res.send(error)
  }
})
app.get("/",async(req,res)=>{
    try {
        var data=await productModel.find()
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})

app.delete("/remove/:id",async(req,res)=>{
    try {
     await productModel.findByIdAndDelete(req.params.id)
     res.send("Deleted successfully!!")
    } catch (error) {
     res.send(error)
    }
 })
app.listen(port,()=>{
    console.log(`server is listening in port ${port}`)
})

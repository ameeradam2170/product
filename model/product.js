var mongoose =require("mongoose")
const productSchema = mongoose.Schema({
    productname:String,
    productcat:String,
    productprize:Number,
    productquantity:Number,
})

const productModel = mongoose.model("product",productSchema);
module.exports = productModel;
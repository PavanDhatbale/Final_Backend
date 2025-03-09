const mongoose=require("mongoose")

const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://pavandhadbale0:ihIkcX3Xadnda1Yk@recipemaker.cg1mz.mongodb.net/?retryWrites=true&w=majority&appName=RecipeMaker")
    .then(()=>console.log("connected..."))
}

module.exports=connectDb
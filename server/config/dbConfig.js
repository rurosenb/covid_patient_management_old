const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.DB_CONNECTOR);
        console.log("DB connected")
    }catch(err){
        console.log(err);
    }
}

module.exports=connectDB;
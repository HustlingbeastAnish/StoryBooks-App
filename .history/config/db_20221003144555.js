const mongoose = require("mongoose");

const connectDb = async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONG_URI,{
            useNewUrlParser:true
        })
    } catch () {
        
    }
}

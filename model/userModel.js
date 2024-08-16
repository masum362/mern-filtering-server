import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    displayName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    photoURL:{
        type:String,
    }

},{
    timestamps:true,
})


const userModel = new mongoose.model('user',userSchema);


export default userModel
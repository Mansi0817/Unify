import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

name:String,
email:String,
password:String,
verified:Boolean

});

export default mongoose.model("User",userSchema);
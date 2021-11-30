const mongoose=require('mongoose')
const Schema=mongoose.Schema
const project=require("./Project")

const UserSchema=new Schema({
  name:{
    type:String,
    required:false,
    },
  lastName:{
    type:String,
    required:false,
  },
  phone:{
    type:String,
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  proyects:[{
    type:Schema.Types.ObjectId,
    ref:"project"
  }]
})

module.export=mongoose.model("user",UserSchema)
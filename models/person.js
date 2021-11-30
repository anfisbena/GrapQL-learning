import mongoose from 'mongoose'
const schema=new mongoose.Schema({
  email:{
    type:String,
    required:true,
    unique:true,
    minlength:5,
  },
  contraseña:{
    type:String,
    required:true,
    minlength:8,
  },
  documentId:{
    type:String,
    required:true,
    unique:true,
  },
  documentType:{
    type:String,
    required:true,
  },
  nombre:{
    type:String,
    required:true,
    minlength:2,
  },
  apellido:{
    type:String,
    required:true,
    minlength:2,
  },
  rol:{
    type:String,
    required:true,
  },
  estado:{
    type:String,
    required:true,
  },
})

export default mongoose.model()
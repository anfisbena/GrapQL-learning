const mongoose=require('mongoose')
const Schema=mongoose.Schema
const user=require("../service/user")

const ProjectSchema=new Schema({
  name:{
    type:String
  },
  description:{
    type:String
  },
  topic:{
    type:String
  },
  owner:{
    type:Schema.Types.ObjectId,
    ref="user"
  }
})

module.export=mongoose.model("Project",ProjectSchema)
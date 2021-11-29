const User=require('../models/user')

CreateUser=async(User)=>{
  let userInstance=new User(User)
  user=await userInstance.save()
  return User
}

getUsers=async()=>{
  let User=await User.find({}).populate("projects")
  return User
}

getUserById=async(userId)=>{
  let user=await User.findById(userId).populate("projects")//projects hace referencia al modelo projects de user
  return user
}

updateUser=async(userId,user)=>{
  let new_user=User.findByIdAndUpdate(userId,user,{new:true}) //este new true lo que hace es entregar el objeto nuevo
  return new_user
}

updateProject=async(userId,projectId)=>{
  user=await User.findByIdAndUpdate(userId,{
    $push:{
      projects:projectId
    }
  })
  return user
}

module.exports={
  CreateUser,
  getUsers,
  getUserById,
  updateUser,
  updateProject
}
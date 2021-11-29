const userService=require('../service/user')

const userResolvers={
  Query:{
    getUsers:async(parent,args)=>{
      //va la logica del proceso
      let user=await userService.getUsers()
      return user
    },
    getUserById:async(parent,args)=>{
      //va la logica del proceso
      let user=await userService.getUsersById(args._id)
      return user
    }
  },
  Mutation:{
    CreateUser:async(parent,args)=>{
      let user=await userService.CreateUser(args)
      return user
    },
    updateUser:async(parent,args)=>{
      let userUpdate=userService.updateUser(args._id,args)
      return userUpdate
    }
  }
}

module.exports={userResolvers}
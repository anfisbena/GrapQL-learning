const express=require('express')
const mongoose=require('mongoose')
const { ApolloServer }=require('apollo-server-express')
const { resolvers }=require('./resolvers')
const { types }=require('./types')

const app=express()
const server=new ApolloServer({
  typeDefs:types,
  resolvers:resolvers
})

mongoose.connect("mongodb+srv://admin:pass@cluster0.65a0t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",async()=>{
  console.log("conectado");
  app.listen(5010, async()=>{
    await server.start()
    server.applyMiddleware({app})
    console.log("servidor escuchando en puerto 5010");
  })
})
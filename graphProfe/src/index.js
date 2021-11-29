'use strict' //you cannot use undeclared variables

const{buildSchema}=require('graphql')//esquema de lenguaje de consulta
const express=require('express')//cliente de conexion b.e
const{graphqlHTTP}=require('express-graphql').graphqlHTTP; //middleware
const{readFileSync}=require('fs')//lee el archivo y devuelve su contenido
const{join}=require('path')//genera una funcion array que une la informacion
const resolvers=require('./resolver/resolvers')//llamo archivo resolvers

//primero se inicia el server express, si este no inicia, lo demas no arrancará
const app=express()

const schema=buildSchema(
  readFileSync(
    join(__dirname,'schema','schema.graphql'),//join currentPath/schema/schema.graphql
    'utf-8'
  )
)

//genera los middleware para hacer la conexion entre Graph, node y HTTP (es la funcion de Express)
app.use('/api',graphqlHTTP({
  schema:schema,
  rootValue:resolvers,
  graphiql:true, //va a iniciar el IDE de graphQL
}))

//indica para que inicie server con modelo listen una vez todo lo ejecutado esta K
app.listen(3000,()=>{console.log('Server listening at port: '+3000)})
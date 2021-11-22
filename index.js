const { ApolloServer, gql } = require('apollo-server');

const personas=[
   {
      name:'Midu',
      phone:'2111111',
      street:'Calle Barcelona',
      city:'Barcelona',
      id:'1152444892'
   },
   {
      name:'Carlos',
      phone:'4444040',
      street:'Calle Madrid',
      city:'Madrid',
      id:'1035789871'
   },
   {
      name:'Jaimico',
      phone:'3424088',
      street:'Calle Queretaro',
      city:'Queretaro',
      id:'4302221500'
   }
];


const typeDefs= gql`
   type Person{
      name:String!
      phone:String
      street:String!
      city:String!
      id:ID!  
   }

   type Query{
      personCount:Int!
      allPersons:[Person]!
   }
`  
const resolvers ={
   Query:{
      personCount: ()=> personas.length,
      allPersons:()=>personas
   }
}

const server = new ApolloServer({ typeDefs, resolvers });

server
.listen()
.then(({url})=>{
   console.log(`Servidor funcionando en ${url}`)
})

https://www.howtographql.com/graphql-js/1-getting-started/
https://www.youtube.com/watch?v=QG-qbmW-wes
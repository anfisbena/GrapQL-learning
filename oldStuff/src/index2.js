const { ApolloServer,gql} = require('apollo-server');

//bdd
var persons=[
  {
    name:"user1",
    phone:"123456",
    street:"Calle 1",
    city:"Barcelona",
    id:"0001"
  },
  {
    name:"user2",
    phone:"234567",
    street:"Calle 2",
    city:"Barcelona",
    id:"0002"
  },
  {
    name:"user3",
    phone:"345678",
    street:"Calle 3",
    city:"Funza",
    id:"0003"
  },
  {
    name:"user4",
    phone:"456789",
    street:"Calle 4",
    city:"Funza",
    id:"0004"
  },
  {
    name:"user5",
    phone:"567890",
    street:"Calle 5",
    city:"Chigorodó",
    id:"0005"
  },
]

//esquema
const typeDefs=gql`
  type persons{
    name:String!,
    phone:String,
    street:String!,
    city:String!,
    id:ID!,
  }
  type Query{
    personCount:Int!
    allPersons:[persons]!
    findPerson(name:String!):persons
  }
`
//Funcionalidad
const resolvers={
  Query:{
    personCount:()=>persons.length,
    allPersons:()=>persons,
    findPerson:(args)=>{
      const{name}=args
      return persons.find(person=>person.name===name)
    }
  }
}

//Servidor
const server=new ApolloServer({typeDefs,resolvers})
server.listen().then(({url})=>console.log("conectado a: "+url))
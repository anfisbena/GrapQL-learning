const { ApolloServer,gql} = require('apollo-server');

// Esquemas
const typeDefs =gql`
  type Query {
    info: String!
    feed: [infoBdd!]!
  }
  type infoBdd{
    id:ID!
    description:String!
    url:String!
    nested:[nest!]!
    arrayed:[String!]
  }
  type nest{
    data1:String!
    data2:String!
  }
`
// Funcionalidad
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: ()=>bdd, //apunta a la bdd
  },
  /*en este caso se define Link y no Query porque Query es palabra reservada, link es custom
  entonces decir feed{[infoBdd]} es lo mismo que decir bdd.infoBdd.XYZ*/
  infoBdd:{
    id:(parent)=>parent.id,
    description:(parent)=>parent.description,
    url:(parent)=>parent.url,
  },
  nest:{
    data1:(parent)=>parent.nested.data1,
    data2:(parent)=>parent.nested.data2,
  }
}

// Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );

  //bdd
var bdd=[
  {
    id:"link-0",
    url:"www.howtographql.com",
    description:"Fullstack tutorial",
    nested:{
      data1:"nested1",
      data2:"nested2",
    },
    arrayed:[("array1.1","array1.2"),("array2.1","array2.2")],
  },
  {
    id:"link-1",
    url:"www.howtomakeme.com",
    description:"4ssh0le tutorial",
    nested:{
      data1:"nested1",
      data2:"nested2",
      arrayed:[("array1.1","array1.2"),("array2.1","array2.2")],
    }
  }
]
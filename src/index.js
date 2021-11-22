const { ApolloServer } = require('apollo-server');

// 1
const typeDefs =gql `
  type Query {
    info: String!
    feed: [Link!]!
  }
  type Link{
    id:ID!
    description:String!
    url:String!
  }
`

// 2
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: ()=>links, //apunta a la bdd
  },
  link:{
    id:(parent)=>parent.id,
    description:(parent)=>parent.description,
    url:(parent)=>parent.url,
  }
}

// 3
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
var links=[{
  id:"link-0",
  url:"www.howtographql.com",
  description:"Fullstack tutorial"
}
]
const schema={};
const graphqlHTTP = require('express-graphql').graphqlHTTP;
app.use('/graphqlsegunsanmarcos', graphqlHTTP({
graphiql: true,
schema: schema
}));
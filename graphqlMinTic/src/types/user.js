import { gql } from 'apollo-server-express';

const userType=gql`
  type User{
    _id:ID!
    name:String!
    lastName:String!
    phone:String
    password:String!
    projects:[Project]
  }
  type Project{
    _id:ID
    name:String
    description:String
    topic:String
    owner:ID
  }
  type Query{
    getUsers:[User]
    geyUserById(_id:String):User
  }
  type Mutation{
    createUser(
      name:String!
      lastName:String!
      phone:String
      password:String!
      projects:[Project]
    ):User
    UpdateUser(     
      _id:ID! 
      name:String!
      lastName:String!
      phone:String
      password:String!
      projects:[Project]
    ):User
  }
`;

module.exports={userType}
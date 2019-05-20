const typeDefs = `
  type Query { todos: [Todo], todo(id: Int!): Todo }
  type Todo { id: Int!, todo: String!, done: Boolean! }
  type Mutation {  
      addTodo(todo: String!): [Todo], 
      removeTodo(id: Int!): [Todo], 
      editTodo(id: Int!, todo: String, done: Boolean): [Todo] 
    }
`;

module.exports = typeDefs;
const resolvers = ( todos ) => ({
    Query: {
      todos: () => todos,
      todo: (_, { id }) => todos.find(todo => todo.id === id)
    },
    Mutation: {
      addTodo: (_, { todo }) => {
        todos = [
          ...todos,
          { id: Math.max(...todos.map(elt => elt.id)) + 1, todo, done: false }
        ];
        return todos;
      },
      removeTodo: (_, { id }) => {
        todos = todos.filter(todo => todo.id !== id);
        return todos;
      },
      editTodo: (_, todo) => {
        let editThis = todos.find(elt => elt.id === todo.id);
        if (editThis) {
          todos = todos.map(elt =>
            todo.id === elt.id ? { ...elt, ...todo } : elt
          );
        }
        return todos;
      }
    }
  });

module.exports = resolvers;
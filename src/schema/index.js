import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { coworkByName, coworkById, coworkList } from '../queries';

// Define the schema with one top-level field, `user`, that
// takes an `id` argument and returns the User with that ID.
// Note that the `query` is a GraphQLObjectType, just like User.
// The `user` field, however, is a userType, which we defined above.
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      coworkList,
      coworkByName,
      coworkById,
    },
  }),
});

export default schema;

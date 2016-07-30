import { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';

export const cityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'City Name',
    },
    id: {
      type: GraphQLInt,
      description: 'Unique city ID',
    },
  }),
});


export const cityListType = new GraphQLList(cityType);

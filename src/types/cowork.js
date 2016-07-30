import { GraphQLString, GraphQLObjectType, GraphQLFloat, GraphQLList, GraphQLInt } from 'graphql';

export const coworkType = new GraphQLObjectType({
  name: 'Cowork',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Cowork Display Name',
    },
    id: {
      type: GraphQLInt,
      description: 'Unique Cowork ID',
    },
    phoneNumber: {
      type: GraphQLString,
      description: 'Contact telepone number for the cowork',
    },
    latitud: {
      type: GraphQLFloat,
      description: 'latitud for the Cowork',
    },
    longitud: {
      type: GraphQLFloat,
      description: 'longitud for the Cowork',
    },
    webpage: {
      type: GraphQLString,
      description: 'the webpage for the cowork',
    },
  }),
});


export const coworkListType = new GraphQLList(coworkType);

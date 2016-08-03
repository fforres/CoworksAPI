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
      resolve: (obj) => {
        if (obj.id && obj.id.low) {
          return obj.id.low;
        }
        return null;
      },
    },
    longDescription: {
      type: GraphQLString,
      description: 'Long text with the description of the cowork',
    },
    shortDescription: {
      type: GraphQLString,
      description: 'Short text with the description of the cowork, hopefully a catch-frase or something around 20 words',
    },
    street: {
      type: GraphQLString,
      description: 'Address - Street Name',
    },
    number: {
      type: GraphQLString,
      description: 'Address - Number',
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

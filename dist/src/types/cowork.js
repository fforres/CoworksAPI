import { GraphQLString, GraphQLObjectType, GraphQLFloat, GraphQLList, GraphQLInt } from 'graphql';
import { cityType } from './city';
import { countryType } from './country';

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
    city: {
      type: cityType,
      description: 'the current city of the cowork',
      resolve: (obj) => {
        const city = Object.assign({}, obj.City.properties, { id: obj.City.identity });
        return city;
      },
    },
    country: {
      type: countryType,
      description: 'Country information for the city',
      resolve: (obj) => {
        const country = Object.assign({}, obj.Country.properties, { id: obj.Country.identity });
        return country;
      },
    },
  }),
});


export const coworkListType = new GraphQLList(coworkType);

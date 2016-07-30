import { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';
import { cityListType } from './city';

export const countryType = new GraphQLObjectType({
  name: 'Country',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'Country Name',
    },
    id: {
      type: GraphQLInt,
      description: 'Unique country ID',
    },
    code: {
      type: GraphQLString,
      description: 'FIPS country code',
    },
    isoCode: {
      type: GraphQLString,
      description: 'ISO country code',
    },
    tld: {
      type: GraphQLString,
      description: 'TLD  for the country',
    },
    cities: {
      type: new GraphQLList(cityListType),
      description: 'Country Cities',
    },
  }),
});


export const countryListType = new GraphQLList(countryType);

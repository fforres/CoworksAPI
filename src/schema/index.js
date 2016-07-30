import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import {
  coworkByName, coworkById, coworkList,
  countryByName, countryById, countryList,
  cityByName, cityById, cityList, countryCities,
} from '../queries';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      coworkList,
      coworkByName,
      coworkById,
      countryByName,
      countryById,
      countryList,
      countryCities,
      cityByName,
      cityById,
      cityList,
    }),
  }),
});

export default schema;

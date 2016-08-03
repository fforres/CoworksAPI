import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql';
import {
  coworkByName,
  coworkById,
  coworkList,
  coworkByNameContainingText,
  countryByName,
  countryById,
  countryList,
  cityByName,
  cityById,
  cityList,
  citiesByCountry,
  citiesContainingText,
} from '../queries';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
      coworkList,
      coworkByName,
      coworkById,
      countryByName,
      coworkByNameContainingText,
      countryById,
      countryList,
      cityByName,
      cityById,
      cityList,
      citiesByCountry,
      citiesContainingText,
    }),
  }),
});

export default schema;

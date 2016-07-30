import { GraphQLString, GraphQLNonNull } from 'graphql';
import { countryType, countryListType } from '../types';
import { getCountryById, getCountryByName, getCountries } from '../models';
console.log(getCountryByName);

export const countryByName = {
  name: 'countryByName',
  type: countryType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Country Display Name',
    },
  },
  resolve: (root, { name }) => getCountryByName(name),
};


export const countryById = {
  name: 'countryById',
  type: countryType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Unique Country ID',
    },
  },
  resolve: (root, { id }) => getCountryById(id),
};

export const countryList = {
  name: 'countryList',
  description: 'Returns a list of countries', // TODO: define this query (Geolocated? by popularity?)
  type: countryListType,
  resolve: () => getCountries(),
};

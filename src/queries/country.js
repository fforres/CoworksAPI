import { GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';
import { countryType, countryListType } from '../types';
import { getCountryById, getCountryByName, getCountries, getCountryCities } from '../models';

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
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Unique Country ID',
    },
  },
  resolve: (root, { id }) => getCountryById(id),
};

export const countryCities = {
  name: 'countryList',
  description: 'Returns a list of countries', // TODO: define this query (Geolocated? by popularity?)
  type: countryType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Unique Country ID',
    },
  },
  resolve: (root, { id }) => getCountryCities(id),
};

export const countryList = {
  name: 'countryList',
  description: 'Returns a list of countries', // TODO: define this query (Geolocated? by popularity?)
  type: countryListType,
  resolve: () => getCountries(),
};

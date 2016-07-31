import { GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';
import { cityType, cityListType } from '../types';
import { getCityByName, getCityById, getCities, getCitiesByCountry, getCitiesContainingText } from '../models';

export const cityByName = {
  name: 'cityByName',
  type: cityType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'City Display Name',
    },
  },
  resolve: (root, { name }) => getCityByName(name),
};

export const citiesContainingText = {
  name: 'citiesContainingText',
  type: cityListType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'City Display Name',
    },
  },
  resolve: (root, { name }) => getCitiesContainingText(name),
};

export const cityById = {
  name: 'cityById',
  type: cityType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Unique City ID',
    },
  },
  resolve: (root, { id }) => getCityById(id),
};

export const cityList = {
  name: 'cityList',
  description: 'Returns a list of cities', // TODO: define this query (Geolocated? by popularity?)
  type: cityListType,
  resolve: () => getCities(),
};

export const citiesByCountry = {
  name: 'citiesByCountry',
  description: 'List of cities by country',
  type: cityListType,
  args: {
    countryId: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Unique Country id to filter cities',
    },
  },
  resolve: (root, { countryId }) => getCitiesByCountry(countryId),
};

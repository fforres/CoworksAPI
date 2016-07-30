import { GraphQLString, GraphQLNonNull } from 'graphql';
import { cityType, cityListType } from '../types';
import { getCityByName, getCityById, getCities } from '../models';

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


export const cityById = {
  name: 'cityById',
  type: cityType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
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

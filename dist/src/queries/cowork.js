import { GraphQLString, GraphQLNonNull, GraphQLInt } from 'graphql';
import { coworkType, coworkListType } from '../types';
import { getCoworkById, getCoworkByName, getCoworks, getCoworkThatContainsName } from '../models';

export const coworkByName = {
  name: 'coworkByName',
  type: coworkType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Cowork Display Name',
    },
  },
  resolve: (root, { name }) => getCoworkByName(name),
};


export const coworkByNameContainingText = {
  name: 'coworkByName',
  type: coworkType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Cowork Display Name',
    },
  },
  resolve: (root, { name }) => getCoworkThatContainsName(name),
};


export const coworkById = {
  type: coworkType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'Unique Cowork ID',
    },
  },
  resolve: (root, { id }) => getCoworkById(id),
};

export const coworkList = {
  name: 'coworkList',
  description: 'Returns a list of coworks', // TODO: define this query (Geolocated? by popularity?)
  type: coworkListType,
  resolve: () => getCoworks(),
};

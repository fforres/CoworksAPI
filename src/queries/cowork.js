import { GraphQLString, GraphQLNonNull } from 'graphql';
import { coworkType, coworksListType } from '../types';
import { getCoworkById, getCoworkByName, getCoworks } from '../models';

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


export const coworkById = {
  type: coworkType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Unique Cowork ID',
    },
  },
  resolve: (root, { id }) => getCoworkById(id),
};

export const coworkList = {
  name: 'coworkList',
  description: 'Returns a list (up until 10) of coworks',
  type: coworksListType,
  resolve: () => getCoworks(),
};

import { GraphQLString, GraphQLNonNull } from 'graphql';
import { coworkType, coworksListType } from '../types';
import { getCoworkById, getCoworkByName, getCoworks } from '../models';

export const coworkByName = {
  type: coworkType,
  // `args` describes the arguments that the `user` query accepts
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Cowork Display Name',
    },
  },
  // The resolve function describes how to "resolve" or fulfill
  // the incoming query.
  // In this case we use the `id` argument from above as a key
  // to get the User from `data`
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
  type: coworksListType,
  resolve: () => getCoworks(),
};

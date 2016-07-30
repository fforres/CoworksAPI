import { GraphQLString, GraphQLNonNull,GraphQLObjectType,GraphQLList } from 'graphql';
import { coworkType } from '../types';
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

let coworkers = [{
  name: 'Co-Work - Santiago Centro',
  id: 3636,
  country: 'CL',
  city: 'santiago',
  number: '863',
  phoneNumber: '+56985135860',
  latitud: -33.4394101,
  longitud: -70.649078,
  webpage: 'http://www.coworklatam.com/'

}, {
  name: 'La Ofi',
  id: 3637,
  country: 'CL',
  city: 'santiago',
  number: '140',
  phoneNumber: '+56229854768',
  latitud: -33.441609,
  longitud: -70.6297092,
  webpage: 'http://www.coworkinglaofi.cl/'
}
];

export const coworkList = {
  name: 'CoworkList',
  description: '...',
  type: new GraphQLList(coworkType),
  args: {},
  resolve: () => {
    return new Promise((resolve)=>{
        resolve(coworkers);
    })
  },
};

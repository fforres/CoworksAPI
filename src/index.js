import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import schema from './schema';


express().use('/', cors(), graphqlHTTP({
  schema,
  pretty: true,
})).listen(3009);
console.log('Listening on port: 3009');

if (process.env.NODE_ENV === 'development') {
  express().use('/', graphqlHTTP({
    schema,
    pretty: true,
    graphiql: true,
  })).listen(3010);
  console.log('Listening on port: 3010');
}

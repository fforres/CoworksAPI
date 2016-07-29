import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

express().use('/', graphqlHTTP({
  schema,
  pretty: true,
})).listen(3000);

if (process.env.NODE_ENV === 'development') {
  express().use('/', graphqlHTTP({
    schema,
    pretty: true,
    graphiql: true,
  })).listen(3001);
}

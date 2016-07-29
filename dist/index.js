'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _express2.default)().use('/', (0, _expressGraphql2.default)({
  schema: _schema2.default,
  pretty: true
})).listen(3000);

if (process.env.NODE_ENV === 'development') {
  (0, _express2.default)().use('/', (0, _expressGraphql2.default)({
    schema: _schema2.default,
    pretty: true,
    graphiql: true
  })).listen(3001);
}
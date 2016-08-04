'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _express2.default)().use('/', (0, _cors2.default)(), (0, _expressGraphql2.default)({
  schema: _schema2.default,
  pretty: true
})).listen(3009);
console.log('Listening on port: 3009');
if (process.env.NODE_ENV === 'development') {
  (0, _express2.default)().use('/', (0, _expressGraphql2.default)({
    schema: _schema2.default,
    pretty: true,
    graphiql: true
  })).listen(3010);
  console.log('Listening on port: 3010');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFHQSx5QkFBVSxHQUFWLENBQWMsR0FBZCxFQUFtQixxQkFBbkIsRUFBMkIsOEJBQVk7QUFDckMsMEJBRHFDO0FBRXJDLFVBQVE7QUFGNkIsQ0FBWixDQUEzQixFQUdJLE1BSEosQ0FHVyxJQUhYO0FBSUEsUUFBUSxHQUFSLENBQVkseUJBQVo7QUFDQSxJQUFJLFFBQVEsR0FBUixDQUFZLFFBQVosS0FBeUIsYUFBN0IsRUFBNEM7QUFDMUMsMkJBQVUsR0FBVixDQUFjLEdBQWQsRUFBbUIsOEJBQVk7QUFDN0IsNEJBRDZCO0FBRTdCLFlBQVEsSUFGcUI7QUFHN0IsY0FBVTtBQUhtQixHQUFaLENBQW5CLEVBSUksTUFKSixDQUlXLElBSlg7QUFLQSxVQUFRLEdBQVIsQ0FBWSx5QkFBWjtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgZ3JhcGhxbEhUVFAgZnJvbSAnZXhwcmVzcy1ncmFwaHFsJztcbmltcG9ydCBzY2hlbWEgZnJvbSAnLi9zY2hlbWEnO1xuaW1wb3J0IGNvcnMgZnJvbSAnY29ycyc7XG5cblxuZXhwcmVzcygpLnVzZSgnLycsIGNvcnMoKSwgZ3JhcGhxbEhUVFAoe1xuICBzY2hlbWEsXG4gIHByZXR0eTogdHJ1ZSxcbn0pKS5saXN0ZW4oMzAwOSk7XG5jb25zb2xlLmxvZygnTGlzdGVuaW5nIG9uIHBvcnQ6IDMwMDknKVxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGV4cHJlc3MoKS51c2UoJy8nLCBncmFwaHFsSFRUUCh7XG4gICAgc2NoZW1hLFxuICAgIHByZXR0eTogdHJ1ZSxcbiAgICBncmFwaGlxbDogdHJ1ZSxcbiAgfSkpLmxpc3RlbigzMDEwKTtcbiAgY29uc29sZS5sb2coJ0xpc3RlbmluZyBvbiBwb3J0OiAzMDEwJylcbn1cbiJdfQ==
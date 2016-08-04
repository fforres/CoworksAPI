'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCitiesContainingText = exports.getCitiesContainingTextAsync = exports.getCitiesByCountry = exports.getCitiesByCountryAsync = exports.getCities = exports.getCityByName = exports.getCityById = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getCityById = exports.getCityById = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(name) {
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return getCityByIdAsync(name);

          case 3:
            return _context.abrupt('return', _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            return _context.abrupt('return', _context.t0);

          case 10:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 6]]);
  }));

  return function getCityById(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getCityByName = exports.getCityByName = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(name) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getCityByNameAsync(name);

          case 3:
            return _context2.abrupt('return', _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2['catch'](0);

            console.error(_context2.t0);
            return _context2.abrupt('return', _context2.t0);

          case 10:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 6]]);
  }));

  return function getCityByName(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getCities = exports.getCities = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return getCitiesAsync();

          case 3:
            return _context3.abrupt('return', _context3.sent);

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3['catch'](0);

            console.error(_context3.t0);
            return _context3.abrupt('return', _context3.t0);

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 6]]);
  }));

  return function getCities() {
    return _ref3.apply(this, arguments);
  };
}();
//
// c.isoCode as isoCode,
// c.name as name,
// c.fipsCode as code,
// c.tld as tld,
// ID(c) as id,
// ct as cities

var getCitiesByCountry = exports.getCitiesByCountry = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(countryId) {
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return getCitiesByCountryAsync(countryId);

          case 3:
            return _context4.abrupt('return', _context4.sent);

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);
            return _context4.abrupt('return', _context4.t0);

          case 10:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 6]]);
  }));

  return function getCitiesByCountry(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var getCitiesContainingText = exports.getCitiesContainingText = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(text) {
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return getCitiesContainingTextAsync(text);

          case 3:
            return _context5.abrupt('return', _context5.sent);

          case 6:
            _context5.prev = 6;
            _context5.t0 = _context5['catch'](0);

            console.error(_context5.t0);
            return _context5.abrupt('return', _context5.t0);

          case 10:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this, [[0, 6]]);
  }));

  return function getCitiesContainingText(_x4) {
    return _ref5.apply(this, arguments);
  };
}();

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCityByIdAsync = function getCityByIdAsync(id) {
  var query = '\n    MATCH (c:City)-[:IS_FROM]->(co:Country)\n    WHERE ID(c) = toInt({id})\n    RETURN\n      ID(c) as id,\n      c.name as name,\n      co as Country\n  ';
  var params = {
    id: id
  };

  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query, params).then(function (results) {
      if (results.records.length < 1) {
        reject('No cities found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList[0]);
      }
    }).catch(reject);
  });
};

var getCityByNameAsync = function getCityByNameAsync(name) {
  var query = '\n    MATCH (c:City {\n      nameLower: lower({name})\n    })-[:IS_FROM]->(co:Country)\n    RETURN\n      ID(c) as id,\n      c.name as name,\n      co as Country\n  ';
  var params = {
    name: name
  };
  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query, params).then(function (results) {
      if (results.records.length < 1) {
        reject('No cities found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList[0]);
      }
    }).catch(reject);
  });
};

var getCitiesAsync = function getCitiesAsync() {
  var query = '\n    MATCH (c:City)-[:IS_FROM]->(co:Country)\n    RETURN\n      ID(c) as id,\n      c.name as name,\n      co as Country\n  ';
  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query).then(function (results) {
      if (results.records.length < 1) {
        reject('No cities found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList);
      }
    }).catch(reject);
  });
};

var getCitiesByCountryAsync = exports.getCitiesByCountryAsync = function getCitiesByCountryAsync(countryId) {
  var query = '\n      MATCH (c:City)-[:IS_FROM]->(co:Country)\n      WHERE ID(co) = toInt({id})\n      RETURN\n        ID(c) as id,\n        c.name as name,\n        co as Country\n      LIMIT 3\n    ';
  var params = {
    id: countryId
  };
  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query, params).then(function (results) {
      if (results.records.length < 1) {
        reject('No cities found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList);
      }
    }).catch(reject);
  });
};

var getCitiesContainingTextAsync = exports.getCitiesContainingTextAsync = function getCitiesContainingTextAsync(name) {
  var query = '\n    MATCH (c:City)-[:IS_FROM]->(co:Country)\n    WHERE c.nameLower =~ \'(?i).*' + name + '.*\'\n    RETURN\n      ID(c) as id,\n      c.name as name,\n      co as Country\n    ';
  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query).then(function (results) {
      if (results.records.length < 1) {
        reject('No cities found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList);
      }
    }).catch(reject);
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY2l0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3dFQWlDTyxpQkFBMkIsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFVSxpQkFBaUIsSUFBakIsQ0FGVjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFJSCxvQkFBUSxLQUFSO0FBSkc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWUsVzs7Ozs7O3lFQXFDZixrQkFBNkIsSUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFVSxtQkFBbUIsSUFBbkIsQ0FGVjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFJSCxvQkFBUSxLQUFSO0FBSkc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWUsYTs7Ozs7O3lFQWlDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVVLGdCQUZWOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUlILG9CQUFRLEtBQVI7QUFKRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZSxTOzs7O0FBUXRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7eUVBOEJPLGtCQUFrQyxTQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUVVLHdCQUF3QixTQUF4QixDQUZWOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUlILG9CQUFRLEtBQVI7QUFKRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZSxrQjs7Ozs7O3lFQWtDZixrQkFBdUMsSUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFVSw2QkFBNkIsSUFBN0IsQ0FG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QU47QUFRQSxTQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsaUNBQ0csR0FESCxDQUNPLEtBRFAsRUFFRyxJQUZILENBRVEsVUFBQyxPQUFELEVBQWE7QUFDakIsVUFBSSxRQUFRLE9BQVIsQ0FBZ0IsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsZUFBTyxpQkFBUDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU0sV0FBVywyQkFBYSxRQUFRLE9BQXJCLENBQWpCO0FBQ0EsZ0JBQVEsUUFBUjtBQUNEO0FBQ0YsS0FUSCxFQVVHLEtBVkgsQ0FVUyxNQVZUO0FBV0QsR0FaTSxDQUFQO0FBYUQsQ0F0Qk0iLCJmaWxlIjoiY2l0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIG5lbzRqU2Vzc2lvbixcbiAgY3JlYXRlT2JqZWN0LFxufSBmcm9tICcuLi9oZWxwZXJzJztcblxuY29uc3QgZ2V0Q2l0eUJ5SWRBc3luYyA9IChpZCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBNQVRDSCAoYzpDaXR5KS1bOklTX0ZST01dLT4oY286Q291bnRyeSlcbiAgICBXSEVSRSBJRChjKSA9IHRvSW50KHtpZH0pXG4gICAgUkVUVVJOXG4gICAgICBJRChjKSBhcyBpZCxcbiAgICAgIGMubmFtZSBhcyBuYW1lLFxuICAgICAgY28gYXMgQ291bnRyeVxuICBgO1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgaWQsXG4gIH07XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZW80alNlc3Npb24oKVxuICAgICAgLnJ1bihxdWVyeSwgcGFyYW1zKVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMucmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmVqZWN0KCdObyBjaXRpZXMgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3RbMF0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENpdHlCeUlkKG5hbWUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0Q2l0eUJ5SWRBc3luYyhuYW1lKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuY29uc3QgZ2V0Q2l0eUJ5TmFtZUFzeW5jID0gKG5hbWUpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgTUFUQ0ggKGM6Q2l0eSB7XG4gICAgICBuYW1lTG93ZXI6IGxvd2VyKHtuYW1lfSlcbiAgICB9KS1bOklTX0ZST01dLT4oY286Q291bnRyeSlcbiAgICBSRVRVUk5cbiAgICAgIElEKGMpIGFzIGlkLFxuICAgICAgYy5uYW1lIGFzIG5hbWUsXG4gICAgICBjbyBhcyBDb3VudHJ5XG4gIGA7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBuYW1lLFxuICB9O1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5lbzRqU2Vzc2lvbigpXG4gICAgICAucnVuKHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cy5yZWNvcmRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZWplY3QoJ05vIGNpdGllcyBmb3VuZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gY3JlYXRlT2JqZWN0KHJlc3VsdHMucmVjb3Jkcyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhTGlzdFswXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0eUJ5TmFtZShuYW1lKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGdldENpdHlCeU5hbWVBc3luYyhuYW1lKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuXG5jb25zdCBnZXRDaXRpZXNBc3luYyA9ICgpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgTUFUQ0ggKGM6Q2l0eSktWzpJU19GUk9NXS0+KGNvOkNvdW50cnkpXG4gICAgUkVUVVJOXG4gICAgICBJRChjKSBhcyBpZCxcbiAgICAgIGMubmFtZSBhcyBuYW1lLFxuICAgICAgY28gYXMgQ291bnRyeVxuICBgO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5lbzRqU2Vzc2lvbigpXG4gICAgICAucnVuKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMucmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmVqZWN0KCdObyBjaXRpZXMgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3QpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENpdGllcygpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0Q2l0aWVzQXN5bmMoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cbi8vXG4vLyBjLmlzb0NvZGUgYXMgaXNvQ29kZSxcbi8vIGMubmFtZSBhcyBuYW1lLFxuLy8gYy5maXBzQ29kZSBhcyBjb2RlLFxuLy8gYy50bGQgYXMgdGxkLFxuLy8gSUQoYykgYXMgaWQsXG4vLyBjdCBhcyBjaXRpZXNcblxuZXhwb3J0IGNvbnN0IGdldENpdGllc0J5Q291bnRyeUFzeW5jID0gKGNvdW50cnlJZCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICAgIE1BVENIIChjOkNpdHkpLVs6SVNfRlJPTV0tPihjbzpDb3VudHJ5KVxuICAgICAgV0hFUkUgSUQoY28pID0gdG9JbnQoe2lkfSlcbiAgICAgIFJFVFVSTlxuICAgICAgICBJRChjKSBhcyBpZCxcbiAgICAgICAgYy5uYW1lIGFzIG5hbWUsXG4gICAgICAgIGNvIGFzIENvdW50cnlcbiAgICAgIExJTUlUIDNcbiAgICBgO1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgaWQ6IGNvdW50cnlJZCxcbiAgfTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZW80alNlc3Npb24oKVxuICAgICAgLnJ1bihxdWVyeSwgcGFyYW1zKVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMucmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmVqZWN0KCdObyBjaXRpZXMgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3QpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENpdGllc0J5Q291bnRyeShjb3VudHJ5SWQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0Q2l0aWVzQnlDb3VudHJ5QXN5bmMoY291bnRyeUlkKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0Q2l0aWVzQ29udGFpbmluZ1RleHRBc3luYyA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIE1BVENIIChjOkNpdHkpLVs6SVNfRlJPTV0tPihjbzpDb3VudHJ5KVxuICAgIFdIRVJFIGMubmFtZUxvd2VyID1+ICcoP2kpLioke25hbWV9LionXG4gICAgUkVUVVJOXG4gICAgICBJRChjKSBhcyBpZCxcbiAgICAgIGMubmFtZSBhcyBuYW1lLFxuICAgICAgY28gYXMgQ291bnRyeVxuICAgIGA7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmVvNGpTZXNzaW9uKClcbiAgICAgIC5ydW4ocXVlcnkpXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cy5yZWNvcmRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZWplY3QoJ05vIGNpdGllcyBmb3VuZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gY3JlYXRlT2JqZWN0KHJlc3VsdHMucmVjb3Jkcyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhTGlzdCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2l0aWVzQ29udGFpbmluZ1RleHQodGV4dCkge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBnZXRDaXRpZXNDb250YWluaW5nVGV4dEFzeW5jKHRleHQpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIl19
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCitiesContainingText = exports.getCitiesContainingTextAsync = exports.getCitiesByCountry = exports.getCitiesByCountryAsync = exports.getCities = exports.getCityByName = exports.getCityById = undefined;

var getCityById = exports.getCityById = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(name) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(name) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(countryId) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
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
  var _ref5 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(text) {
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY2l0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt1REFpQ08saUJBQTJCLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVUsaUJBQWlCLElBQWpCLENBRlY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBSUgsb0JBQVEsS0FBUjtBQUpHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLFc7Ozs7Ozt3REFxQ2Ysa0JBQTZCLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVUsbUJBQW1CLElBQW5CLENBRlY7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBSUgsb0JBQVEsS0FBUjtBQUpHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLGE7Ozs7Ozt3REFpQ2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFVSxnQkFGVjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFJSCxvQkFBUSxLQUFSO0FBSkc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWUsUzs7OztBQVF0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O3dEQThCTyxrQkFBa0MsU0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFVSx3QkFBd0IsU0FBeEIsQ0FGVjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFJSCxvQkFBUSxLQUFSO0FBSkc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWUsa0I7Ozs7Ozt3REFrQ2Ysa0JBQXVDLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRVUsNkJBQTZCLElBQTdCLENBRlY7O0FBQUE7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U0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3RDLGlDQUNHLEdBREgsQ0FDTyxLQURQLEVBRUcsSUFGSCxDQUVRLFVBQUMsT0FBRCxFQUFhO0FBQ2pCLFVBQUksUUFBUSxPQUFSLENBQWdCLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzlCLGVBQU8saUJBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNLFdBQVcsMkJBQWEsUUFBUSxPQUFyQixDQUFqQjtBQUNBLGdCQUFRLFFBQVI7QUFDRDtBQUNGLEtBVEgsRUFVRyxLQVZILENBVVMsTUFWVDtBQVdELEdBWk0sQ0FBUDtBQWFELENBdEJNIiwiZmlsZSI6ImNpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBuZW80alNlc3Npb24sXG4gIGNyZWF0ZU9iamVjdCxcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmNvbnN0IGdldENpdHlCeUlkQXN5bmMgPSAoaWQpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgTUFUQ0ggKGM6Q2l0eSktWzpJU19GUk9NXS0+KGNvOkNvdW50cnkpXG4gICAgV0hFUkUgSUQoYykgPSB0b0ludCh7aWR9KVxuICAgIFJFVFVSTlxuICAgICAgSUQoYykgYXMgaWQsXG4gICAgICBjLm5hbWUgYXMgbmFtZSxcbiAgICAgIGNvIGFzIENvdW50cnlcbiAgYDtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIGlkLFxuICB9O1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmVvNGpTZXNzaW9uKClcbiAgICAgIC5ydW4ocXVlcnksIHBhcmFtcylcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRzLnJlY29yZHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHJlamVjdCgnTm8gY2l0aWVzIGZvdW5kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YUxpc3QgPSBjcmVhdGVPYmplY3QocmVzdWx0cy5yZWNvcmRzKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGFMaXN0WzBdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZWplY3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaXR5QnlJZChuYW1lKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGdldENpdHlCeUlkQXN5bmMobmFtZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbmNvbnN0IGdldENpdHlCeU5hbWVBc3luYyA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIE1BVENIIChjOkNpdHkge1xuICAgICAgbmFtZUxvd2VyOiBsb3dlcih7bmFtZX0pXG4gICAgfSktWzpJU19GUk9NXS0+KGNvOkNvdW50cnkpXG4gICAgUkVUVVJOXG4gICAgICBJRChjKSBhcyBpZCxcbiAgICAgIGMubmFtZSBhcyBuYW1lLFxuICAgICAgY28gYXMgQ291bnRyeVxuICBgO1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgbmFtZSxcbiAgfTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZW80alNlc3Npb24oKVxuICAgICAgLnJ1bihxdWVyeSwgcGFyYW1zKVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMucmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmVqZWN0KCdObyBjaXRpZXMgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3RbMF0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENpdHlCeU5hbWUobmFtZSkge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBnZXRDaXR5QnlOYW1lQXN5bmMobmFtZSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cblxuY29uc3QgZ2V0Q2l0aWVzQXN5bmMgPSAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIE1BVENIIChjOkNpdHkpLVs6SVNfRlJPTV0tPihjbzpDb3VudHJ5KVxuICAgIFJFVFVSTlxuICAgICAgSUQoYykgYXMgaWQsXG4gICAgICBjLm5hbWUgYXMgbmFtZSxcbiAgICAgIGNvIGFzIENvdW50cnlcbiAgYDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZW80alNlc3Npb24oKVxuICAgICAgLnJ1bihxdWVyeSlcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRzLnJlY29yZHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHJlamVjdCgnTm8gY2l0aWVzIGZvdW5kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YUxpc3QgPSBjcmVhdGVPYmplY3QocmVzdWx0cy5yZWNvcmRzKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGFMaXN0KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZWplY3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaXRpZXMoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGdldENpdGllc0FzeW5jKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG4vL1xuLy8gYy5pc29Db2RlIGFzIGlzb0NvZGUsXG4vLyBjLm5hbWUgYXMgbmFtZSxcbi8vIGMuZmlwc0NvZGUgYXMgY29kZSxcbi8vIGMudGxkIGFzIHRsZCxcbi8vIElEKGMpIGFzIGlkLFxuLy8gY3QgYXMgY2l0aWVzXG5cbmV4cG9ydCBjb25zdCBnZXRDaXRpZXNCeUNvdW50cnlBc3luYyA9IChjb3VudHJ5SWQpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgICBNQVRDSCAoYzpDaXR5KS1bOklTX0ZST01dLT4oY286Q291bnRyeSlcbiAgICAgIFdIRVJFIElEKGNvKSA9IHRvSW50KHtpZH0pXG4gICAgICBSRVRVUk5cbiAgICAgICAgSUQoYykgYXMgaWQsXG4gICAgICAgIGMubmFtZSBhcyBuYW1lLFxuICAgICAgICBjbyBhcyBDb3VudHJ5XG4gICAgICBMSU1JVCAzXG4gICAgYDtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIGlkOiBjb3VudHJ5SWQsXG4gIH07XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmVvNGpTZXNzaW9uKClcbiAgICAgIC5ydW4ocXVlcnksIHBhcmFtcylcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRzLnJlY29yZHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHJlamVjdCgnTm8gY2l0aWVzIGZvdW5kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YUxpc3QgPSBjcmVhdGVPYmplY3QocmVzdWx0cy5yZWNvcmRzKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGFMaXN0KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZWplY3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDaXRpZXNCeUNvdW50cnkoY291bnRyeUlkKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGdldENpdGllc0J5Q291bnRyeUFzeW5jKGNvdW50cnlJZCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IGdldENpdGllc0NvbnRhaW5pbmdUZXh0QXN5bmMgPSAobmFtZSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBNQVRDSCAoYzpDaXR5KS1bOklTX0ZST01dLT4oY286Q291bnRyeSlcbiAgICBXSEVSRSBjLm5hbWVMb3dlciA9fiAnKD9pKS4qJHtuYW1lfS4qJ1xuICAgIFJFVFVSTlxuICAgICAgSUQoYykgYXMgaWQsXG4gICAgICBjLm5hbWUgYXMgbmFtZSxcbiAgICAgIGNvIGFzIENvdW50cnlcbiAgICBgO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5lbzRqU2Vzc2lvbigpXG4gICAgICAucnVuKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMucmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmVqZWN0KCdObyBjaXRpZXMgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3QpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENpdGllc0NvbnRhaW5pbmdUZXh0KHRleHQpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0Q2l0aWVzQ29udGFpbmluZ1RleHRBc3luYyh0ZXh0KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cbiJdfQ==
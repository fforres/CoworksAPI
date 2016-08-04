'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountries = exports.getCountryByName = exports.getCountryById = exports.getCountryByIdAsync = undefined;

var getCountryById = exports.getCountryById = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(id) {
    var countryById;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return getCountryByIdAsync(id);

          case 3:
            countryById = _context.sent;
            return _context.abrupt('return', countryById);

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](0);

            console.error(_context.t0);
            return _context.abrupt('return', _context.t0);

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getCountryById(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getCountryByName = exports.getCountryByName = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(name) {
    var countryByName;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getCountryByNameAsync(name);

          case 3:
            countryByName = _context2.sent;
            return _context2.abrupt('return', countryByName);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](0);

            console.error(_context2.t0);
            return _context2.abrupt('return', _context2.t0);

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 7]]);
  }));

  return function getCountryByName(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getCountries = exports.getCountries = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
    var countriesList;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return getCountriesAsync();

          case 3:
            countriesList = _context3.sent;
            return _context3.abrupt('return', countriesList);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);

            console.error(_context3.t0);
            return _context3.abrupt('return', _context3.t0);

          case 11:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this, [[0, 7]]);
  }));

  return function getCountries() {
    return _ref3.apply(this, arguments);
  };
}();

var _helpers = require('../helpers');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var getCountryByIdAsync = exports.getCountryByIdAsync = function getCountryByIdAsync(id) {
  var query = '\n    MATCH (c:Country)\n    WHERE ID(c) = toInt({id})\n    RETURN\n      c.code,\n      ID(c) as id,\n      c.country as country,\n      c.city as city,\n      c.number as number,\n      c.phone as phoneNumber,\n      c.lat as latitud,\n      c.long as longitud,\n      c.url as webpage\n  ';
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

var getCountryByNameAsync = function getCountryByNameAsync(name) {
  var query = '\n    MATCH (c:Country {\n      nameLower: lower({name})\n    })\n    RETURN\n      ID(c) as id,\n      c.isoCode as isoCode,\n      c.name as name,\n      c.fipsCode as code,\n      c.tld as tld\n    LIMIT 1\n  ';
  var params = {
    name: name
  };
  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query, params).then(function (results) {
      if (results.records.length < 1) {
        reject('No countries found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList[0]);
      }
    }).catch(reject);
  });
};

var getCountriesAsync = function getCountriesAsync() {
  var query = '\n    MATCH (c:Country)\n    RETURN\n      ID(c) as id,\n      c.isoCode as isoCode,\n      c.name as name,\n      c.fipsCode as code,\n      c.tld as tld\n  ';
  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query).then(function (results) {
      if (results.records.length < 1) {
        reject('No countries found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList);
      }
    }).catch(reject);
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY291bnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozt1REFtQ08saUJBQThCLEVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFdUIsb0JBQW9CLEVBQXBCLENBRnZCOztBQUFBO0FBRUcsdUJBRkg7QUFBQSw2Q0FHSSxXQUhKOztBQUFBO0FBQUE7QUFBQTs7QUFLSCxvQkFBUSxLQUFSO0FBTEc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWUsYzs7Ozs7O3dEQXlDZixrQkFBZ0MsSUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUV5QixzQkFBc0IsSUFBdEIsQ0FGekI7O0FBQUE7QUFFRyx5QkFGSDtBQUFBLDhDQUdJLGFBSEo7O0FBQUE7QUFBQTtBQUFBOztBQUtILG9CQUFRLEtBQVI7QUFMRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZSxnQjs7Ozs7O3dEQW9DZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRXlCLG1CQUZ6Qjs7QUFBQTtBQUVHLHlCQUZIO0FBQUEsOENBR0ksYUFISjs7QUFBQTtBQUFBO0FBQUE7O0FBS0gsb0JBQVEsS0FBUjtBQUxHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLFk7Ozs7O0FBaEh0Qjs7OztBQUVPLElBQU0sb0RBQXNCLFNBQXRCLG1CQUFzQixDQUFDLEVBQUQsRUFBUTtBQUN6QyxNQUFNLDZTQUFOO0FBY0EsTUFBTSxTQUFTO0FBQ2I7QUFEYSxHQUFmO0FBR0EsU0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3RDLGlDQUNHLEdBREgsQ0FDTyxLQURQLEVBQ2MsTUFEZCxFQUVHLElBRkgsQ0FFUSxVQUFDLE9BQUQsRUFBYTtBQUNqQixVQUFJLFFBQVEsT0FBUixDQUFnQixNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUM5QixlQUFPLGlCQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTSxXQUFXLDJCQUFhLFFBQVEsT0FBckIsQ0FBakI7QUFDQSxnQkFBUSxTQUFTLENBQVQsQ0FBUjtBQUNEO0FBQ0YsS0FUSCxFQVVHLEtBVkgsQ0FVUyxNQVZUO0FBV0QsR0FaTSxDQUFQO0FBYUQsQ0EvQk07O0FBMkNQLElBQU0sd0JBQXdCLFNBQXhCLHFCQUF3QixDQUFDLElBQUQsRUFBVTtBQUN0QyxNQUFNLDhOQUFOO0FBWUEsTUFBTSxTQUFTO0FBQ2I7QUFEYSxHQUFmO0FBR0EsU0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3RDLGlDQUNHLEdBREgsQ0FDTyxLQURQLEVBQ2MsTUFEZCxFQUVHLElBRkgsQ0FFUSxVQUFDLE9BQUQsRUFBYTtBQUNqQixVQUFJLFFBQVEsT0FBUixDQUFnQixNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUM5QixlQUFPLG9CQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTSxXQUFXLDJCQUFhLFFBQVEsT0FBckIsQ0FBakI7QUFDQSxnQkFBUSxTQUFTLENBQVQsQ0FBUjtBQUNEO0FBQ0YsS0FUSCxFQVVHLEtBVkgsQ0FVUyxNQVZUO0FBV0QsR0FaTSxDQUFQO0FBYUQsQ0E3QkQ7O0FBMENBLElBQU0sb0JBQW9CLFNBQXBCLGlCQUFvQixHQUFNO0FBQzlCLE1BQU0sd0tBQU47QUFTQSxTQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsaUNBQ0csR0FESCxDQUNPLEtBRFAsRUFFRyxJQUZILENBRVEsVUFBQyxPQUFELEVBQWE7QUFDakIsVUFBSSxRQUFRLE9BQVIsQ0FBZ0IsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsZUFBTyxvQkFBUDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU0sV0FBVywyQkFBYSxRQUFRLE9BQXJCLENBQWpCO0FBQ0EsZ0JBQVEsUUFBUjtBQUNEO0FBQ0YsS0FUSCxFQVVHLEtBVkgsQ0FVUyxNQVZUO0FBV0QsR0FaTSxDQUFQO0FBYUQsQ0F2QkQiLCJmaWxlIjoiY291bnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5lbzRqU2Vzc2lvbiwgY3JlYXRlT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb3VudHJ5QnlJZEFzeW5jID0gKGlkKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIE1BVENIIChjOkNvdW50cnkpXG4gICAgV0hFUkUgSUQoYykgPSB0b0ludCh7aWR9KVxuICAgIFJFVFVSTlxuICAgICAgYy5jb2RlLFxuICAgICAgSUQoYykgYXMgaWQsXG4gICAgICBjLmNvdW50cnkgYXMgY291bnRyeSxcbiAgICAgIGMuY2l0eSBhcyBjaXR5LFxuICAgICAgYy5udW1iZXIgYXMgbnVtYmVyLFxuICAgICAgYy5waG9uZSBhcyBwaG9uZU51bWJlcixcbiAgICAgIGMubGF0IGFzIGxhdGl0dWQsXG4gICAgICBjLmxvbmcgYXMgbG9uZ2l0dWQsXG4gICAgICBjLnVybCBhcyB3ZWJwYWdlXG4gIGA7XG4gIGNvbnN0IHBhcmFtcyA9IHtcbiAgICBpZCxcbiAgfTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZW80alNlc3Npb24oKVxuICAgICAgLnJ1bihxdWVyeSwgcGFyYW1zKVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMucmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmVqZWN0KCdObyBjaXRpZXMgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3RbMF0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvdW50cnlCeUlkKGlkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY291bnRyeUJ5SWQgPSBhd2FpdCBnZXRDb3VudHJ5QnlJZEFzeW5jKGlkKTtcbiAgICByZXR1cm4gY291bnRyeUJ5SWQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cbmNvbnN0IGdldENvdW50cnlCeU5hbWVBc3luYyA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIE1BVENIIChjOkNvdW50cnkge1xuICAgICAgbmFtZUxvd2VyOiBsb3dlcih7bmFtZX0pXG4gICAgfSlcbiAgICBSRVRVUk5cbiAgICAgIElEKGMpIGFzIGlkLFxuICAgICAgYy5pc29Db2RlIGFzIGlzb0NvZGUsXG4gICAgICBjLm5hbWUgYXMgbmFtZSxcbiAgICAgIGMuZmlwc0NvZGUgYXMgY29kZSxcbiAgICAgIGMudGxkIGFzIHRsZFxuICAgIExJTUlUIDFcbiAgYDtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIG5hbWUsXG4gIH07XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmVvNGpTZXNzaW9uKClcbiAgICAgIC5ydW4ocXVlcnksIHBhcmFtcylcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRzLnJlY29yZHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHJlamVjdCgnTm8gY291bnRyaWVzIGZvdW5kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YUxpc3QgPSBjcmVhdGVPYmplY3QocmVzdWx0cy5yZWNvcmRzKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGFMaXN0WzBdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZWplY3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3VudHJ5QnlOYW1lKG5hbWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb3VudHJ5QnlOYW1lID0gYXdhaXQgZ2V0Q291bnRyeUJ5TmFtZUFzeW5jKG5hbWUpO1xuICAgIHJldHVybiBjb3VudHJ5QnlOYW1lO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuXG5cbmNvbnN0IGdldENvdW50cmllc0FzeW5jID0gKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBNQVRDSCAoYzpDb3VudHJ5KVxuICAgIFJFVFVSTlxuICAgICAgSUQoYykgYXMgaWQsXG4gICAgICBjLmlzb0NvZGUgYXMgaXNvQ29kZSxcbiAgICAgIGMubmFtZSBhcyBuYW1lLFxuICAgICAgYy5maXBzQ29kZSBhcyBjb2RlLFxuICAgICAgYy50bGQgYXMgdGxkXG4gIGA7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmVvNGpTZXNzaW9uKClcbiAgICAgIC5ydW4ocXVlcnkpXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cy5yZWNvcmRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZWplY3QoJ05vIGNvdW50cmllcyBmb3VuZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gY3JlYXRlT2JqZWN0KHJlc3VsdHMucmVjb3Jkcyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhTGlzdCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291bnRyaWVzKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvdW50cmllc0xpc3QgPSBhd2FpdCBnZXRDb3VudHJpZXNBc3luYygpO1xuICAgIHJldHVybiBjb3VudHJpZXNMaXN0O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIl19
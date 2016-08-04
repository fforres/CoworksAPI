'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountries = exports.getCountryByName = exports.getCountryById = exports.getCountryByIdAsync = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getCountryById = exports.getCountryById = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
    var countryById;
    return _regenerator2.default.wrap(function _callee$(_context) {
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
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(name) {
    var countryByName;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
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
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var countriesList;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY291bnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3dFQW1DTyxpQkFBOEIsRUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUV1QixvQkFBb0IsRUFBcEIsQ0FGdkI7O0FBQUE7QUFFRyx1QkFGSDtBQUFBLDZDQUdJLFdBSEo7O0FBQUE7QUFBQTtBQUFBOztBQUtILG9CQUFRLEtBQVI7QUFMRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZSxjOzs7Ozs7eUVBeUNmLGtCQUFnQyxJQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRXlCLHNCQUFzQixJQUF0QixDQUZ6Qjs7QUFBQTtBQUVHLHlCQUZIO0FBQUEsOENBR0ksYUFISjs7QUFBQTtBQUFBO0FBQUE7O0FBS0gsb0JBQVEsS0FBUjtBQUxHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLGdCOzs7Ozs7eUVBb0NmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFeUIsbUJBRnpCOztBQUFBO0FBRUcseUJBRkg7QUFBQSw4Q0FHSSxhQUhKOztBQUFBO0FBQUE7QUFBQTs7QUFLSCxvQkFBUSxLQUFSO0FBTEc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWUsWTs7Ozs7QUFoSHRCOzs7O0FBRU8sSUFBTSxvREFBc0IsU0FBdEIsbUJBQXNCLENBQUMsRUFBRCxFQUFRO0FBQ3pDLE1BQU0sNlNBQU47QUFjQSxNQUFNLFNBQVM7QUFDYjtBQURhLEdBQWY7QUFHQSxTQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsaUNBQ0csR0FESCxDQUNPLEtBRFAsRUFDYyxNQURkLEVBRUcsSUFGSCxDQUVRLFVBQUMsT0FBRCxFQUFhO0FBQ2pCLFVBQUksUUFBUSxPQUFSLENBQWdCLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzlCLGVBQU8saUJBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNLFdBQVcsMkJBQWEsUUFBUSxPQUFyQixDQUFqQjtBQUNBLGdCQUFRLFNBQVMsQ0FBVCxDQUFSO0FBQ0Q7QUFDRixLQVRILEVBVUcsS0FWSCxDQVVTLE1BVlQ7QUFXRCxHQVpNLENBQVA7QUFhRCxDQS9CTTs7QUEyQ1AsSUFBTSx3QkFBd0IsU0FBeEIscUJBQXdCLENBQUMsSUFBRCxFQUFVO0FBQ3RDLE1BQU0sOE5BQU47QUFZQSxNQUFNLFNBQVM7QUFDYjtBQURhLEdBQWY7QUFHQSxTQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsaUNBQ0csR0FESCxDQUNPLEtBRFAsRUFDYyxNQURkLEVBRUcsSUFGSCxDQUVRLFVBQUMsT0FBRCxFQUFhO0FBQ2pCLFVBQUksUUFBUSxPQUFSLENBQWdCLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzlCLGVBQU8sb0JBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNLFdBQVcsMkJBQWEsUUFBUSxPQUFyQixDQUFqQjtBQUNBLGdCQUFRLFNBQVMsQ0FBVCxDQUFSO0FBQ0Q7QUFDRixLQVRILEVBVUcsS0FWSCxDQVVTLE1BVlQ7QUFXRCxHQVpNLENBQVA7QUFhRCxDQTdCRDs7QUEwQ0EsSUFBTSxvQkFBb0IsU0FBcEIsaUJBQW9CLEdBQU07QUFDOUIsTUFBTSx3S0FBTjtBQVNBLFNBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUN0QyxpQ0FDRyxHQURILENBQ08sS0FEUCxFQUVHLElBRkgsQ0FFUSxVQUFDLE9BQUQsRUFBYTtBQUNqQixVQUFJLFFBQVEsT0FBUixDQUFnQixNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUM5QixlQUFPLG9CQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTSxXQUFXLDJCQUFhLFFBQVEsT0FBckIsQ0FBakI7QUFDQSxnQkFBUSxRQUFSO0FBQ0Q7QUFDRixLQVRILEVBVUcsS0FWSCxDQVVTLE1BVlQ7QUFXRCxHQVpNLENBQVA7QUFhRCxDQXZCRCIsImZpbGUiOiJjb3VudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmVvNGpTZXNzaW9uLCBjcmVhdGVPYmplY3QgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IGdldENvdW50cnlCeUlkQXN5bmMgPSAoaWQpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgTUFUQ0ggKGM6Q291bnRyeSlcbiAgICBXSEVSRSBJRChjKSA9IHRvSW50KHtpZH0pXG4gICAgUkVUVVJOXG4gICAgICBjLmNvZGUsXG4gICAgICBJRChjKSBhcyBpZCxcbiAgICAgIGMuY291bnRyeSBhcyBjb3VudHJ5LFxuICAgICAgYy5jaXR5IGFzIGNpdHksXG4gICAgICBjLm51bWJlciBhcyBudW1iZXIsXG4gICAgICBjLnBob25lIGFzIHBob25lTnVtYmVyLFxuICAgICAgYy5sYXQgYXMgbGF0aXR1ZCxcbiAgICAgIGMubG9uZyBhcyBsb25naXR1ZCxcbiAgICAgIGMudXJsIGFzIHdlYnBhZ2VcbiAgYDtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIGlkLFxuICB9O1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5lbzRqU2Vzc2lvbigpXG4gICAgICAucnVuKHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cy5yZWNvcmRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZWplY3QoJ05vIGNpdGllcyBmb3VuZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gY3JlYXRlT2JqZWN0KHJlc3VsdHMucmVjb3Jkcyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhTGlzdFswXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q291bnRyeUJ5SWQoaWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb3VudHJ5QnlJZCA9IGF3YWl0IGdldENvdW50cnlCeUlkQXN5bmMoaWQpO1xuICAgIHJldHVybiBjb3VudHJ5QnlJZDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuY29uc3QgZ2V0Q291bnRyeUJ5TmFtZUFzeW5jID0gKG5hbWUpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgTUFUQ0ggKGM6Q291bnRyeSB7XG4gICAgICBuYW1lTG93ZXI6IGxvd2VyKHtuYW1lfSlcbiAgICB9KVxuICAgIFJFVFVSTlxuICAgICAgSUQoYykgYXMgaWQsXG4gICAgICBjLmlzb0NvZGUgYXMgaXNvQ29kZSxcbiAgICAgIGMubmFtZSBhcyBuYW1lLFxuICAgICAgYy5maXBzQ29kZSBhcyBjb2RlLFxuICAgICAgYy50bGQgYXMgdGxkXG4gICAgTElNSVQgMVxuICBgO1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgbmFtZSxcbiAgfTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZW80alNlc3Npb24oKVxuICAgICAgLnJ1bihxdWVyeSwgcGFyYW1zKVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMucmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmVqZWN0KCdObyBjb3VudHJpZXMgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3RbMF0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvdW50cnlCeU5hbWUobmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvdW50cnlCeU5hbWUgPSBhd2FpdCBnZXRDb3VudHJ5QnlOYW1lQXN5bmMobmFtZSk7XG4gICAgcmV0dXJuIGNvdW50cnlCeU5hbWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cblxuY29uc3QgZ2V0Q291bnRyaWVzQXN5bmMgPSAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIE1BVENIIChjOkNvdW50cnkpXG4gICAgUkVUVVJOXG4gICAgICBJRChjKSBhcyBpZCxcbiAgICAgIGMuaXNvQ29kZSBhcyBpc29Db2RlLFxuICAgICAgYy5uYW1lIGFzIG5hbWUsXG4gICAgICBjLmZpcHNDb2RlIGFzIGNvZGUsXG4gICAgICBjLnRsZCBhcyB0bGRcbiAgYDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZW80alNlc3Npb24oKVxuICAgICAgLnJ1bihxdWVyeSlcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRzLnJlY29yZHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHJlamVjdCgnTm8gY291bnRyaWVzIGZvdW5kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YUxpc3QgPSBjcmVhdGVPYmplY3QocmVzdWx0cy5yZWNvcmRzKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGFMaXN0KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZWplY3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3VudHJpZXMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY291bnRyaWVzTGlzdCA9IGF3YWl0IGdldENvdW50cmllc0FzeW5jKCk7XG4gICAgcmV0dXJuIGNvdW50cmllc0xpc3Q7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG4iXX0=
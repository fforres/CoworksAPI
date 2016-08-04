'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoworkThatContainsName = exports.getCoworks = exports.getCoworkByName = exports.getCoworkById = exports.getCoworkByIdAsync = undefined;

var getCoworkById = exports.getCoworkById = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(id) {
    var coworkByName;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return getCoworkByIdAsync(id);

          case 3:
            coworkByName = _context.sent;
            return _context.abrupt('return', coworkByName);

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

  return function getCoworkById(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getCoworkByName = exports.getCoworkByName = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(name) {
    var coworkByName;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return getCoworkByNameAsync(name);

          case 3:
            coworkByName = _context2.sent;
            return _context2.abrupt('return', coworkByName);

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

  return function getCoworkByName(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getCoworks = exports.getCoworks = function () {
  var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
    var coworksList;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return getCoworksAsync();

          case 3:
            coworksList = _context3.sent;
            return _context3.abrupt('return', coworksList);

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

  return function getCoworks() {
    return _ref3.apply(this, arguments);
  };
}();

var getCoworkThatContainsName = exports.getCoworkThatContainsName = function () {
  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(name) {
    var coworkByName;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return getCoworkThatContainsNameAsync(name);

          case 3:
            coworkByName = _context4.sent;
            return _context4.abrupt('return', coworkByName);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4['catch'](0);

            console.error(_context4.t0);
            return _context4.abrupt('return', _context4.t0);

          case 11:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this, [[0, 7]]);
  }));

  return function getCoworkThatContainsName(_x3) {
    return _ref4.apply(this, arguments);
  };
}();

var _helpers = require('../helpers');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var getCoworkByIdAsync = exports.getCoworkByIdAsync = function getCoworkByIdAsync(id) {
  var query = '\n    MATCH\n      (c:Cowork)-[:IS_FROM]->(ct:City),\n      (c:Cowork)-[:IS_FROM]->(co:Country)\n    WHERE ID(c) = toInt({id})\n    RETURN\n      c.name as name,\n      ID(c) as id,\n      c.number as number,\n      c.street as street,\n      c.phone as phoneNumber,\n      c.lat as latitud,\n      c.long as longitud,\n      c.url as webpage,\n      c.longDescription as longDescription,\n      c.longDescription as shortDescription,\n\n      ct as City,\n      co as Country\n  ';
  var params = {
    id: id
  };
  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query, params).then(function (results) {
      if (results.records.length < 1) {
        reject('No coworks found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList[0]);
      }
    }).catch(reject);
  });
};

var getCoworkByNameAsync = function getCoworkByNameAsync(name) {
  var query = '\n    MATCH\n      (c:Cowork)-[:IS_FROM]->(ct:City),\n      (c:Cowork)-[:IS_FROM]->(co:Country)\n    WHERE c.name =~ \'(?i).*' + name + '.*\'\n    RETURN\n      c.name as name,\n      ID(c) as id,\n      c.number as number,\n      c.street as street,\n      c.phone as phoneNumber,\n      c.lat as latitud,\n      c.long as longitud,\n      c.url as webpage,\n      c.longDescription as longDescription,\n      c.longDescription as shortDescription,\n\n      ct as City,\n      co as Country\n    LIMIT 1\n  ';
  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query).then(function (results) {
      if (results.records.length < 1) {
        reject('No coworks found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList[0]);
      }
    }).catch(reject);
  });
};

var getCoworksAsync = function getCoworksAsync() {
  var query = '\n    MATCH\n      (c:Cowork)-[:IS_FROM]->(ct:City),\n      (c:Cowork)-[:IS_FROM]->(co:Country)\n    RETURN\n      c.name as name,\n      ID(c) as id,\n      c.number as number,\n      c.street as street,\n      c.phone as phoneNumber,\n      c.lat as latitud,\n      c.long as longitud,\n      c.url as webpage,\n      c.longDescription as longDescription,\n      c.longDescription as shortDescription,\n\n      ct as City,\n      co as Country\n  ';
  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query).then(function (results) {
      if (results.records.length < 1) {
        reject('No coworks found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList);
      }
    }).catch(reject);
  });
};

var getCoworkThatContainsNameAsync = function getCoworkThatContainsNameAsync(name) {
  var query = '\n    MATCH\n      (c:Cowork)-[:IS_FROM]->(ct:City),\n      (c:Cowork)-[:IS_FROM]->(co:Country)\n    WHERE c.name =~ \'(?i).*' + name + '.*\'\n    RETURN\n      c.name as name,\n      ID(c) as id,\n      c.number as number,\n      c.street as street,\n      c.phone as phoneNumber,\n      c.lat as latitud,\n      c.long as longitud,\n      c.url as webpage,\n      c.longDescription as longDescription,\n      c.longDescription as shortDescription,\n\n      ct as City\n    LIMIT 1\n  ';
  return new Promise(function (resolve, reject) {
    (0, _helpers.neo4jSession)().run(query).then(function (results) {
      if (results.records.length < 1) {
        reject('No coworks found');
      } else {
        var dataList = (0, _helpers.createObject)(results.records);
        resolve(dataList[0]);
      }
    }).catch(reject);
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY293b3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O3VEQXlDTyxpQkFBNkIsRUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUV3QixtQkFBbUIsRUFBbkIsQ0FGeEI7O0FBQUE7QUFFRyx3QkFGSDtBQUFBLDZDQUdJLFlBSEo7O0FBQUE7QUFBQTtBQUFBOztBQUtILG9CQUFRLEtBQVI7QUFMRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZSxhOzs7Ozs7d0RBZ0RmLGtCQUErQixJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRXdCLHFCQUFxQixJQUFyQixDQUZ4Qjs7QUFBQTtBQUVHLHdCQUZIO0FBQUEsOENBR0ksWUFISjs7QUFBQTtBQUFBO0FBQUE7O0FBS0gsb0JBQVEsS0FBUjtBQUxHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLGU7Ozs7Ozt3REE4Q2Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUV1QixpQkFGdkI7O0FBQUE7QUFFRyx1QkFGSDtBQUFBLDhDQUdJLFdBSEo7O0FBQUE7QUFBQTtBQUFBOztBQUtILG9CQUFRLEtBQVI7QUFMRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOztrQkFBZSxVOzs7Ozs7d0RBK0NmLGtCQUF5QyxJQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRXdCLCtCQUErQixJQUEvQixDQUZ4Qjs7QUFBQTtBQUVHLHdCQUZIO0FBQUEsOENBR0ksWUFISjs7QUFBQTtBQUFBO0FBQUE7O0FBS0gsb0JBQVEsS0FBUjtBQUxHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLHlCOzs7OztBQXRMdEI7Ozs7QUFFTyxJQUFNLGtEQUFxQixTQUFyQixrQkFBcUIsQ0FBQyxFQUFELEVBQVE7QUFDeEMsTUFBTSwwZUFBTjtBQW9CQSxNQUFNLFNBQVM7QUFDYjtBQURhLEdBQWY7QUFHQSxTQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsaUNBQ0csR0FESCxDQUNPLEtBRFAsRUFDYyxNQURkLEVBRUcsSUFGSCxDQUVRLFVBQUMsT0FBRCxFQUFhO0FBQ2pCLFVBQUksUUFBUSxPQUFSLENBQWdCLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzlCLGVBQU8sa0JBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNLFdBQVcsMkJBQWEsUUFBUSxPQUFyQixDQUFqQjtBQUNBLGdCQUFRLFNBQVMsQ0FBVCxDQUFSO0FBQ0Q7QUFDRixLQVRILEVBVUcsS0FWSCxDQVVTLE1BVlQ7QUFXRCxHQVpNLENBQVA7QUFhRCxDQXJDTTs7QUFrRFAsSUFBTSx1QkFBdUIsU0FBdkIsb0JBQXVCLENBQUMsSUFBRCxFQUFVO0FBQ3JDLE1BQU0sMElBSXFCLElBSnJCLHdYQUFOO0FBcUJBLFNBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUN0QyxpQ0FDRyxHQURILENBQ08sS0FEUCxFQUVHLElBRkgsQ0FFUSxVQUFDLE9BQUQsRUFBYTtBQUNqQixVQUFJLFFBQVEsT0FBUixDQUFnQixNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUM5QixlQUFPLGtCQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTSxXQUFXLDJCQUFhLFFBQVEsT0FBckIsQ0FBakI7QUFDQSxnQkFBUSxTQUFTLENBQVQsQ0FBUjtBQUNEO0FBQ0YsS0FUSCxFQVVHLEtBVkgsQ0FVUyxNQVZUO0FBV0QsR0FaTSxDQUFQO0FBYUQsQ0FuQ0Q7O0FBZ0RBLElBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLEdBQU07QUFDNUIsTUFBTSwyY0FBTjtBQW1CQSxTQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsaUNBQ0csR0FESCxDQUNPLEtBRFAsRUFFRyxJQUZILENBRVEsVUFBQyxPQUFELEVBQWE7QUFDakIsVUFBSSxRQUFRLE9BQVIsQ0FBZ0IsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsZUFBTyxrQkFBUDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU0sV0FBVywyQkFBYSxRQUFRLE9BQXJCLENBQWpCO0FBQ0EsZ0JBQVEsUUFBUjtBQUNEO0FBQ0YsS0FUSCxFQVVHLEtBVkgsQ0FVUyxNQVZUO0FBV0QsR0FaTSxDQUFQO0FBYUQsQ0FqQ0Q7O0FBOENBLElBQU0saUNBQWlDLFNBQWpDLDhCQUFpQyxDQUFDLElBQUQsRUFBVTtBQUMvQyxNQUFNLDBJQUlxQixJQUpyQixrV0FBTjtBQW9CQSxTQUFPLElBQUksT0FBSixDQUFZLFVBQUMsT0FBRCxFQUFVLE1BQVYsRUFBcUI7QUFDdEMsaUNBQ0csR0FESCxDQUNPLEtBRFAsRUFFRyxJQUZILENBRVEsVUFBQyxPQUFELEVBQWE7QUFDakIsVUFBSSxRQUFRLE9BQVIsQ0FBZ0IsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsZUFBTyxrQkFBUDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU0sV0FBVywyQkFBYSxRQUFRLE9BQXJCLENBQWpCO0FBQ0EsZ0JBQVEsU0FBUyxDQUFULENBQVI7QUFDRDtBQUNGLEtBVEgsRUFVRyxLQVZILENBVVMsTUFWVDtBQVdELEdBWk0sQ0FBUDtBQWFELENBbENEIiwiZmlsZSI6ImNvd29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5lbzRqU2Vzc2lvbiwgY3JlYXRlT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmV4cG9ydCBjb25zdCBnZXRDb3dvcmtCeUlkQXN5bmMgPSAoaWQpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgTUFUQ0hcbiAgICAgIChjOkNvd29yayktWzpJU19GUk9NXS0+KGN0OkNpdHkpLFxuICAgICAgKGM6Q293b3JrKS1bOklTX0ZST01dLT4oY286Q291bnRyeSlcbiAgICBXSEVSRSBJRChjKSA9IHRvSW50KHtpZH0pXG4gICAgUkVUVVJOXG4gICAgICBjLm5hbWUgYXMgbmFtZSxcbiAgICAgIElEKGMpIGFzIGlkLFxuICAgICAgYy5udW1iZXIgYXMgbnVtYmVyLFxuICAgICAgYy5zdHJlZXQgYXMgc3RyZWV0LFxuICAgICAgYy5waG9uZSBhcyBwaG9uZU51bWJlcixcbiAgICAgIGMubGF0IGFzIGxhdGl0dWQsXG4gICAgICBjLmxvbmcgYXMgbG9uZ2l0dWQsXG4gICAgICBjLnVybCBhcyB3ZWJwYWdlLFxuICAgICAgYy5sb25nRGVzY3JpcHRpb24gYXMgbG9uZ0Rlc2NyaXB0aW9uLFxuICAgICAgYy5sb25nRGVzY3JpcHRpb24gYXMgc2hvcnREZXNjcmlwdGlvbixcblxuICAgICAgY3QgYXMgQ2l0eSxcbiAgICAgIGNvIGFzIENvdW50cnlcbiAgYDtcbiAgY29uc3QgcGFyYW1zID0ge1xuICAgIGlkLFxuICB9O1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5lbzRqU2Vzc2lvbigpXG4gICAgICAucnVuKHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cy5yZWNvcmRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZWplY3QoJ05vIGNvd29ya3MgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3RbMF0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvd29ya0J5SWQoaWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb3dvcmtCeU5hbWUgPSBhd2FpdCBnZXRDb3dvcmtCeUlkQXN5bmMoaWQpO1xuICAgIHJldHVybiBjb3dvcmtCeU5hbWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cblxuY29uc3QgZ2V0Q293b3JrQnlOYW1lQXN5bmMgPSAobmFtZSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBNQVRDSFxuICAgICAgKGM6Q293b3JrKS1bOklTX0ZST01dLT4oY3Q6Q2l0eSksXG4gICAgICAoYzpDb3dvcmspLVs6SVNfRlJPTV0tPihjbzpDb3VudHJ5KVxuICAgIFdIRVJFIGMubmFtZSA9fiAnKD9pKS4qJHtuYW1lfS4qJ1xuICAgIFJFVFVSTlxuICAgICAgYy5uYW1lIGFzIG5hbWUsXG4gICAgICBJRChjKSBhcyBpZCxcbiAgICAgIGMubnVtYmVyIGFzIG51bWJlcixcbiAgICAgIGMuc3RyZWV0IGFzIHN0cmVldCxcbiAgICAgIGMucGhvbmUgYXMgcGhvbmVOdW1iZXIsXG4gICAgICBjLmxhdCBhcyBsYXRpdHVkLFxuICAgICAgYy5sb25nIGFzIGxvbmdpdHVkLFxuICAgICAgYy51cmwgYXMgd2VicGFnZSxcbiAgICAgIGMubG9uZ0Rlc2NyaXB0aW9uIGFzIGxvbmdEZXNjcmlwdGlvbixcbiAgICAgIGMubG9uZ0Rlc2NyaXB0aW9uIGFzIHNob3J0RGVzY3JpcHRpb24sXG5cbiAgICAgIGN0IGFzIENpdHksXG4gICAgICBjbyBhcyBDb3VudHJ5XG4gICAgTElNSVQgMVxuICBgO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5lbzRqU2Vzc2lvbigpXG4gICAgICAucnVuKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMucmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmVqZWN0KCdObyBjb3dvcmtzIGZvdW5kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YUxpc3QgPSBjcmVhdGVPYmplY3QocmVzdWx0cy5yZWNvcmRzKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGFMaXN0WzBdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZWplY3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3dvcmtCeU5hbWUobmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvd29ya0J5TmFtZSA9IGF3YWl0IGdldENvd29ya0J5TmFtZUFzeW5jKG5hbWUpO1xuICAgIHJldHVybiBjb3dvcmtCeU5hbWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cblxuY29uc3QgZ2V0Q293b3Jrc0FzeW5jID0gKCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBNQVRDSFxuICAgICAgKGM6Q293b3JrKS1bOklTX0ZST01dLT4oY3Q6Q2l0eSksXG4gICAgICAoYzpDb3dvcmspLVs6SVNfRlJPTV0tPihjbzpDb3VudHJ5KVxuICAgIFJFVFVSTlxuICAgICAgYy5uYW1lIGFzIG5hbWUsXG4gICAgICBJRChjKSBhcyBpZCxcbiAgICAgIGMubnVtYmVyIGFzIG51bWJlcixcbiAgICAgIGMuc3RyZWV0IGFzIHN0cmVldCxcbiAgICAgIGMucGhvbmUgYXMgcGhvbmVOdW1iZXIsXG4gICAgICBjLmxhdCBhcyBsYXRpdHVkLFxuICAgICAgYy5sb25nIGFzIGxvbmdpdHVkLFxuICAgICAgYy51cmwgYXMgd2VicGFnZSxcbiAgICAgIGMubG9uZ0Rlc2NyaXB0aW9uIGFzIGxvbmdEZXNjcmlwdGlvbixcbiAgICAgIGMubG9uZ0Rlc2NyaXB0aW9uIGFzIHNob3J0RGVzY3JpcHRpb24sXG5cbiAgICAgIGN0IGFzIENpdHksXG4gICAgICBjbyBhcyBDb3VudHJ5XG4gIGA7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmVvNGpTZXNzaW9uKClcbiAgICAgIC5ydW4ocXVlcnkpXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cy5yZWNvcmRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZWplY3QoJ05vIGNvd29ya3MgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3QpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvd29ya3MoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY293b3Jrc0xpc3QgPSBhd2FpdCBnZXRDb3dvcmtzQXN5bmMoKTtcbiAgICByZXR1cm4gY293b3Jrc0xpc3Q7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZXJyO1xuICB9XG59XG5cblxuY29uc3QgZ2V0Q293b3JrVGhhdENvbnRhaW5zTmFtZUFzeW5jID0gKG5hbWUpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBgXG4gICAgTUFUQ0hcbiAgICAgIChjOkNvd29yayktWzpJU19GUk9NXS0+KGN0OkNpdHkpLFxuICAgICAgKGM6Q293b3JrKS1bOklTX0ZST01dLT4oY286Q291bnRyeSlcbiAgICBXSEVSRSBjLm5hbWUgPX4gJyg/aSkuKiR7bmFtZX0uKidcbiAgICBSRVRVUk5cbiAgICAgIGMubmFtZSBhcyBuYW1lLFxuICAgICAgSUQoYykgYXMgaWQsXG4gICAgICBjLm51bWJlciBhcyBudW1iZXIsXG4gICAgICBjLnN0cmVldCBhcyBzdHJlZXQsXG4gICAgICBjLnBob25lIGFzIHBob25lTnVtYmVyLFxuICAgICAgYy5sYXQgYXMgbGF0aXR1ZCxcbiAgICAgIGMubG9uZyBhcyBsb25naXR1ZCxcbiAgICAgIGMudXJsIGFzIHdlYnBhZ2UsXG4gICAgICBjLmxvbmdEZXNjcmlwdGlvbiBhcyBsb25nRGVzY3JpcHRpb24sXG4gICAgICBjLmxvbmdEZXNjcmlwdGlvbiBhcyBzaG9ydERlc2NyaXB0aW9uLFxuXG4gICAgICBjdCBhcyBDaXR5XG4gICAgTElNSVQgMVxuICBgO1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5lbzRqU2Vzc2lvbigpXG4gICAgICAucnVuKHF1ZXJ5KVxuICAgICAgLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdHMucmVjb3Jkcy5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgcmVqZWN0KCdObyBjb3dvcmtzIGZvdW5kJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgZGF0YUxpc3QgPSBjcmVhdGVPYmplY3QocmVzdWx0cy5yZWNvcmRzKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGFMaXN0WzBdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChyZWplY3QpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb3dvcmtUaGF0Q29udGFpbnNOYW1lKG5hbWUpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb3dvcmtCeU5hbWUgPSBhd2FpdCBnZXRDb3dvcmtUaGF0Q29udGFpbnNOYW1lQXN5bmMobmFtZSk7XG4gICAgcmV0dXJuIGNvd29ya0J5TmFtZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cbiJdfQ==
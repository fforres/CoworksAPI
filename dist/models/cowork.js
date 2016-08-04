'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoworkThatContainsName = exports.getCoworks = exports.getCoworkByName = exports.getCoworkById = exports.getCoworkByIdAsync = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var getCoworkById = exports.getCoworkById = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(id) {
    var coworkByName;
    return _regenerator2.default.wrap(function _callee$(_context) {
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
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(name) {
    var coworkByName;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
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
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
    var coworksList;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
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
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(name) {
    var coworkByName;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvY293b3JrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7d0VBeUNPLGlCQUE2QixFQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRXdCLG1CQUFtQixFQUFuQixDQUZ4Qjs7QUFBQTtBQUVHLHdCQUZIO0FBQUEsNkNBR0ksWUFISjs7QUFBQTtBQUFBO0FBQUE7O0FBS0gsb0JBQVEsS0FBUjtBQUxHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLGE7Ozs7Ozt5RUFnRGYsa0JBQStCLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFd0IscUJBQXFCLElBQXJCLENBRnhCOztBQUFBO0FBRUcsd0JBRkg7QUFBQSw4Q0FHSSxZQUhKOztBQUFBO0FBQUE7QUFBQTs7QUFLSCxvQkFBUSxLQUFSO0FBTEc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWUsZTs7Ozs7O3lFQThDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRXVCLGlCQUZ2Qjs7QUFBQTtBQUVHLHVCQUZIO0FBQUEsOENBR0ksV0FISjs7QUFBQTtBQUFBO0FBQUE7O0FBS0gsb0JBQVEsS0FBUjtBQUxHOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7O2tCQUFlLFU7Ozs7Ozt5RUErQ2Ysa0JBQXlDLElBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFFd0IsK0JBQStCLElBQS9CLENBRnhCOztBQUFBO0FBRUcsd0JBRkg7QUFBQSw4Q0FHSSxZQUhKOztBQUFBO0FBQUE7QUFBQTs7QUFLSCxvQkFBUSxLQUFSO0FBTEc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7a0JBQWUseUI7Ozs7O0FBdEx0Qjs7OztBQUVPLElBQU0sa0RBQXFCLFNBQXJCLGtCQUFxQixDQUFDLEVBQUQsRUFBUTtBQUN4QyxNQUFNLDBlQUFOO0FBb0JBLE1BQU0sU0FBUztBQUNiO0FBRGEsR0FBZjtBQUdBLFNBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUN0QyxpQ0FDRyxHQURILENBQ08sS0FEUCxFQUNjLE1BRGQsRUFFRyxJQUZILENBRVEsVUFBQyxPQUFELEVBQWE7QUFDakIsVUFBSSxRQUFRLE9BQVIsQ0FBZ0IsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDOUIsZUFBTyxrQkFBUDtBQUNELE9BRkQsTUFFTztBQUNMLFlBQU0sV0FBVywyQkFBYSxRQUFRLE9BQXJCLENBQWpCO0FBQ0EsZ0JBQVEsU0FBUyxDQUFULENBQVI7QUFDRDtBQUNGLEtBVEgsRUFVRyxLQVZILENBVVMsTUFWVDtBQVdELEdBWk0sQ0FBUDtBQWFELENBckNNOztBQWtEUCxJQUFNLHVCQUF1QixTQUF2QixvQkFBdUIsQ0FBQyxJQUFELEVBQVU7QUFDckMsTUFBTSwwSUFJcUIsSUFKckIsd1hBQU47QUFxQkEsU0FBTyxJQUFJLE9BQUosQ0FBWSxVQUFDLE9BQUQsRUFBVSxNQUFWLEVBQXFCO0FBQ3RDLGlDQUNHLEdBREgsQ0FDTyxLQURQLEVBRUcsSUFGSCxDQUVRLFVBQUMsT0FBRCxFQUFhO0FBQ2pCLFVBQUksUUFBUSxPQUFSLENBQWdCLE1BQWhCLEdBQXlCLENBQTdCLEVBQWdDO0FBQzlCLGVBQU8sa0JBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFNLFdBQVcsMkJBQWEsUUFBUSxPQUFyQixDQUFqQjtBQUNBLGdCQUFRLFNBQVMsQ0FBVCxDQUFSO0FBQ0Q7QUFDRixLQVRILEVBVUcsS0FWSCxDQVVTLE1BVlQ7QUFXRCxHQVpNLENBQVA7QUFhRCxDQW5DRDs7QUFnREEsSUFBTSxrQkFBa0IsU0FBbEIsZUFBa0IsR0FBTTtBQUM1QixNQUFNLDJjQUFOO0FBbUJBLFNBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUN0QyxpQ0FDRyxHQURILENBQ08sS0FEUCxFQUVHLElBRkgsQ0FFUSxVQUFDLE9BQUQsRUFBYTtBQUNqQixVQUFJLFFBQVEsT0FBUixDQUFnQixNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUM5QixlQUFPLGtCQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTSxXQUFXLDJCQUFhLFFBQVEsT0FBckIsQ0FBakI7QUFDQSxnQkFBUSxRQUFSO0FBQ0Q7QUFDRixLQVRILEVBVUcsS0FWSCxDQVVTLE1BVlQ7QUFXRCxHQVpNLENBQVA7QUFhRCxDQWpDRDs7QUE4Q0EsSUFBTSxpQ0FBaUMsU0FBakMsOEJBQWlDLENBQUMsSUFBRCxFQUFVO0FBQy9DLE1BQU0sMElBSXFCLElBSnJCLGtXQUFOO0FBb0JBLFNBQU8sSUFBSSxPQUFKLENBQVksVUFBQyxPQUFELEVBQVUsTUFBVixFQUFxQjtBQUN0QyxpQ0FDRyxHQURILENBQ08sS0FEUCxFQUVHLElBRkgsQ0FFUSxVQUFDLE9BQUQsRUFBYTtBQUNqQixVQUFJLFFBQVEsT0FBUixDQUFnQixNQUFoQixHQUF5QixDQUE3QixFQUFnQztBQUM5QixlQUFPLGtCQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsWUFBTSxXQUFXLDJCQUFhLFFBQVEsT0FBckIsQ0FBakI7QUFDQSxnQkFBUSxTQUFTLENBQVQsQ0FBUjtBQUNEO0FBQ0YsS0FUSCxFQVVHLEtBVkgsQ0FVUyxNQVZUO0FBV0QsR0FaTSxDQUFQO0FBYUQsQ0FsQ0QiLCJmaWxlIjoiY293b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmVvNGpTZXNzaW9uLCBjcmVhdGVPYmplY3QgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuZXhwb3J0IGNvbnN0IGdldENvd29ya0J5SWRBc3luYyA9IChpZCkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBNQVRDSFxuICAgICAgKGM6Q293b3JrKS1bOklTX0ZST01dLT4oY3Q6Q2l0eSksXG4gICAgICAoYzpDb3dvcmspLVs6SVNfRlJPTV0tPihjbzpDb3VudHJ5KVxuICAgIFdIRVJFIElEKGMpID0gdG9JbnQoe2lkfSlcbiAgICBSRVRVUk5cbiAgICAgIGMubmFtZSBhcyBuYW1lLFxuICAgICAgSUQoYykgYXMgaWQsXG4gICAgICBjLm51bWJlciBhcyBudW1iZXIsXG4gICAgICBjLnN0cmVldCBhcyBzdHJlZXQsXG4gICAgICBjLnBob25lIGFzIHBob25lTnVtYmVyLFxuICAgICAgYy5sYXQgYXMgbGF0aXR1ZCxcbiAgICAgIGMubG9uZyBhcyBsb25naXR1ZCxcbiAgICAgIGMudXJsIGFzIHdlYnBhZ2UsXG4gICAgICBjLmxvbmdEZXNjcmlwdGlvbiBhcyBsb25nRGVzY3JpcHRpb24sXG4gICAgICBjLmxvbmdEZXNjcmlwdGlvbiBhcyBzaG9ydERlc2NyaXB0aW9uLFxuXG4gICAgICBjdCBhcyBDaXR5LFxuICAgICAgY28gYXMgQ291bnRyeVxuICBgO1xuICBjb25zdCBwYXJhbXMgPSB7XG4gICAgaWQsXG4gIH07XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmVvNGpTZXNzaW9uKClcbiAgICAgIC5ydW4ocXVlcnksIHBhcmFtcylcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRzLnJlY29yZHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHJlamVjdCgnTm8gY293b3JrcyBmb3VuZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gY3JlYXRlT2JqZWN0KHJlc3VsdHMucmVjb3Jkcyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhTGlzdFswXSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q293b3JrQnlJZChpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvd29ya0J5TmFtZSA9IGF3YWl0IGdldENvd29ya0J5SWRBc3luYyhpZCk7XG4gICAgcmV0dXJuIGNvd29ya0J5TmFtZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuXG5jb25zdCBnZXRDb3dvcmtCeU5hbWVBc3luYyA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIE1BVENIXG4gICAgICAoYzpDb3dvcmspLVs6SVNfRlJPTV0tPihjdDpDaXR5KSxcbiAgICAgIChjOkNvd29yayktWzpJU19GUk9NXS0+KGNvOkNvdW50cnkpXG4gICAgV0hFUkUgYy5uYW1lID1+ICcoP2kpLioke25hbWV9LionXG4gICAgUkVUVVJOXG4gICAgICBjLm5hbWUgYXMgbmFtZSxcbiAgICAgIElEKGMpIGFzIGlkLFxuICAgICAgYy5udW1iZXIgYXMgbnVtYmVyLFxuICAgICAgYy5zdHJlZXQgYXMgc3RyZWV0LFxuICAgICAgYy5waG9uZSBhcyBwaG9uZU51bWJlcixcbiAgICAgIGMubGF0IGFzIGxhdGl0dWQsXG4gICAgICBjLmxvbmcgYXMgbG9uZ2l0dWQsXG4gICAgICBjLnVybCBhcyB3ZWJwYWdlLFxuICAgICAgYy5sb25nRGVzY3JpcHRpb24gYXMgbG9uZ0Rlc2NyaXB0aW9uLFxuICAgICAgYy5sb25nRGVzY3JpcHRpb24gYXMgc2hvcnREZXNjcmlwdGlvbixcblxuICAgICAgY3QgYXMgQ2l0eSxcbiAgICAgIGNvIGFzIENvdW50cnlcbiAgICBMSU1JVCAxXG4gIGA7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmVvNGpTZXNzaW9uKClcbiAgICAgIC5ydW4ocXVlcnkpXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cy5yZWNvcmRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZWplY3QoJ05vIGNvd29ya3MgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3RbMF0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvd29ya0J5TmFtZShuYW1lKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgY293b3JrQnlOYW1lID0gYXdhaXQgZ2V0Q293b3JrQnlOYW1lQXN5bmMobmFtZSk7XG4gICAgcmV0dXJuIGNvd29ya0J5TmFtZTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuXG5jb25zdCBnZXRDb3dvcmtzQXN5bmMgPSAoKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gYFxuICAgIE1BVENIXG4gICAgICAoYzpDb3dvcmspLVs6SVNfRlJPTV0tPihjdDpDaXR5KSxcbiAgICAgIChjOkNvd29yayktWzpJU19GUk9NXS0+KGNvOkNvdW50cnkpXG4gICAgUkVUVVJOXG4gICAgICBjLm5hbWUgYXMgbmFtZSxcbiAgICAgIElEKGMpIGFzIGlkLFxuICAgICAgYy5udW1iZXIgYXMgbnVtYmVyLFxuICAgICAgYy5zdHJlZXQgYXMgc3RyZWV0LFxuICAgICAgYy5waG9uZSBhcyBwaG9uZU51bWJlcixcbiAgICAgIGMubGF0IGFzIGxhdGl0dWQsXG4gICAgICBjLmxvbmcgYXMgbG9uZ2l0dWQsXG4gICAgICBjLnVybCBhcyB3ZWJwYWdlLFxuICAgICAgYy5sb25nRGVzY3JpcHRpb24gYXMgbG9uZ0Rlc2NyaXB0aW9uLFxuICAgICAgYy5sb25nRGVzY3JpcHRpb24gYXMgc2hvcnREZXNjcmlwdGlvbixcblxuICAgICAgY3QgYXMgQ2l0eSxcbiAgICAgIGNvIGFzIENvdW50cnlcbiAgYDtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBuZW80alNlc3Npb24oKVxuICAgICAgLnJ1bihxdWVyeSlcbiAgICAgIC50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICAgIGlmIChyZXN1bHRzLnJlY29yZHMubGVuZ3RoIDwgMSkge1xuICAgICAgICAgIHJlamVjdCgnTm8gY293b3JrcyBmb3VuZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGRhdGFMaXN0ID0gY3JlYXRlT2JqZWN0KHJlc3VsdHMucmVjb3Jkcyk7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhTGlzdCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2gocmVqZWN0KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q293b3JrcygpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb3dvcmtzTGlzdCA9IGF3YWl0IGdldENvd29ya3NBc3luYygpO1xuICAgIHJldHVybiBjb3dvcmtzTGlzdDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHJldHVybiBlcnI7XG4gIH1cbn1cblxuXG5jb25zdCBnZXRDb3dvcmtUaGF0Q29udGFpbnNOYW1lQXN5bmMgPSAobmFtZSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGBcbiAgICBNQVRDSFxuICAgICAgKGM6Q293b3JrKS1bOklTX0ZST01dLT4oY3Q6Q2l0eSksXG4gICAgICAoYzpDb3dvcmspLVs6SVNfRlJPTV0tPihjbzpDb3VudHJ5KVxuICAgIFdIRVJFIGMubmFtZSA9fiAnKD9pKS4qJHtuYW1lfS4qJ1xuICAgIFJFVFVSTlxuICAgICAgYy5uYW1lIGFzIG5hbWUsXG4gICAgICBJRChjKSBhcyBpZCxcbiAgICAgIGMubnVtYmVyIGFzIG51bWJlcixcbiAgICAgIGMuc3RyZWV0IGFzIHN0cmVldCxcbiAgICAgIGMucGhvbmUgYXMgcGhvbmVOdW1iZXIsXG4gICAgICBjLmxhdCBhcyBsYXRpdHVkLFxuICAgICAgYy5sb25nIGFzIGxvbmdpdHVkLFxuICAgICAgYy51cmwgYXMgd2VicGFnZSxcbiAgICAgIGMubG9uZ0Rlc2NyaXB0aW9uIGFzIGxvbmdEZXNjcmlwdGlvbixcbiAgICAgIGMubG9uZ0Rlc2NyaXB0aW9uIGFzIHNob3J0RGVzY3JpcHRpb24sXG5cbiAgICAgIGN0IGFzIENpdHlcbiAgICBMSU1JVCAxXG4gIGA7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbmVvNGpTZXNzaW9uKClcbiAgICAgIC5ydW4ocXVlcnkpXG4gICAgICAudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgICBpZiAocmVzdWx0cy5yZWNvcmRzLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICByZWplY3QoJ05vIGNvd29ya3MgZm91bmQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBkYXRhTGlzdCA9IGNyZWF0ZU9iamVjdChyZXN1bHRzLnJlY29yZHMpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YUxpc3RbMF0pO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHJlamVjdCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENvd29ya1RoYXRDb250YWluc05hbWUobmFtZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGNvd29ya0J5TmFtZSA9IGF3YWl0IGdldENvd29ya1RoYXRDb250YWluc05hbWVBc3luYyhuYW1lKTtcbiAgICByZXR1cm4gY293b3JrQnlOYW1lO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIl19
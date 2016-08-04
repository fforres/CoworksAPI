'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createObject = exports.neo4jSession = undefined;

var _neo4jDriver = require('neo4j-driver');

var _neo4jDriver2 = _interopRequireDefault(_neo4jDriver);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import util from 'util';

var neo4j = _neo4jDriver2.default.v1;
var driver = neo4j.driver('http://localhost', neo4j.auth.basic(_config2.default.neo4j.username, _config2.default.neo4j.password));
var session = driver.session();

var neo4jSession = exports.neo4jSession = function neo4jSession() {
  if (!session) {
    // TODO: Check how the connection closes. Open it if it closes, Check connection pool, etc.
    session = driver.session();
  }
  return session;
};

// CreateObject
var createObject = exports.createObject = function createObject(results) {
  var dataList = [];
  // console.log(util.inspect(results, { colors: true, depth: 5 }));
  results.forEach(function (record) {
    var item = {};
    record.keys.forEach(function (el, i) {
      item[record.keys[i]] = record._fields[i];
    });
    dataList.push(item);
  });
  return dataList;
};

// const isInArray = (key, arr) => {
//   return (arr.indexOf(key) !== -1);
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9oZWxwZXJzL25lbzRqLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFDQTs7QUFFQSxJQUFNLFFBQVEsc0JBQUcsRUFBakI7QUFDQSxJQUFNLFNBQVMsTUFBTSxNQUFOLENBQWEsa0JBQWIsRUFBaUMsTUFBTSxJQUFOLENBQVcsS0FBWCxDQUFpQixpQkFBTyxLQUFQLENBQWEsUUFBOUIsRUFBd0MsaUJBQU8sS0FBUCxDQUFhLFFBQXJELENBQWpDLENBQWY7QUFDQSxJQUFJLFVBQVUsT0FBTyxPQUFQLEVBQWQ7O0FBRU8sSUFBTSxzQ0FBZSxTQUFmLFlBQWUsR0FBTTtBQUNoQyxNQUFJLENBQUMsT0FBTCxFQUFjO0FBQUU7QUFDZCxjQUFVLE9BQU8sT0FBUCxFQUFWO0FBQ0Q7QUFDRCxTQUFPLE9BQVA7QUFDRCxDQUxNOztBQVFQO0FBQ08sSUFBTSxzQ0FBZSxTQUFmLFlBQWUsQ0FBQyxPQUFELEVBQWE7QUFDdkMsTUFBTSxXQUFXLEVBQWpCO0FBQ0E7QUFDQSxVQUFRLE9BQVIsQ0FBZ0IsVUFBQyxNQUFELEVBQVk7QUFDMUIsUUFBTSxPQUFPLEVBQWI7QUFDQSxXQUFPLElBQVAsQ0FBWSxPQUFaLENBQW9CLFVBQUMsRUFBRCxFQUFLLENBQUwsRUFBVztBQUM3QixXQUFLLE9BQU8sSUFBUCxDQUFZLENBQVosQ0FBTCxJQUF1QixPQUFPLE9BQVAsQ0FBZSxDQUFmLENBQXZCO0FBQ0QsS0FGRDtBQUdBLGFBQVMsSUFBVCxDQUFjLElBQWQ7QUFDRCxHQU5EO0FBT0EsU0FBTyxRQUFQO0FBQ0QsQ0FYTTs7QUFhUDtBQUNBO0FBQ0EiLCJmaWxlIjoibmVvNGouanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbjQgZnJvbSAnbmVvNGotZHJpdmVyJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJztcbi8vIGltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuXG5jb25zdCBuZW80aiA9IG40LnYxO1xuY29uc3QgZHJpdmVyID0gbmVvNGouZHJpdmVyKCdodHRwOi8vbG9jYWxob3N0JywgbmVvNGouYXV0aC5iYXNpYyhjb25maWcubmVvNGoudXNlcm5hbWUsIGNvbmZpZy5uZW80ai5wYXNzd29yZCkpO1xubGV0IHNlc3Npb24gPSBkcml2ZXIuc2Vzc2lvbigpO1xuXG5leHBvcnQgY29uc3QgbmVvNGpTZXNzaW9uID0gKCkgPT4ge1xuICBpZiAoIXNlc3Npb24pIHsgLy8gVE9ETzogQ2hlY2sgaG93IHRoZSBjb25uZWN0aW9uIGNsb3Nlcy4gT3BlbiBpdCBpZiBpdCBjbG9zZXMsIENoZWNrIGNvbm5lY3Rpb24gcG9vbCwgZXRjLlxuICAgIHNlc3Npb24gPSBkcml2ZXIuc2Vzc2lvbigpO1xuICB9XG4gIHJldHVybiBzZXNzaW9uO1xufTtcblxuXG4vLyBDcmVhdGVPYmplY3RcbmV4cG9ydCBjb25zdCBjcmVhdGVPYmplY3QgPSAocmVzdWx0cykgPT4ge1xuICBjb25zdCBkYXRhTGlzdCA9IFtdO1xuICAvLyBjb25zb2xlLmxvZyh1dGlsLmluc3BlY3QocmVzdWx0cywgeyBjb2xvcnM6IHRydWUsIGRlcHRoOiA1IH0pKTtcbiAgcmVzdWx0cy5mb3JFYWNoKChyZWNvcmQpID0+IHtcbiAgICBjb25zdCBpdGVtID0ge307XG4gICAgcmVjb3JkLmtleXMuZm9yRWFjaCgoZWwsIGkpID0+IHtcbiAgICAgIGl0ZW1bcmVjb3JkLmtleXNbaV1dID0gcmVjb3JkLl9maWVsZHNbaV07XG4gICAgfSk7XG4gICAgZGF0YUxpc3QucHVzaChpdGVtKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhTGlzdDtcbn07XG5cbi8vIGNvbnN0IGlzSW5BcnJheSA9IChrZXksIGFycikgPT4ge1xuLy8gICByZXR1cm4gKGFyci5pbmRleE9mKGtleSkgIT09IC0xKTtcbi8vIH07XG4iXX0=
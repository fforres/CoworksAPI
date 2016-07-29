'use strict';

var _neo4jDriver = require('neo4j-driver');

var _neo4jDriver2 = _interopRequireDefault(_neo4jDriver);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var neo4j = _neo4jDriver2.default.v1;
var driver = neo4j.driver('http://localhost', neo4j.auth.basic(_config2.default.neo4j.username, _config2.default.neo4j.password));
var session = driver.session();

session.run('MATCH (a:Cowork)\n   RETURN a.name AS NAME,\n   a.url AS WEBPAGE').then(function (results) {
  var ARR = [];
  for (var i = 0; i < results.records.length; i++) {
    var OB = {};
    var record = results.records[i];
    for (var j = 0; j < record.keys.length; j++) {
      OB[record.keys[j]] = record._fields[j];
    }
    ARR.push(OB);
  }
  console.log(ARR);
  console.log(ARR.length);
  session.close();
  driver.close();
}).catch(function (err) {
  console.log(err);
});
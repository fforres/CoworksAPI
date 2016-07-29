'use strict';

var _csvParse = require('csv-parse');

var _csvParse2 = _interopRequireDefault(_csvParse);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _neo4jDriver = require('neo4j-driver');

var _neo4jDriver2 = _interopRequireDefault(_neo4jDriver);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var neo4j = _neo4jDriver2.default.v1;
var driver = neo4j.driver('http://localhost', neo4j.auth.basic(_config2.default.neo4j.username, _config2.default.neo4j.password));
var session = driver.session();

var parser = (0, _csvParse2.default)({ delimiter: '\t' }, function (err, data) {
  var string = '\n    MERGE (country:Country {\n      code: {code},\n      name: {name}\n    })\n    RETURN country';
  data.forEach(function (country) {
    var params = {
      code: country[1],
      name: country[3]
    };
    session.run(string, params).then(function (result) {
      console.log(result);
    }).catch(function (error) {
      console.log(error);
    });
  });
  session.close();
  driver.close();
});

_fs2.default.createReadStream(__dirname + '/countries.txt').pipe(parser);
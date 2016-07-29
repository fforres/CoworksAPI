'use strict';

var _neo4jDriver = require('neo4j-driver');

var _neo4jDriver2 = _interopRequireDefault(_neo4jDriver);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedisSMQ = require('rsmq');
var rsmq = new RedisSMQ({
  host: '127.0.0.1',
  port: 6379,
  ns: 'rsmq'
});

var neo4j = _neo4jDriver2.default.v1;
var driver = neo4j.driver('http://localhost', neo4j.auth.basic(_config2.default.neo4j.username, _config2.default.neo4j.password));
var session = driver.session();

var start = function start() {
  rsmq.popMessage({ qname: 'CITY' }, function (err, resp) {
    if (resp && resp.id) {
      doProcess(resp);
    } else {
      console.log(err);
    }
  });
};

var string = '\n  MERGE (city:City {\n    code: {code},\n    name: {name}\n  })\n  RETURN city';

var doProcess = function doProcess(city) {
  console.log(city, '//////');
  session.run(string, JSON.parse(city.message)).then(function () {
    start();
  }).catch(function (error) {
    console.log(error);
  });
};
start();
start();
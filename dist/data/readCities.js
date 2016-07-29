'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

var _stream = require('stream');

var _stream2 = _interopRequireDefault(_stream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedisSMQ = require('rsmq');
var rsmq = new RedisSMQ({
  host: '127.0.0.1',
  port: 6379,
  ns: 'rsmq'
});

var instream = _fs2.default.createReadStream(__dirname + '/cities.txt');
var outstream = new _stream2.default();

var startReading = function startReading() {
  var rl = _readline2.default.createInterface(instream, outstream);
  rl.on('line', function (data) {
    var splitted = data.split('\t');
    var city = {
      code: splitted[0],
      name: splitted[1]
    };
    rsmq.sendMessage({
      qname: 'CITY',
      message: JSON.stringify(city)
    }, function (err, resp) {
      if (resp) {
        console.log('Message sent. ID:', city);
      }
    });
  });

  rl.on('close', function () {
    console.log('no more!');
  });
};

rsmq.createQueue({ qname: 'CITY' }, function (err, resp) {
  if (resp === 1) {
    startReading();
  }
});

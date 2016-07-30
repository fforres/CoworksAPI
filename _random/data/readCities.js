import fs from 'fs';
import readline from 'readline';
import Stream from 'stream';

const RedisSMQ = require('rsmq');
const rsmq = new RedisSMQ({
  host: '127.0.0.1',
  port: 6379,
  ns: 'rsmq',
});

const instream = fs.createReadStream(`${__dirname}/cities.txt`);
const outstream = new Stream;

let i = 0;
const startReading = () => {
  const rl = readline.createInterface(instream, outstream);
  rl.on('line', (data) => {
    const splitted = data.split('\t');
    const city = {
      code: splitted[0],
      name: splitted[1],
    };
    i++;
    if (splitted[0] === 'CL') {
      console.log(i);
    }
    // rsmq.sendMessage({
    //   qname: 'CITY',
    //   message: JSON.stringify(city),
    // }, (err, resp) => {
    //   if (resp) {
    //     console.log('Message sent. ID:', city);
    //   }
    // });
  });

  rl.on('close', () => {
    console.log('no more!');
  });
};

rsmq.createQueue({ qname: 'CITY' }, (err, resp) => {
  if (resp === 1) {
    startReading();
  } else {
    startReading();
  }
});

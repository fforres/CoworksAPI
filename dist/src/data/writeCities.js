import n4 from 'neo4j-driver';
import config from '../config';

const RedisSMQ = require('rsmq');
const rsmq = new RedisSMQ({
  host: '127.0.0.1',
  port: 6379,
  ns: 'rsmq',
});


const neo4j = n4.v1;
const driver = neo4j.driver('http://localhost', neo4j.auth.basic(config.neo4j.username, config.neo4j.password));
const session = driver.session();


const start = () => {
  rsmq.popMessage({ qname: 'CITY' }, (err, resp) => {
    if (resp && resp.id) {
      doProcess(resp)
    } else {
      console.log(err);
    }
  });
}

const string = `
  MERGE (city:City {
    code: {code},
    name: {name}
  })
  RETURN city`;

const doProcess = (city) => {
  console.log(city, '//////');
  session
    .run(string, JSON.parse(city.message))
    .then(() => {
      start();
    })
    .catch((error) => {
      console.log(error);
    });
};
start();
start();

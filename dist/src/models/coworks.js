import n4 from 'neo4j-driver';
import config from '../config';

const neo4j = n4.v1;
const driver = neo4j.driver('http://localhost', neo4j.auth.basic(config.neo4j.username, config.neo4j.password));
const session = driver.session();

session.run(
  `MATCH (a:Cowork)
   RETURN a.name AS NAME,
   a.url AS WEBPAGE`
).then((results) => {
  const ARR = [];
  for (let i = 0; i < results.records.length; i++) {
    const OB = {};
    const record = results.records[i];
    for (let j = 0; j < record.keys.length; j++) {
      OB[record.keys[j]] = record._fields[j];
    }
    ARR.push(OB);
  }
  console.log(ARR);
  console.log(ARR.length);
  session.close();
  driver.close();
})
.catch((err) => {
  console.log(err);
});

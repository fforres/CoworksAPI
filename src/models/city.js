import n4 from 'neo4j-driver';
import config from '../config';

const neo4j = n4.v1;
const driver = neo4j.driver('http://localhost', neo4j.auth.basic(config.neo4j.username, config.neo4j.password));
const session = driver.session();

session.run(
  `MATCH (n:City)
   RETURN count(*) as Cities`
).then((results) => {
  console.log(results.records[0]._fields[0]);
  session.close();
  driver.close();
})
.catch((err) => {
  console.log(err);
});

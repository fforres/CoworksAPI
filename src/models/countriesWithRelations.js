import n4 from 'neo4j-driver';
import config from '../config';

const neo4j = n4.v1;
const driver = neo4j.driver('http://localhost', neo4j.auth.basic(config.neo4j.username, config.neo4j.password));
const session = driver.session();

// session.run(
//   `MATCH (n:City)
//    RETURN count(*) as Cities`
// ).then((results) => {
//   console.log(results.records[0]._fields[0].low);
//   session.close();
//   driver.close();
// })
// .catch((err) => {
//   console.log(err);
// });

session.run(
  `
  MATCH (ct:City)-[:IS_IN]->(c:Country)
  WITH c, count(ct) as relations, collect(ct) as cities
  WHERE relations > 1
  RETURN c, cities, relations
  `
  // `
  // MATCH (ct:City)-[:IS_IN]->(c:Country)
  // RETURN c
  // LIMIT 25
  // `
).then((results) => {
    // keys: [ 'c', 'cities', 'relations' ],
  results.records.forEach((el) => {
    console.log(el._fields[0].properties.code)
  })
  session.close();
  driver.close();
})
.catch((err) => {
  console.log(err);
});
// MATCH source-[r?:someType]-target
// WHERE r is null
// RETURN source

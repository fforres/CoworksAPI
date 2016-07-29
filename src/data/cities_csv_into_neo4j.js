const CSV_LOCATION = 'file:/city_small.txt';
console.log(CSV_LOCATION);
import n4 from 'neo4j-driver';
import config from '../config';

const neo4j = n4.v1;
const driver = neo4j.driver('http://localhost', neo4j.auth.basic(config.neo4j.username, config.neo4j.password));
const session = driver.session();

const string = `
USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM "${CSV_LOCATION}"
AS line FIELDTERMINATOR '\\t'
MERGE (p:City2 {
  name:line.FULL_NAME_ND
})
MERGE (c:Country {code: line.CC_FIPS})
CREATE (p)-[:BELONGS_TO]->(c)
`

// USING PERIODIC COMMIT 1000
// LOAD CSV WITH HEADERS FROM "file:/chile.txt"
// AS line FIELDTERMINATOR '\t'
// MERGE (p:City {
//   name:line.FULL_NAME_ND
// })
// MERGE (c:Country {fipsCode: line.CC_FIPS})
// CREATE (p)-[:IS_FROM]->(c)
// CREATE (c)-[:HAS]->(p)

// session.run(
//   string
// ).then((results) => {
//   console.log(results);
//   session.close();
//   driver.close();
// })
// .catch((err) => {
//   console.log(err);
// });

// const CSV_LOCATION = 'file:/city_small.txt';

// USING PERIODIC COMMIT 1000
// LOAD CSV WITH HEADERS FROM "file:/chile.txt"
// AS line FIELDTERMINATOR '\t'
// MERGE (p:City {
//   name:line.FULL_NAME_ND
// })
// MERGE (c:Country {fipsCode: line.CC_FIPS})
// CREATE (p)-[:IS_FROM]->(c)
// CREATE (c)-[:HAS]->(p)

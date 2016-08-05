// MATCH (ct:City {nameLower: c.city}), (c:Cowork)
// CREATE (c)-[:IS_FROM]->(ct)
// CREATE (ct)-[:HAS]->(c)

// MATCH (ct:Country {nameLower: c.country}), (c:Cowork)
// CREATE (c)-[:IS_FROM]->(ct)
// CREATE (ct)-[:HAS]->(c)

// MATCH (co:Country {nameLower: 'chile'}),  (ct:City)
// CREATE (ct)-[:IS_FROM]->(co)
// CREATE (co)-[:HAS]->(ct)


// MATCH (co:Country {fipsCode: c.country}), (c:Cowork)
// CREATE (c)-[:IS_FROM]->(co)
// CREATE (co)-[:HAS]->(c)

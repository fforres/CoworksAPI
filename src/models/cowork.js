import { neo4jSession, createObject } from '../helpers';

export const getCoworkByIdAsync = (id) => {
  const query = `
    MATCH (c:Cowork)-[:IS_FROM]->(ct:City)
    WHERE ID(c) = toInt({id})
    RETURN
      c.name as name,
      ID(c) as id,
      c.number as number,
      c.street as street,
      c.phone as phoneNumber,
      c.lat as latitud,
      c.long as longitud,
      c.url as webpage,
      c.longDescription as longDescription,
      c.longDescription as shortDescription,

      ct as City
  `;
  const params = {
    id,
  };
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query, params)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No coworks found');
        } else {
          const dataList = createObject(results.records);
          resolve(dataList[0]);
        }
      })
      .catch(reject);
  });
};

export async function getCoworkById(id) {
  try {
    const coworkByName = await getCoworkByIdAsync(id);
    return coworkByName;
  } catch (err) {
    console.error(err);
    return err;
  }
}


const getCoworkByNameAsync = (name) => {
  const query = `
    MATCH (c:Cowork)-[:IS_FROM]->(ct:City)
    WHERE nameLower = lower({name})
    RETURN
      c.name as name,
      ID(c) as id,
      c.number as number,
      c.street as street,
      c.phone as phoneNumber,
      c.lat as latitud,
      c.long as longitud,
      c.url as webpage,
      c.longDescription as longDescription,
      c.longDescription as shortDescription,

      ct as City
    LIMIT 1
  `;
  const params = {
    name,
  };
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query, params)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No coworks found');
        } else {
          const dataList = createObject(results.records);
          resolve(dataList[0]);
        }
      })
      .catch(reject);
  });
};

export async function getCoworkByName(name) {
  try {
    const coworkByName = await getCoworkByNameAsync(name);
    return coworkByName;
  } catch (err) {
    console.error(err);
    return err;
  }
}


const getCoworksAsync = () => {
  const query = `
    MATCH
      (c:Cowork)-[:IS_FROM]->(ct:City),
      (c:Cowork)-[:IS_FROM]->(co:Country)
    RETURN
      c.name as name,
      ID(c) as id,
      c.number as number,
      c.street as street,
      c.phone as phoneNumber,
      c.lat as latitud,
      c.long as longitud,
      c.url as webpage,
      c.longDescription as longDescription,
      c.longDescription as shortDescription,

      ct as City,
      co as Country
  `;
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No coworks found');
        } else {
          const dataList = createObject(results.records);
          resolve(dataList);
        }
      })
      .catch(reject);
  });
};

export async function getCoworks() {
  try {
    const coworksList = await getCoworksAsync();
    return coworksList;
  } catch (err) {
    console.error(err);
    return err;
  }
}

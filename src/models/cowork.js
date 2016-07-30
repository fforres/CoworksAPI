import { neo4jSession, createObject } from '../helpers';

export const getCoworkByIdAsync = (id) => {
  const query = `
    MATCH (c:Cowork)
    WHERE ID(c) = toInt({id})
    RETURN
    c.name as name,
    ID(c) as id,
    c.country as country,
    c.city as city,
    c.number as number,
    c.phone as phoneNumber,
    c.lat as latitud,
    c.long as longitud,
    c.url as webpage
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
          const dataList = createObject(results);
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
    MATCH (c:Cowork {
      name: {name}
    })
    RETURN
    c.name as name,
    ID(c) as id,
    c.country as country,
    c.city as city,
    c.number as number,
    c.phone as phoneNumber,
    c.lat as latitud,
    c.long as longitud,
    c.url as webpage
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
          const dataList = createObject(results);
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
    MATCH (c:Cowork)
    RETURN
      c.name as name,
      ID(c) as id,
      c.country as country,
      c.city as city,
      c.number as number,
      c.phone as phoneNumber,
      c.lat as latitud,
      c.long as longitud,
      c.url as webpage
  `;
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No coworks found');
        } else {
          const dataList = createObject(results);
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

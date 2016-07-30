import { neo4jSession, createObject } from '../helpers';

const getCityByIdAsync = (id) => {
  const query = `
    MATCH (c:City)
    WHERE ID(c) = toInt({id})
    RETURN
      ID(c) as id,
      c.name as name
  `;
  const params = {
    id,
  };

  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query, params)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No cities found');
        } else {
          const dataList = createObject(results);
          resolve(dataList[0]);
        }
      })
      .catch(reject);
  });
};

export async function getCityById(name) {
  try {
    return await getCityByIdAsync(name);
  } catch (err) {
    console.error(err);
    return err;
  }
}

const getCityByNameAsync = (name) => {
  const query = `
    MATCH (c:City {
      name: {name}
    })
    RETURN
      ID(c) as id,
      c.name as name
  `;
  const params = {
    name,
  };
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query, params)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No cities found');
        } else {
          const dataList = createObject(results);
          resolve(dataList[0]);
        }
      })
      .catch(reject);
  });
};

export async function getCityByName(name) {
  try {
    return await getCityByNameAsync(name);
  } catch (err) {
    console.error(err);
    return err;
  }
}


const getCitiesAsync = () => {
  const query = `
    MATCH (c:City)
    RETURN
      ID(c) as id,
      c.name as name
  `;
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No cities found');
        } else {
          const dataList = createObject(results);
          resolve(dataList);
        }
      })
      .catch(reject);
  });
};

export async function getCities() {
  try {
    return await getCitiesAsync();
  } catch (err) {
    console.error(err);
    return err;
  }
}

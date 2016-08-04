import {
  neo4jSession,
  createObject,
} from '../helpers';

const getCityByIdAsync = (id) => {
  const query = `
    MATCH (c:City)-[:IS_FROM]->(co:Country)
    WHERE ID(c) = toInt({id})
    RETURN
      ID(c) as id,
      c.name as name,
      co as Country
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
          const dataList = createObject(results.records);
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
      nameLower: lower({name})
    })-[:IS_FROM]->(co:Country)
    RETURN
      ID(c) as id,
      c.name as name,
      co as Country
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
          const dataList = createObject(results.records);
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
    MATCH (c:City)-[:IS_FROM]->(co:Country)
    RETURN
      ID(c) as id,
      c.name as name,
      co as Country
  `;
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No cities found');
        } else {
          const dataList = createObject(results.records);
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
//
// c.isoCode as isoCode,
// c.name as name,
// c.fipsCode as code,
// c.tld as tld,
// ID(c) as id,
// ct as cities

export const getCitiesByCountryAsync = (countryId) => {
  const query = `
      MATCH (c:City)-[:IS_FROM]->(co:Country)
      WHERE ID(co) = toInt({id})
      RETURN
        ID(c) as id,
        c.name as name,
        co as Country
      LIMIT 3
    `;
  const params = {
    id: countryId,
  };
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query, params)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No cities found');
        } else {
          const dataList = createObject(results.records);
          resolve(dataList);
        }
      })
      .catch(reject);
  });
};

export async function getCitiesByCountry(countryId) {
  try {
    return await getCitiesByCountryAsync(countryId);
  } catch (err) {
    console.error(err);
    return err;
  }
}


export const getCitiesContainingTextAsync = (name) => {
  const query = `
    MATCH (c:City)-[:IS_FROM]->(co:Country)
    WHERE c.nameLower =~ '(?i).*${name}.*'
    RETURN
      ID(c) as id,
      c.name as name,
      co as Country
    `;
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No cities found');
        } else {
          const dataList = createObject(results.records);
          resolve(dataList);
        }
      })
      .catch(reject);
  });
};

export async function getCitiesContainingText(text) {
  try {
    return await getCitiesContainingTextAsync(text);
  } catch (err) {
    console.error(err);
    return err;
  }
}

import { neo4jSession, createObject } from '../helpers';

export const getCountryByIdAsync = (id) => {
  const query = `
    MATCH (c:Country)
    WHERE ID(c) = toInt({id})
    RETURN
      c.code,
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
          reject('No cities found');
        } else {
          const dataList = createObject(results.records);
          resolve(dataList[0]);
        }
      })
      .catch(reject);
  });
};

export async function getCountryById(id) {
  try {
    const countryById = await getCountryByIdAsync(id);
    return countryById;
  } catch (err) {
    console.error(err);
    return err;
  }
}

const getCountryByNameAsync = (name) => {
  const query = `
    MATCH (c:Country {
      nameLower: lower({name})
    })
    RETURN
      ID(c) as id,
      c.isoCode as isoCode,
      c.name as name,
      c.fipsCode as code,
      c.tld as tld
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
          reject('No countries found');
        } else {
          const dataList = createObject(results.records);
          resolve(dataList[0]);
        }
      })
      .catch(reject);
  });
};

export async function getCountryByName(name) {
  try {
    const countryByName = await getCountryByNameAsync(name);
    return countryByName;
  } catch (err) {
    console.error(err);
    return err;
  }
}


const getCountriesAsync = () => {
  const query = `
    MATCH (c:Country)
    RETURN
      ID(c) as id,
      c.isoCode as isoCode,
      c.name as name,
      c.fipsCode as code,
      c.tld as tld
  `;
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No countries found');
        } else {
          const dataList = createObject(results.records);
          resolve(dataList);
        }
      })
      .catch(reject);
  });
};

export async function getCountries() {
  try {
    const countriesList = await getCountriesAsync();
    return countriesList;
  } catch (err) {
    console.error(err);
    return err;
  }
}

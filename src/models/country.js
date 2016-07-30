import { neo4jSession } from '../helpers';

export const getCountryByIdAsync = (id) => {
  const query = `
    MATCH (c:Country)
    WHERE ID(c)= {id}
    RETURN
    c.code
    ID(a) as id,
    a.country as country,
    a.city as city,
    a.number as number,
    a.phone as phoneNumber,
    a.lat as latitud,
    a.long as longitud,
    a.url as webpage
  `;
  const params = {
    id,
  };
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query, params)
      .then((results) => {
        const record = results.records[0];
        if (results.records.length < 1) {
          reject('No coworks found');
        } else {
          const cowork = {};
          record.keys.forEach((el, i) => {
            if (record.keys[i] === 'id') {
              cowork[record.keys[i]] = record._fields[i].low;
            } else {
              cowork[record.keys[i]] = record._fields[i];
            }
          });
          resolve(cowork);
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
    console.log(err);
    return err;
  }
}


const getcountryByNameAsync = (name) => {
  const query = `
    MATCH (c:Country {
      name: {name}
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
          reject('No coworks found');
        } else {
          const dataList = [];
          results.records.forEach((record) => {
            const item = {};
            record.keys.forEach((el, i) => {
              if (record.keys[i] === 'id') {
                item[record.keys[i]] = record._fields[i].low;
              } else {
                item[record.keys[i]] = record._fields[i];
              }
            });
            dataList.push(item);
          });
          resolve(dataList[0]);
        }
      })
      .catch(reject);
  });
};

export async function getcountryByName(name) {
  try {
    const countryByName = await getcountryByNameAsync(name);
    return countryByName;
  } catch (err) {
    console.log(err);
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
          reject('No coworks found');
        } else {
          const dataList = [];
          results.records.forEach((record) => {
            const item = {};
            record.keys.forEach((el, i) => {
              if (record.keys[i] === 'id') {
                item[record.keys[i]] = record._fields[i].low;
              } else {
                item[record.keys[i]] = record._fields[i];
              }
            });
            dataList.push(item);
          });
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
    console.log(err);
    return err;
  }
}

import { neo4jSession } from '../helpers';

export const getCoworkByIdAsync = (id) => {
  const query = `
    MATCH (a:Cowork)
    WHERE ID(a)= {id}
    RETURN
    a.name as name,
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
    MATCH (a:Cowork {
      name: {name}
    })
    RETURN
    a.name as name,
    ID(a) as id,
    a.country as country,
    a.city as city,
    a.number as number,
    a.phone as phoneNumber,
    a.lat as latitud,
    a.long as longitud,
    a.url as webpage
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
          const coworks = [];
          results.records.forEach((record) => {
            const cowork = {};
            record.keys.forEach((el, i) => {
              if (record.keys[i] === 'id') {
                cowork[record.keys[i]] = record._fields[i].low;
              } else {
                cowork[record.keys[i]] = record._fields[i];
              }
            });
            coworks.push(cowork);
          });
          resolve(coworks[0]);
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
    MATCH (a:Cowork)
    RETURN
      a.name as name,
      ID(a) as id,
      a.country as country,
      a.city as city,
      a.number as number,
      a.phone as phoneNumber,
      a.lat as latitud,
      a.long as longitud,
      a.url as webpage
  `;
  return new Promise((resolve, reject) => {
    neo4jSession()
      .run(query)
      .then((results) => {
        if (results.records.length < 1) {
          reject('No coworks found');
        } else {
          const coworks = [];
          results.records.forEach((record) => {
            const cowork = {};
            record.keys.forEach((el, i) => {
              if (record.keys[i] === 'id') {
                cowork[record.keys[i]] = record._fields[i].low;
              } else {
                cowork[record.keys[i]] = record._fields[i];
              }
            });
            coworks.push(cowork);
          });
          resolve(coworks);
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

import { neo4jSession } from '../helpers';

const getCitiesAsync = () => {
  const query = `
    MATCH (c:City)
    RETURN
      c
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

export async function getCities() {
  try {
    const citiesList = await getCitiesAsync();
    return citiesList;
  } catch (err) {
    console.log(err);
    return err;
  }
}

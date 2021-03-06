import n4 from 'neo4j-driver';
import config from '../config';

const neo4j = n4.v1;
let URL = `https://${config.neo4j.url}`;
if (process.env.NODE_ENV === 'development') {
  URL = 'http://localhost';
}
const driver = neo4j.driver(URL, neo4j.auth.basic(config.neo4j.username, config.neo4j.password));
let session = driver.session();

export const neo4jSession = () => {
  if (!session) { // TODO: Check how the connection closes. Open it if it closes, Check connection pool, etc.
    session = driver.session();
  }
  return session;
};

// CreateObject
export const createObject = (results) => {
  const dataList = [];
  // console.log(util.inspect(results, { colors: true, depth: 5 }));
  results.forEach((record) => {
    const item = {};
    record.keys.forEach((el, i) => {
      item[record.keys[i]] = record._fields[i];
    });
    dataList.push(item);
  });
  return dataList;
};

// const isInArray = (key, arr) => {
//   return (arr.indexOf(key) !== -1);
// };

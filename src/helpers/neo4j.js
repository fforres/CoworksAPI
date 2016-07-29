import n4 from 'neo4j-driver';
import config from '../config';

const neo4j = n4.v1;
const driver = neo4j.driver('http://localhost', neo4j.auth.basic(config.neo4j.username, config.neo4j.password));
let session = driver.session();

export const neo4jSession = () => {
  if (!session) { // TODO: Check how the connection closes. Open it if it closes, Check connection pool, etc.
    session = driver.session();
  }
  return session;
};

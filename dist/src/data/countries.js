import parse from 'csv-parse';
import fs from 'fs';
import n4 from 'neo4j-driver';
import config from '../config';
const neo4j = n4.v1;
const driver = neo4j.driver('http://localhost', neo4j.auth.basic(config.neo4j.username, config.neo4j.password));
const session = driver.session();


const parser = parse({ delimiter: '\t' }, (err, data) => {
  const string = `
    MERGE (country:Country {
      code: {code},
      name: {name}
    })
    RETURN country`;
  data.forEach((country) => {
    const params = {
      code: country[1],
      name: country[3],
    };
    session
      .run(string, params)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  session.close();
  driver.close();
});

fs.createReadStream(__dirname + '/countries.txt').pipe(parser);

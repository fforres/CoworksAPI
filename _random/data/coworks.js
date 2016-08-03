import n4 from 'neo4j-driver';
import config from '../../src/config';
const neo4j = n4.v1;
const driver = neo4j.driver('http://localhost', neo4j.auth.basic(config.neo4j.username, config.neo4j.password));
const session = driver.session();

import data from './coworks.json';

const doLoad = (coworks) => {
  const string = `
    MERGE (cwrk:Cowork {
      name: {name},
      shortDescription: {shortDescription},
      longDescription: {longDescription},
      street: {street},
      number: {number},
      lat: {lat},
      long: {long},
      country: {country},
      city: {city},
      phone: {phone},
      url: {url}
    })
    MERGE (c:Country {isoCode: {country} })
    MERGE (ct:City {name: {city} })
    CREATE (cwrk)-[:IS_FROM]->(c)
    CREATE (cwrk)-[:IS_FROM]->(ct)
    CREATE (ct)-[:HAS]->(cwrk)
    CREATE (c)-[:HAS]->(cwrk)
    RETURN cwrk`;

  Object.keys(coworks.coworks).forEach((el) => {
    const cowork = coworks.coworks[el];
    delete cowork.images;

    const params = {
      name: cowork.nombre,
      shortDescription: cowork.descripcion.corta,
      longDescription: cowork.descripcion.larga,
      street: cowork.direccion.calle,
      number: cowork.direccion.numero,
      lat: cowork.direccion.geo.lat,
      long: cowork.direccion.geo.lng,
      country: 'CL',
      city: cowork.direccion.ciudad,
      phone: cowork.telefono,
      url: cowork.url,
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
};

doLoad(data);

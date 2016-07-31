import { GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList } from 'graphql';
import { countryType } from './country';

export const cityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    name: {
      type: GraphQLString,
      description: 'City Name',
    },
    id: {
      type: GraphQLInt,
      description: 'Unique city ID',
      resolve: (obj) => {
        if (obj.id && obj.id.low) {
          return obj.id.low;
        }
        return null;
      },
    },
    country: {
      type: countryType,
      description: 'Country information for the city',
      resolve: (obj) => {
        const country = Object.assign({}, obj.Country.properties, { id: obj.Country.identity });
        return country;
      },
    },
  }),
});


export const cityListType = new GraphQLList(cityType);

import { GraphQLString, GraphQLObjectType, GraphQLFloat, GraphQLList, GraphQLInt, GraphQLInterfaceType } from 'graphql';

// Cowork Type definition

// const coworkInterface = new GraphQLInterfaceType({
//   name: 'Cowork',
//   fields: () => ({
//     name: {
//       type: GraphQLString,
//       description: 'Cowork Display Name',
//     },
//     id: {
//       type: GraphQLString,
//       description: 'Unique Cowork ID',
//     },
//     phoneNumber: {
//       type: GraphQLString,
//       description: 'Contact telepone number for the cowork',
//     },
//     latitud: {
//       type: GraphQLFloat,
//       description: 'latitud for the Cowork',
//     },
//     longitud: {
//       type: GraphQLFloat,
//       description: 'longitud for the Cowork',
//     },
//     webpage: {
//       type: GraphQLString,
//       description: 'the webpage for the cowork',
//     },
//   }),
// });


// var theadType = new GraphQLObjectType({
//   name: 'Thread',
//   description: 'A Thread',
//   fields: () => ({
//     id: {
//       type: new GraphQLNonNull(GraphQLString),
//       description: 'id of the thread'
//     },
//     participants: {
//       type: new GraphQLList(GraphQLString),
//       description: 'Participants of thread'
//     },
//     messages: {
//       type: new GraphQLList(),
//       description: 'Messages in thread'
//     }
//
//   })
// });
// You can define your own custom messageType the same way you defined theadType
// and then you do new GraphQLList(messageType) to specify the type of your list of messages.


export const coworkType = new GraphQLObjectType({
    name: 'Cowork',
    fields: ()=>({
        name: {
            type: GraphQLString,
            description: 'Cowork Display Name'

        },
        id: {
            type: GraphQLInt,
            description: 'Unique Cowork ID',
        },
        phoneNumber: {
            type: GraphQLString,
            description: 'Contact telepone number for the cowork',
        },
        latitud: {
            type: GraphQLFloat,
            description: 'latitud for the Cowork',
        },
        longitud: {
            type: GraphQLFloat,
            description: 'longitud for the Cowork',
        },
        webpage: {
            type: GraphQLString,
            description: 'the webpage for the cowork',
        }
    })
});



'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coworkListType = exports.coworkType = undefined;

var _graphql = require('graphql');

var _city = require('./city');

var _country = require('./country');

var coworkType = exports.coworkType = new _graphql.GraphQLObjectType({
  name: 'Cowork',
  fields: function fields() {
    return {
      name: {
        type: _graphql.GraphQLString,
        description: 'Cowork Display Name'
      },
      id: {
        type: _graphql.GraphQLInt,
        description: 'Unique Cowork ID',
        resolve: function resolve(obj) {
          if (obj.id && obj.id.low) {
            return obj.id.low;
          }
          return null;
        }
      },
      longDescription: {
        type: _graphql.GraphQLString,
        description: 'Long text with the description of the cowork'
      },
      shortDescription: {
        type: _graphql.GraphQLString,
        description: 'Short text with the description of the cowork, hopefully a catch-frase or something around 20 words'
      },
      street: {
        type: _graphql.GraphQLString,
        description: 'Address - Street Name'
      },
      number: {
        type: _graphql.GraphQLString,
        description: 'Address - Number'
      },
      phoneNumber: {
        type: _graphql.GraphQLString,
        description: 'Contact telepone number for the cowork'
      },
      latitud: {
        type: _graphql.GraphQLFloat,
        description: 'latitud for the Cowork'
      },
      longitud: {
        type: _graphql.GraphQLFloat,
        description: 'longitud for the Cowork'
      },
      webpage: {
        type: _graphql.GraphQLString,
        description: 'the webpage for the cowork'
      },
      city: {
        type: _city.cityType,
        description: 'the current city of the cowork',
        resolve: function resolve(obj) {
          var city = Object.assign({}, obj.City.properties, { id: obj.City.identity });
          return city;
        }
      },
      country: {
        type: _country.countryType,
        description: 'Country information for the city',
        resolve: function resolve(obj) {
          var country = Object.assign({}, obj.Country.properties, { id: obj.Country.identity });
          return country;
        }
      }
    };
  }
});

var coworkListType = exports.coworkListType = new _graphql.GraphQLList(coworkType);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9jb3dvcmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVPLElBQU0sa0NBQWEsK0JBQXNCO0FBQzlDLFFBQU0sUUFEd0M7QUFFOUMsVUFBUTtBQUFBLFdBQU87QUFDYixZQUFNO0FBQ0osb0NBREk7QUFFSixxQkFBYTtBQUZULE9BRE87QUFLYixVQUFJO0FBQ0YsaUNBREU7QUFFRixxQkFBYSxrQkFGWDtBQUdGLGlCQUFTLGlCQUFDLEdBQUQsRUFBUztBQUNoQixjQUFJLElBQUksRUFBSixJQUFVLElBQUksRUFBSixDQUFPLEdBQXJCLEVBQTBCO0FBQ3hCLG1CQUFPLElBQUksRUFBSixDQUFPLEdBQWQ7QUFDRDtBQUNELGlCQUFPLElBQVA7QUFDRDtBQVJDLE9BTFM7QUFlYix1QkFBaUI7QUFDZixvQ0FEZTtBQUVmLHFCQUFhO0FBRkUsT0FmSjtBQW1CYix3QkFBa0I7QUFDaEIsb0NBRGdCO0FBRWhCLHFCQUFhO0FBRkcsT0FuQkw7QUF1QmIsY0FBUTtBQUNOLG9DQURNO0FBRU4scUJBQWE7QUFGUCxPQXZCSztBQTJCYixjQUFRO0FBQ04sb0NBRE07QUFFTixxQkFBYTtBQUZQLE9BM0JLO0FBK0JiLG1CQUFhO0FBQ1gsb0NBRFc7QUFFWCxxQkFBYTtBQUZGLE9BL0JBO0FBbUNiLGVBQVM7QUFDUCxtQ0FETztBQUVQLHFCQUFhO0FBRk4sT0FuQ0k7QUF1Q2IsZ0JBQVU7QUFDUixtQ0FEUTtBQUVSLHFCQUFhO0FBRkwsT0F2Q0c7QUEyQ2IsZUFBUztBQUNQLG9DQURPO0FBRVAscUJBQWE7QUFGTixPQTNDSTtBQStDYixZQUFNO0FBQ0osNEJBREk7QUFFSixxQkFBYSxnQ0FGVDtBQUdKLGlCQUFTLGlCQUFDLEdBQUQsRUFBUztBQUNoQixjQUFNLE9BQU8sT0FBTyxNQUFQLENBQWMsRUFBZCxFQUFrQixJQUFJLElBQUosQ0FBUyxVQUEzQixFQUF1QyxFQUFFLElBQUksSUFBSSxJQUFKLENBQVMsUUFBZixFQUF2QyxDQUFiO0FBQ0EsaUJBQU8sSUFBUDtBQUNEO0FBTkcsT0EvQ087QUF1RGIsZUFBUztBQUNQLGtDQURPO0FBRVAscUJBQWEsa0NBRk47QUFHUCxpQkFBUyxpQkFBQyxHQUFELEVBQVM7QUFDaEIsY0FBTSxVQUFVLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsSUFBSSxPQUFKLENBQVksVUFBOUIsRUFBMEMsRUFBRSxJQUFJLElBQUksT0FBSixDQUFZLFFBQWxCLEVBQTFDLENBQWhCO0FBQ0EsaUJBQU8sT0FBUDtBQUNEO0FBTk07QUF2REksS0FBUDtBQUFBO0FBRnNDLENBQXRCLENBQW5COztBQXFFQSxJQUFNLDBDQUFpQix5QkFBZ0IsVUFBaEIsQ0FBdkIiLCJmaWxlIjoiY293b3JrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTFN0cmluZywgR3JhcGhRTE9iamVjdFR5cGUsIEdyYXBoUUxGbG9hdCwgR3JhcGhRTExpc3QsIEdyYXBoUUxJbnQgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IGNpdHlUeXBlIH0gZnJvbSAnLi9jaXR5JztcbmltcG9ydCB7IGNvdW50cnlUeXBlIH0gZnJvbSAnLi9jb3VudHJ5JztcblxuZXhwb3J0IGNvbnN0IGNvd29ya1R5cGUgPSBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICBuYW1lOiAnQ293b3JrJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0Nvd29yayBEaXNwbGF5IE5hbWUnLFxuICAgIH0sXG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxJbnQsXG4gICAgICBkZXNjcmlwdGlvbjogJ1VuaXF1ZSBDb3dvcmsgSUQnLFxuICAgICAgcmVzb2x2ZTogKG9iaikgPT4ge1xuICAgICAgICBpZiAob2JqLmlkICYmIG9iai5pZC5sb3cpIHtcbiAgICAgICAgICByZXR1cm4gb2JqLmlkLmxvdztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsb25nRGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0xvbmcgdGV4dCB3aXRoIHRoZSBkZXNjcmlwdGlvbiBvZiB0aGUgY293b3JrJyxcbiAgICB9LFxuICAgIHNob3J0RGVzY3JpcHRpb246IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJ1Nob3J0IHRleHQgd2l0aCB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGNvd29yaywgaG9wZWZ1bGx5IGEgY2F0Y2gtZnJhc2Ugb3Igc29tZXRoaW5nIGFyb3VuZCAyMCB3b3JkcycsXG4gICAgfSxcbiAgICBzdHJlZXQ6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FkZHJlc3MgLSBTdHJlZXQgTmFtZScsXG4gICAgfSxcbiAgICBudW1iZXI6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0FkZHJlc3MgLSBOdW1iZXInLFxuICAgIH0sXG4gICAgcGhvbmVOdW1iZXI6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0NvbnRhY3QgdGVsZXBvbmUgbnVtYmVyIGZvciB0aGUgY293b3JrJyxcbiAgICB9LFxuICAgIGxhdGl0dWQ6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxGbG9hdCxcbiAgICAgIGRlc2NyaXB0aW9uOiAnbGF0aXR1ZCBmb3IgdGhlIENvd29yaycsXG4gICAgfSxcbiAgICBsb25naXR1ZDoge1xuICAgICAgdHlwZTogR3JhcGhRTEZsb2F0LFxuICAgICAgZGVzY3JpcHRpb246ICdsb25naXR1ZCBmb3IgdGhlIENvd29yaycsXG4gICAgfSxcbiAgICB3ZWJwYWdlOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246ICd0aGUgd2VicGFnZSBmb3IgdGhlIGNvd29yaycsXG4gICAgfSxcbiAgICBjaXR5OiB7XG4gICAgICB0eXBlOiBjaXR5VHlwZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAndGhlIGN1cnJlbnQgY2l0eSBvZiB0aGUgY293b3JrJyxcbiAgICAgIHJlc29sdmU6IChvYmopID0+IHtcbiAgICAgICAgY29uc3QgY2l0eSA9IE9iamVjdC5hc3NpZ24oe30sIG9iai5DaXR5LnByb3BlcnRpZXMsIHsgaWQ6IG9iai5DaXR5LmlkZW50aXR5IH0pO1xuICAgICAgICByZXR1cm4gY2l0eTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBjb3VudHJ5OiB7XG4gICAgICB0eXBlOiBjb3VudHJ5VHlwZSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ291bnRyeSBpbmZvcm1hdGlvbiBmb3IgdGhlIGNpdHknLFxuICAgICAgcmVzb2x2ZTogKG9iaikgPT4ge1xuICAgICAgICBjb25zdCBjb3VudHJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgb2JqLkNvdW50cnkucHJvcGVydGllcywgeyBpZDogb2JqLkNvdW50cnkuaWRlbnRpdHkgfSk7XG4gICAgICAgIHJldHVybiBjb3VudHJ5O1xuICAgICAgfSxcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5cbmV4cG9ydCBjb25zdCBjb3dvcmtMaXN0VHlwZSA9IG5ldyBHcmFwaFFMTGlzdChjb3dvcmtUeXBlKTtcbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countryListType = exports.countryType = undefined;

var _graphql = require('graphql');

var _city = require('./city');

var countryType = exports.countryType = new _graphql.GraphQLObjectType({
  name: 'Country',
  fields: function fields() {
    return {
      name: {
        type: _graphql.GraphQLString,
        description: 'Country Name'
      },
      id: {
        type: _graphql.GraphQLInt,
        description: 'Unique city ID',
        resolve: function resolve(obj) {
          if (obj.id && obj.id.low) {
            return obj.id.low;
          }
          return null;
        }
      },
      code: {
        type: _graphql.GraphQLString,
        description: 'FIPS country code'
      },
      isoCode: {
        type: _graphql.GraphQLString,
        description: 'ISO country code'
      },
      tld: {
        type: _graphql.GraphQLString,
        description: 'TLD  for the country'
      },
      cities: {
        type: new _graphql.GraphQLList(_city.cityListType),
        description: 'Country Cities'
      }
    };
  }
});

var countryListType = exports.countryListType = new _graphql.GraphQLList(countryType);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9jb3VudHJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFTyxJQUFNLG9DQUFjLCtCQUFzQjtBQUMvQyxRQUFNLFNBRHlDO0FBRS9DLFVBQVE7QUFBQSxXQUFPO0FBQ2IsWUFBTTtBQUNKLG9DQURJO0FBRUoscUJBQWE7QUFGVCxPQURPO0FBS2IsVUFBSTtBQUNGLGlDQURFO0FBRUYscUJBQWEsZ0JBRlg7QUFHRixpQkFBUyxpQkFBQyxHQUFELEVBQVM7QUFDaEIsY0FBSSxJQUFJLEVBQUosSUFBVSxJQUFJLEVBQUosQ0FBTyxHQUFyQixFQUEwQjtBQUN4QixtQkFBTyxJQUFJLEVBQUosQ0FBTyxHQUFkO0FBQ0Q7QUFDRCxpQkFBTyxJQUFQO0FBQ0Q7QUFSQyxPQUxTO0FBZWIsWUFBTTtBQUNKLG9DQURJO0FBRUoscUJBQWE7QUFGVCxPQWZPO0FBbUJiLGVBQVM7QUFDUCxvQ0FETztBQUVQLHFCQUFhO0FBRk4sT0FuQkk7QUF1QmIsV0FBSztBQUNILG9DQURHO0FBRUgscUJBQWE7QUFGVixPQXZCUTtBQTJCYixjQUFRO0FBQ04sY0FBTSw0Q0FEQTtBQUVOLHFCQUFhO0FBRlA7QUEzQkssS0FBUDtBQUFBO0FBRnVDLENBQXRCLENBQXBCOztBQXFDQSxJQUFNLDRDQUFrQix5QkFBZ0IsV0FBaEIsQ0FBeEIiLCJmaWxlIjoiY291bnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxTdHJpbmcsIEdyYXBoUUxPYmplY3RUeXBlLCBHcmFwaFFMSW50LCBHcmFwaFFMTGlzdCB9IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHsgY2l0eUxpc3RUeXBlIH0gZnJvbSAnLi9jaXR5JztcblxuZXhwb3J0IGNvbnN0IGNvdW50cnlUeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogJ0NvdW50cnknLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ291bnRyeSBOYW1lJyxcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMSW50LFxuICAgICAgZGVzY3JpcHRpb246ICdVbmlxdWUgY2l0eSBJRCcsXG4gICAgICByZXNvbHZlOiAob2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmouaWQgJiYgb2JqLmlkLmxvdykge1xuICAgICAgICAgIHJldHVybiBvYmouaWQubG93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGNvZGU6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZJUFMgY291bnRyeSBjb2RlJyxcbiAgICB9LFxuICAgIGlzb0NvZGU6IHtcbiAgICAgIHR5cGU6IEdyYXBoUUxTdHJpbmcsXG4gICAgICBkZXNjcmlwdGlvbjogJ0lTTyBjb3VudHJ5IGNvZGUnLFxuICAgIH0sXG4gICAgdGxkOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMU3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246ICdUTEQgIGZvciB0aGUgY291bnRyeScsXG4gICAgfSxcbiAgICBjaXRpZXM6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTGlzdChjaXR5TGlzdFR5cGUpLFxuICAgICAgZGVzY3JpcHRpb246ICdDb3VudHJ5IENpdGllcycsXG4gICAgfSxcbiAgfSksXG59KTtcblxuXG5leHBvcnQgY29uc3QgY291bnRyeUxpc3RUeXBlID0gbmV3IEdyYXBoUUxMaXN0KGNvdW50cnlUeXBlKTtcbiJdfQ==
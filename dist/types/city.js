'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cityListType = exports.cityType = undefined;

var _graphql = require('graphql');

var _country = require('./country');

var cityType = exports.cityType = new _graphql.GraphQLObjectType({
  name: 'City',
  fields: function fields() {
    return {
      name: {
        type: _graphql.GraphQLString,
        description: 'City Name'
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

var cityListType = exports.cityListType = new _graphql.GraphQLList(cityType);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90eXBlcy9jaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFTyxJQUFNLDhCQUFXLCtCQUFzQjtBQUM1QyxRQUFNLE1BRHNDO0FBRTVDLFVBQVE7QUFBQSxXQUFPO0FBQ2IsWUFBTTtBQUNKLG9DQURJO0FBRUoscUJBQWE7QUFGVCxPQURPO0FBS2IsVUFBSTtBQUNGLGlDQURFO0FBRUYscUJBQWEsZ0JBRlg7QUFHRixpQkFBUyxpQkFBQyxHQUFELEVBQVM7QUFDaEIsY0FBSSxJQUFJLEVBQUosSUFBVSxJQUFJLEVBQUosQ0FBTyxHQUFyQixFQUEwQjtBQUN4QixtQkFBTyxJQUFJLEVBQUosQ0FBTyxHQUFkO0FBQ0Q7QUFDRCxpQkFBTyxJQUFQO0FBQ0Q7QUFSQyxPQUxTO0FBZWIsZUFBUztBQUNQLGtDQURPO0FBRVAscUJBQWEsa0NBRk47QUFHUCxpQkFBUyxpQkFBQyxHQUFELEVBQVM7QUFDaEIsY0FBTSxVQUFVLE9BQU8sTUFBUCxDQUFjLEVBQWQsRUFBa0IsSUFBSSxPQUFKLENBQVksVUFBOUIsRUFBMEMsRUFBRSxJQUFJLElBQUksT0FBSixDQUFZLFFBQWxCLEVBQTFDLENBQWhCO0FBQ0EsaUJBQU8sT0FBUDtBQUNEO0FBTk07QUFmSSxLQUFQO0FBQUE7QUFGb0MsQ0FBdEIsQ0FBakI7O0FBNkJBLElBQU0sc0NBQWUseUJBQWdCLFFBQWhCLENBQXJCIiwiZmlsZSI6ImNpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMU3RyaW5nLCBHcmFwaFFMT2JqZWN0VHlwZSwgR3JhcGhRTEludCwgR3JhcGhRTExpc3QgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IGNvdW50cnlUeXBlIH0gZnJvbSAnLi9jb3VudHJ5JztcblxuZXhwb3J0IGNvbnN0IGNpdHlUeXBlID0gbmV3IEdyYXBoUUxPYmplY3RUeXBlKHtcbiAgbmFtZTogJ0NpdHknLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogR3JhcGhRTFN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2l0eSBOYW1lJyxcbiAgICB9LFxuICAgIGlkOiB7XG4gICAgICB0eXBlOiBHcmFwaFFMSW50LFxuICAgICAgZGVzY3JpcHRpb246ICdVbmlxdWUgY2l0eSBJRCcsXG4gICAgICByZXNvbHZlOiAob2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmouaWQgJiYgb2JqLmlkLmxvdykge1xuICAgICAgICAgIHJldHVybiBvYmouaWQubG93O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGNvdW50cnk6IHtcbiAgICAgIHR5cGU6IGNvdW50cnlUeXBlLFxuICAgICAgZGVzY3JpcHRpb246ICdDb3VudHJ5IGluZm9ybWF0aW9uIGZvciB0aGUgY2l0eScsXG4gICAgICByZXNvbHZlOiAob2JqKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvdW50cnkgPSBPYmplY3QuYXNzaWduKHt9LCBvYmouQ291bnRyeS5wcm9wZXJ0aWVzLCB7IGlkOiBvYmouQ291bnRyeS5pZGVudGl0eSB9KTtcbiAgICAgICAgcmV0dXJuIGNvdW50cnk7XG4gICAgICB9LFxuICAgIH0sXG4gIH0pLFxufSk7XG5cblxuZXhwb3J0IGNvbnN0IGNpdHlMaXN0VHlwZSA9IG5ldyBHcmFwaFFMTGlzdChjaXR5VHlwZSk7XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.citiesByCountry = exports.cityList = exports.cityById = exports.citiesContainingText = exports.cityByName = undefined;

var _graphql = require('graphql');

var _types = require('../types');

var _models = require('../models');

var cityByName = exports.cityByName = {
  name: 'cityByName',
  type: _types.cityType,
  args: {
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
      description: 'City Display Name'
    }
  },
  resolve: function resolve(root, _ref) {
    var name = _ref.name;
    return (0, _models.getCityByName)(name);
  }
};

var citiesContainingText = exports.citiesContainingText = {
  name: 'citiesContainingText',
  type: _types.cityListType,
  args: {
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
      description: 'City Display Name'
    }
  },
  resolve: function resolve(root, _ref2) {
    var name = _ref2.name;
    return (0, _models.getCitiesContainingText)(name);
  }
};

var cityById = exports.cityById = {
  name: 'cityById',
  type: _types.cityType,
  args: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt),
      description: 'Unique City ID'
    }
  },
  resolve: function resolve(root, _ref3) {
    var id = _ref3.id;
    return (0, _models.getCityById)(id);
  }
};

var cityList = exports.cityList = {
  name: 'cityList',
  description: 'Returns a list of cities', // TODO: define this query (Geolocated? by popularity?)
  type: _types.cityListType,
  resolve: function resolve() {
    return (0, _models.getCities)();
  }
};

var citiesByCountry = exports.citiesByCountry = {
  name: 'citiesByCountry',
  description: 'List of cities by country',
  type: _types.cityListType,
  args: {
    countryId: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt),
      description: 'Unique Country id to filter cities'
    }
  },
  resolve: function resolve(root, _ref4) {
    var countryId = _ref4.countryId;
    return (0, _models.getCitiesByCountry)(countryId);
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyaWVzL2NpdHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVPLElBQU0sa0NBQWE7QUFDeEIsUUFBTSxZQURrQjtBQUV4Qix1QkFGd0I7QUFHeEIsUUFBTTtBQUNKLFVBQU07QUFDSixZQUFNLG1EQURGO0FBRUosbUJBQWE7QUFGVDtBQURGLEdBSGtCO0FBU3hCLFdBQVMsaUJBQUMsSUFBRDtBQUFBLFFBQVMsSUFBVCxRQUFTLElBQVQ7QUFBQSxXQUFvQiwyQkFBYyxJQUFkLENBQXBCO0FBQUE7QUFUZSxDQUFuQjs7QUFZQSxJQUFNLHNEQUF1QjtBQUNsQyxRQUFNLHNCQUQ0QjtBQUVsQywyQkFGa0M7QUFHbEMsUUFBTTtBQUNKLFVBQU07QUFDSixZQUFNLG1EQURGO0FBRUosbUJBQWE7QUFGVDtBQURGLEdBSDRCO0FBU2xDLFdBQVMsaUJBQUMsSUFBRDtBQUFBLFFBQVMsSUFBVCxTQUFTLElBQVQ7QUFBQSxXQUFvQixxQ0FBd0IsSUFBeEIsQ0FBcEI7QUFBQTtBQVR5QixDQUE3Qjs7QUFZQSxJQUFNLDhCQUFXO0FBQ3RCLFFBQU0sVUFEZ0I7QUFFdEIsdUJBRnNCO0FBR3RCLFFBQU07QUFDSixRQUFJO0FBQ0YsWUFBTSxnREFESjtBQUVGLG1CQUFhO0FBRlg7QUFEQSxHQUhnQjtBQVN0QixXQUFTLGlCQUFDLElBQUQ7QUFBQSxRQUFTLEVBQVQsU0FBUyxFQUFUO0FBQUEsV0FBa0IseUJBQVksRUFBWixDQUFsQjtBQUFBO0FBVGEsQ0FBakI7O0FBWUEsSUFBTSw4QkFBVztBQUN0QixRQUFNLFVBRGdCO0FBRXRCLGVBQWEsMEJBRlMsRUFFbUI7QUFDekMsMkJBSHNCO0FBSXRCLFdBQVM7QUFBQSxXQUFNLHdCQUFOO0FBQUE7QUFKYSxDQUFqQjs7QUFPQSxJQUFNLDRDQUFrQjtBQUM3QixRQUFNLGlCQUR1QjtBQUU3QixlQUFhLDJCQUZnQjtBQUc3QiwyQkFINkI7QUFJN0IsUUFBTTtBQUNKLGVBQVc7QUFDVCxZQUFNLGdEQURHO0FBRVQsbUJBQWE7QUFGSjtBQURQLEdBSnVCO0FBVTdCLFdBQVMsaUJBQUMsSUFBRDtBQUFBLFFBQVMsU0FBVCxTQUFTLFNBQVQ7QUFBQSxXQUF5QixnQ0FBbUIsU0FBbkIsQ0FBekI7QUFBQTtBQVZvQixDQUF4QiIsImZpbGUiOiJjaXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTFN0cmluZywgR3JhcGhRTE5vbk51bGwsIEdyYXBoUUxJbnQgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IGNpdHlUeXBlLCBjaXR5TGlzdFR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRDaXR5QnlOYW1lLCBnZXRDaXR5QnlJZCwgZ2V0Q2l0aWVzLCBnZXRDaXRpZXNCeUNvdW50cnksIGdldENpdGllc0NvbnRhaW5pbmdUZXh0IH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGNpdHlCeU5hbWUgPSB7XG4gIG5hbWU6ICdjaXR5QnlOYW1lJyxcbiAgdHlwZTogY2l0eVR5cGUsXG4gIGFyZ3M6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZyksXG4gICAgICBkZXNjcmlwdGlvbjogJ0NpdHkgRGlzcGxheSBOYW1lJyxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiAocm9vdCwgeyBuYW1lIH0pID0+IGdldENpdHlCeU5hbWUobmFtZSksXG59O1xuXG5leHBvcnQgY29uc3QgY2l0aWVzQ29udGFpbmluZ1RleHQgPSB7XG4gIG5hbWU6ICdjaXRpZXNDb250YWluaW5nVGV4dCcsXG4gIHR5cGU6IGNpdHlMaXN0VHlwZSxcbiAgYXJnczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ2l0eSBEaXNwbGF5IE5hbWUnLFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IChyb290LCB7IG5hbWUgfSkgPT4gZ2V0Q2l0aWVzQ29udGFpbmluZ1RleHQobmFtZSksXG59O1xuXG5leHBvcnQgY29uc3QgY2l0eUJ5SWQgPSB7XG4gIG5hbWU6ICdjaXR5QnlJZCcsXG4gIHR5cGU6IGNpdHlUeXBlLFxuICBhcmdzOiB7XG4gICAgaWQ6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMSW50KSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnVW5pcXVlIENpdHkgSUQnLFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IChyb290LCB7IGlkIH0pID0+IGdldENpdHlCeUlkKGlkKSxcbn07XG5cbmV4cG9ydCBjb25zdCBjaXR5TGlzdCA9IHtcbiAgbmFtZTogJ2NpdHlMaXN0JyxcbiAgZGVzY3JpcHRpb246ICdSZXR1cm5zIGEgbGlzdCBvZiBjaXRpZXMnLCAvLyBUT0RPOiBkZWZpbmUgdGhpcyBxdWVyeSAoR2VvbG9jYXRlZD8gYnkgcG9wdWxhcml0eT8pXG4gIHR5cGU6IGNpdHlMaXN0VHlwZSxcbiAgcmVzb2x2ZTogKCkgPT4gZ2V0Q2l0aWVzKCksXG59O1xuXG5leHBvcnQgY29uc3QgY2l0aWVzQnlDb3VudHJ5ID0ge1xuICBuYW1lOiAnY2l0aWVzQnlDb3VudHJ5JyxcbiAgZGVzY3JpcHRpb246ICdMaXN0IG9mIGNpdGllcyBieSBjb3VudHJ5JyxcbiAgdHlwZTogY2l0eUxpc3RUeXBlLFxuICBhcmdzOiB7XG4gICAgY291bnRyeUlkOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEludCksXG4gICAgICBkZXNjcmlwdGlvbjogJ1VuaXF1ZSBDb3VudHJ5IGlkIHRvIGZpbHRlciBjaXRpZXMnLFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IChyb290LCB7IGNvdW50cnlJZCB9KSA9PiBnZXRDaXRpZXNCeUNvdW50cnkoY291bnRyeUlkKSxcbn07XG4iXX0=
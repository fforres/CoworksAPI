'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countryList = exports.countryById = exports.countryByName = undefined;

var _graphql = require('graphql');

var _types = require('../types');

var _models = require('../models');

var countryByName = exports.countryByName = {
  name: 'countryByName',
  type: _types.countryType,
  args: {
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
      description: 'Country Display Name'
    }
  },
  resolve: function resolve(root, _ref) {
    var name = _ref.name;
    return (0, _models.getCountryByName)(name);
  }
};

var countryById = exports.countryById = {
  name: 'countryById',
  type: _types.countryType,
  args: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt),
      description: 'Unique Country ID'
    }
  },
  resolve: function resolve(root, _ref2) {
    var id = _ref2.id;
    return (0, _models.getCountryById)(id);
  }
};

var countryList = exports.countryList = {
  name: 'countryList',
  description: 'Returns a list of countries', // TODO: define this query (Geolocated? by popularity?)
  type: _types.countryListType,
  resolve: function resolve() {
    return (0, _models.getCountries)();
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyaWVzL2NvdW50cnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVPLElBQU0sd0NBQWdCO0FBQzNCLFFBQU0sZUFEcUI7QUFFM0IsMEJBRjJCO0FBRzNCLFFBQU07QUFDSixVQUFNO0FBQ0osWUFBTSxtREFERjtBQUVKLG1CQUFhO0FBRlQ7QUFERixHQUhxQjtBQVMzQixXQUFTLGlCQUFDLElBQUQ7QUFBQSxRQUFTLElBQVQsUUFBUyxJQUFUO0FBQUEsV0FBb0IsOEJBQWlCLElBQWpCLENBQXBCO0FBQUE7QUFUa0IsQ0FBdEI7O0FBYUEsSUFBTSxvQ0FBYztBQUN6QixRQUFNLGFBRG1CO0FBRXpCLDBCQUZ5QjtBQUd6QixRQUFNO0FBQ0osUUFBSTtBQUNGLFlBQU0sZ0RBREo7QUFFRixtQkFBYTtBQUZYO0FBREEsR0FIbUI7QUFTekIsV0FBUyxpQkFBQyxJQUFEO0FBQUEsUUFBUyxFQUFULFNBQVMsRUFBVDtBQUFBLFdBQWtCLDRCQUFlLEVBQWYsQ0FBbEI7QUFBQTtBQVRnQixDQUFwQjs7QUFZQSxJQUFNLG9DQUFjO0FBQ3pCLFFBQU0sYUFEbUI7QUFFekIsZUFBYSw2QkFGWSxFQUVtQjtBQUM1Qyw4QkFIeUI7QUFJekIsV0FBUztBQUFBLFdBQU0sMkJBQU47QUFBQTtBQUpnQixDQUFwQiIsImZpbGUiOiJjb3VudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JhcGhRTFN0cmluZywgR3JhcGhRTE5vbk51bGwsIEdyYXBoUUxJbnQgfSBmcm9tICdncmFwaHFsJztcbmltcG9ydCB7IGNvdW50cnlUeXBlLCBjb3VudHJ5TGlzdFR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRDb3VudHJ5QnlJZCwgZ2V0Q291bnRyeUJ5TmFtZSwgZ2V0Q291bnRyaWVzIH0gZnJvbSAnLi4vbW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGNvdW50cnlCeU5hbWUgPSB7XG4gIG5hbWU6ICdjb3VudHJ5QnlOYW1lJyxcbiAgdHlwZTogY291bnRyeVR5cGUsXG4gIGFyZ3M6IHtcbiAgICBuYW1lOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTFN0cmluZyksXG4gICAgICBkZXNjcmlwdGlvbjogJ0NvdW50cnkgRGlzcGxheSBOYW1lJyxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiAocm9vdCwgeyBuYW1lIH0pID0+IGdldENvdW50cnlCeU5hbWUobmFtZSksXG59O1xuXG5cbmV4cG9ydCBjb25zdCBjb3VudHJ5QnlJZCA9IHtcbiAgbmFtZTogJ2NvdW50cnlCeUlkJyxcbiAgdHlwZTogY291bnRyeVR5cGUsXG4gIGFyZ3M6IHtcbiAgICBpZDoge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxJbnQpLFxuICAgICAgZGVzY3JpcHRpb246ICdVbmlxdWUgQ291bnRyeSBJRCcsXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZTogKHJvb3QsIHsgaWQgfSkgPT4gZ2V0Q291bnRyeUJ5SWQoaWQpLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvdW50cnlMaXN0ID0ge1xuICBuYW1lOiAnY291bnRyeUxpc3QnLFxuICBkZXNjcmlwdGlvbjogJ1JldHVybnMgYSBsaXN0IG9mIGNvdW50cmllcycsIC8vIFRPRE86IGRlZmluZSB0aGlzIHF1ZXJ5IChHZW9sb2NhdGVkPyBieSBwb3B1bGFyaXR5PylcbiAgdHlwZTogY291bnRyeUxpc3RUeXBlLFxuICByZXNvbHZlOiAoKSA9PiBnZXRDb3VudHJpZXMoKSxcbn07XG4iXX0=
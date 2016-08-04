'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _queries = require('../queries');

var schema = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: 'Query',
    fields: function fields() {
      return {
        coworkList: _queries.coworkList,
        coworkByName: _queries.coworkByName,
        coworkById: _queries.coworkById,
        countryByName: _queries.countryByName,
        coworkByNameContainingText: _queries.coworkByNameContainingText,
        countryById: _queries.countryById,
        countryList: _queries.countryList,
        cityByName: _queries.cityByName,
        cityById: _queries.cityById,
        cityList: _queries.cityList,
        citiesByCountry: _queries.citiesByCountry,
        citiesContainingText: _queries.citiesContainingText
      };
    }
  })
});

exports.default = schema;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWEvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBSUE7O0FBZUEsSUFBTSxTQUFTLDJCQUFrQjtBQUMvQixTQUFPLCtCQUFzQjtBQUMzQixVQUFNLE9BRHFCO0FBRTNCLFlBQVE7QUFBQSxhQUFPO0FBQ2IsdUNBRGE7QUFFYiwyQ0FGYTtBQUdiLHVDQUhhO0FBSWIsNkNBSmE7QUFLYix1RUFMYTtBQU1iLHlDQU5hO0FBT2IseUNBUGE7QUFRYix1Q0FSYTtBQVNiLG1DQVRhO0FBVWIsbUNBVmE7QUFXYixpREFYYTtBQVliO0FBWmEsT0FBUDtBQUFBO0FBRm1CLEdBQXRCO0FBRHdCLENBQWxCLENBQWY7O2tCQW9CZSxNIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgR3JhcGhRTFNjaGVtYSxcbiAgR3JhcGhRTE9iamVjdFR5cGUsXG59IGZyb20gJ2dyYXBocWwnO1xuaW1wb3J0IHtcbiAgY293b3JrQnlOYW1lLFxuICBjb3dvcmtCeUlkLFxuICBjb3dvcmtMaXN0LFxuICBjb3dvcmtCeU5hbWVDb250YWluaW5nVGV4dCxcbiAgY291bnRyeUJ5TmFtZSxcbiAgY291bnRyeUJ5SWQsXG4gIGNvdW50cnlMaXN0LFxuICBjaXR5QnlOYW1lLFxuICBjaXR5QnlJZCxcbiAgY2l0eUxpc3QsXG4gIGNpdGllc0J5Q291bnRyeSxcbiAgY2l0aWVzQ29udGFpbmluZ1RleHQsXG59IGZyb20gJy4uL3F1ZXJpZXMnO1xuXG5jb25zdCBzY2hlbWEgPSBuZXcgR3JhcGhRTFNjaGVtYSh7XG4gIHF1ZXJ5OiBuZXcgR3JhcGhRTE9iamVjdFR5cGUoe1xuICAgIG5hbWU6ICdRdWVyeScsXG4gICAgZmllbGRzOiAoKSA9PiAoe1xuICAgICAgY293b3JrTGlzdCxcbiAgICAgIGNvd29ya0J5TmFtZSxcbiAgICAgIGNvd29ya0J5SWQsXG4gICAgICBjb3VudHJ5QnlOYW1lLFxuICAgICAgY293b3JrQnlOYW1lQ29udGFpbmluZ1RleHQsXG4gICAgICBjb3VudHJ5QnlJZCxcbiAgICAgIGNvdW50cnlMaXN0LFxuICAgICAgY2l0eUJ5TmFtZSxcbiAgICAgIGNpdHlCeUlkLFxuICAgICAgY2l0eUxpc3QsXG4gICAgICBjaXRpZXNCeUNvdW50cnksXG4gICAgICBjaXRpZXNDb250YWluaW5nVGV4dCxcbiAgICB9KSxcbiAgfSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgc2NoZW1hO1xuIl19
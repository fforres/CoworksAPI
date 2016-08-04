'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coworkList = exports.coworkById = exports.coworkByNameContainingText = exports.coworkByName = undefined;

var _graphql = require('graphql');

var _types = require('../types');

var _models = require('../models');

var coworkByName = exports.coworkByName = {
  name: 'coworkByName',
  type: _types.coworkType,
  args: {
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
      description: 'Cowork Display Name'
    }
  },
  resolve: function resolve(root, _ref) {
    var name = _ref.name;
    return (0, _models.getCoworkByName)(name);
  }
};

var coworkByNameContainingText = exports.coworkByNameContainingText = {
  name: 'coworkByName',
  type: _types.coworkType,
  args: {
    name: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
      description: 'Cowork Display Name'
    }
  },
  resolve: function resolve(root, _ref2) {
    var name = _ref2.name;
    return (0, _models.getCoworkThatContainsName)(name);
  }
};

var coworkById = exports.coworkById = {
  type: _types.coworkType,
  args: {
    id: {
      type: new _graphql.GraphQLNonNull(_graphql.GraphQLInt),
      description: 'Unique Cowork ID'
    }
  },
  resolve: function resolve(root, _ref3) {
    var id = _ref3.id;
    return (0, _models.getCoworkById)(id);
  }
};

var coworkList = exports.coworkList = {
  name: 'coworkList',
  description: 'Returns a list of coworks', // TODO: define this query (Geolocated? by popularity?)
  type: _types.coworkListType,
  resolve: function resolve() {
    return (0, _models.getCoworks)();
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9xdWVyaWVzL2Nvd29yay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRU8sSUFBTSxzQ0FBZTtBQUMxQixRQUFNLGNBRG9CO0FBRTFCLHlCQUYwQjtBQUcxQixRQUFNO0FBQ0osVUFBTTtBQUNKLFlBQU0sbURBREY7QUFFSixtQkFBYTtBQUZUO0FBREYsR0FIb0I7QUFTMUIsV0FBUyxpQkFBQyxJQUFEO0FBQUEsUUFBUyxJQUFULFFBQVMsSUFBVDtBQUFBLFdBQW9CLDZCQUFnQixJQUFoQixDQUFwQjtBQUFBO0FBVGlCLENBQXJCOztBQWFBLElBQU0sa0VBQTZCO0FBQ3hDLFFBQU0sY0FEa0M7QUFFeEMseUJBRndDO0FBR3hDLFFBQU07QUFDSixVQUFNO0FBQ0osWUFBTSxtREFERjtBQUVKLG1CQUFhO0FBRlQ7QUFERixHQUhrQztBQVN4QyxXQUFTLGlCQUFDLElBQUQ7QUFBQSxRQUFTLElBQVQsU0FBUyxJQUFUO0FBQUEsV0FBb0IsdUNBQTBCLElBQTFCLENBQXBCO0FBQUE7QUFUK0IsQ0FBbkM7O0FBYUEsSUFBTSxrQ0FBYTtBQUN4Qix5QkFEd0I7QUFFeEIsUUFBTTtBQUNKLFFBQUk7QUFDRixZQUFNLGdEQURKO0FBRUYsbUJBQWE7QUFGWDtBQURBLEdBRmtCO0FBUXhCLFdBQVMsaUJBQUMsSUFBRDtBQUFBLFFBQVMsRUFBVCxTQUFTLEVBQVQ7QUFBQSxXQUFrQiwyQkFBYyxFQUFkLENBQWxCO0FBQUE7QUFSZSxDQUFuQjs7QUFXQSxJQUFNLGtDQUFhO0FBQ3hCLFFBQU0sWUFEa0I7QUFFeEIsZUFBYSwyQkFGVyxFQUVrQjtBQUMxQyw2QkFId0I7QUFJeEIsV0FBUztBQUFBLFdBQU0seUJBQU47QUFBQTtBQUplLENBQW5CIiwiZmlsZSI6ImNvd29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyYXBoUUxTdHJpbmcsIEdyYXBoUUxOb25OdWxsLCBHcmFwaFFMSW50IH0gZnJvbSAnZ3JhcGhxbCc7XG5pbXBvcnQgeyBjb3dvcmtUeXBlLCBjb3dvcmtMaXN0VHlwZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGdldENvd29ya0J5SWQsIGdldENvd29ya0J5TmFtZSwgZ2V0Q293b3JrcywgZ2V0Q293b3JrVGhhdENvbnRhaW5zTmFtZSB9IGZyb20gJy4uL21vZGVscyc7XG5cbmV4cG9ydCBjb25zdCBjb3dvcmtCeU5hbWUgPSB7XG4gIG5hbWU6ICdjb3dvcmtCeU5hbWUnLFxuICB0eXBlOiBjb3dvcmtUeXBlLFxuICBhcmdzOiB7XG4gICAgbmFtZToge1xuICAgICAgdHlwZTogbmV3IEdyYXBoUUxOb25OdWxsKEdyYXBoUUxTdHJpbmcpLFxuICAgICAgZGVzY3JpcHRpb246ICdDb3dvcmsgRGlzcGxheSBOYW1lJyxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiAocm9vdCwgeyBuYW1lIH0pID0+IGdldENvd29ya0J5TmFtZShuYW1lKSxcbn07XG5cblxuZXhwb3J0IGNvbnN0IGNvd29ya0J5TmFtZUNvbnRhaW5pbmdUZXh0ID0ge1xuICBuYW1lOiAnY293b3JrQnlOYW1lJyxcbiAgdHlwZTogY293b3JrVHlwZSxcbiAgYXJnczoge1xuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IG5ldyBHcmFwaFFMTm9uTnVsbChHcmFwaFFMU3RyaW5nKSxcbiAgICAgIGRlc2NyaXB0aW9uOiAnQ293b3JrIERpc3BsYXkgTmFtZScsXG4gICAgfSxcbiAgfSxcbiAgcmVzb2x2ZTogKHJvb3QsIHsgbmFtZSB9KSA9PiBnZXRDb3dvcmtUaGF0Q29udGFpbnNOYW1lKG5hbWUpLFxufTtcblxuXG5leHBvcnQgY29uc3QgY293b3JrQnlJZCA9IHtcbiAgdHlwZTogY293b3JrVHlwZSxcbiAgYXJnczoge1xuICAgIGlkOiB7XG4gICAgICB0eXBlOiBuZXcgR3JhcGhRTE5vbk51bGwoR3JhcGhRTEludCksXG4gICAgICBkZXNjcmlwdGlvbjogJ1VuaXF1ZSBDb3dvcmsgSUQnLFxuICAgIH0sXG4gIH0sXG4gIHJlc29sdmU6IChyb290LCB7IGlkIH0pID0+IGdldENvd29ya0J5SWQoaWQpLFxufTtcblxuZXhwb3J0IGNvbnN0IGNvd29ya0xpc3QgPSB7XG4gIG5hbWU6ICdjb3dvcmtMaXN0JyxcbiAgZGVzY3JpcHRpb246ICdSZXR1cm5zIGEgbGlzdCBvZiBjb3dvcmtzJywgLy8gVE9ETzogZGVmaW5lIHRoaXMgcXVlcnkgKEdlb2xvY2F0ZWQ/IGJ5IHBvcHVsYXJpdHk/KVxuICB0eXBlOiBjb3dvcmtMaXN0VHlwZSxcbiAgcmVzb2x2ZTogKCkgPT4gZ2V0Q293b3JrcygpLFxufTtcbiJdfQ==
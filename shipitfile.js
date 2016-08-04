var shipitDeploy = require('shipit-deploy');
var chalk = require('chalk');
var CWD = '/home/travis/build/fforres/CoworksAPI';

module.exports = function (shipit) {
  shipitDeploy(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/coworks_api',
      deployTo: '/var/www',
      repositoryUrl: 'git@github.com:fforres/CoworksAPI.git',
      branch: 'master',
      ignores: ['.git', 'node_modules'],
      deleteOnRollback: true,
      key: '/tmp/deploy_rsa_new',
      keepReleases: 2,
      rsync: ['--del'],
    },
    production: {
      servers: [{
        host: 'api.coworks.cl',
        user: 'deploy',
      }],
    },
    development: {
      servers: 'localhost',
    },
  });
};

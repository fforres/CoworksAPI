const shipitDeploy = require('shipit-deploy');
module.exports = function (shipit) {
  shipitDeploy(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/coworks_api',
      deployTo: '/var/www/coworks_api',
      repositoryUrl: 'git@github.com:fforres/CoworksAPI.git',
      branch: 'master',
      ignores: ['.git', 'node_modules'],
      deleteOnRollback: true,
      key: './deploy_rsa',
      keepReleases: 2,
      rsync: ['--del'],
    },
    production: {
      servers: [{
        hosts: '200.86.6.132',
        user: 'deploy',
      }],
    },
    development: {
      servers: 'localhost',
    },
  });
  shipit.task('install', function () {
    return shipit.remote('npm install');
  });
  shipit.task('build', ['install'], function () {
    return shipit.remote('npm run build');
  });
  shipit.task('start', ['build'], function () {
    return shipit.remote('NODE_ENV=production && node dist');
  });
};

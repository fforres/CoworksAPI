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
      key: 'deploy_rsa',
      keepReleases: 2,
      rsync: ['--del'],
    },
    production: {
      servers: [{
        host: '200.86.6.132',
        user: 'deploy',
      }],
    },
    development: {
      servers: 'localhost',
    },
  });
  shipit.task('shipit_install', function () {
    return shipit.remote('cd /var/www/coworks_api && npm install');
  });
  shipit.task('shipit_build', ['shipit_install'], function () {
    return shipit.remote('cd /var/www/coworks_api && npm run build');
  });
  shipit.task('shipit_start', ['shipit_build'], function () {
    return shipit.remote('cd /var/www/coworks_api && NODE_ENV=production && node dist');
  });
};

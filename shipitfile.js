var shipitDeploy = require('shipit-deploy');
var chalk = require('chalk');
var CWD = '/home/travis/build/fforres/CoworksAPI';

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
  shipit.task('build', function () {
    shipit.log(chalk.green('Building Production/Dist code (npm run build)'));
    return shipit.local('npm run build', {cwd: CWD});
  });
  shipit.task('copy_source', ['build'], function () {
    shipit.log(chalk.green('Copying sourcecode to: ' + shipit.config.deployTo));
    shipit.remoteCopy(CWD, shipit.config.deployTo)
  })
  shipit.task('remote_install', ['copy_source'], function () {
    shipit.log(chalk.green('Copying sourcecode to: ' + shipit.config.deployTo));
    return shipit.remote('cd /var/www/coworks_api && NODE_ENV=production && npm install');
  });
  shipit.task('start', ['remote_install'], function () {
    return shipit.remote('cd /var/www/coworks_api && NODE_ENV=production && node dist');
  });
};

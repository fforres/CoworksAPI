/*eslint-disable*/
/*eslint-enable*/
var shipitDeploy = require('shipit-deploy');
var chalk = require('chalk');
var CWD = '/home/travis/build/fforres/CoworksAPI';

function shipit(shipit) {
  shipitDeploy(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/coworks_api',
      deployTo: '/var/www',
      repositoryUrl: 'https://github.com/fforres/CoworksAPI.git',
      branch: 'master',
      ignores: ['.git', 'node_modules'],
      deleteOnRollback: true,
      key: '/tmp/deploy_rsa_new',
      keepReleases: 3,
      rsync: ['--del'],
    },
    production: {
      servers: [{
        host: 'api.coworks.cl',
        user: 'root',
      }],
    },
    development: {
      servers: 'localhost',
    },
  });

  // LISTEN TO EVENTS!
  shipit.on('deploy', function() {
    shipit.log(chalk.green('DEPLOY STARTED'));
  });
  shipit.on('published', function() {
    shipit.start('post-publish');
  });

  // CUSTOM TASKS!
  shipit.blTask('install', function() {
    shipit.log(chalk.green('Installing Dependencies: ' + shipit.config.deployTo + '/current'));
    return shipit.remote('NODE_ENV=production && npm --production --prefix ' + shipit.config.deployTo + '/current' + ' install ' + shipit.config.deployTo + '/current');
  });
  shipit.blTask('run', function() {
    shipit.log(chalk.green('Running proyect'));
    return shipit.remote('pm2 startOrRestart ' + shipit.config.deployTo + '/current/pm2_ecosystem.json');
  })
  shipit.blTask('cleanup', function() {
    shipit.log(chalk.green('Cleaning up some small things (i.e. Removing key)'));
    return shipit.remote('rm ' + shipit.config.deployTo + '/current/deploy_rsa_new*');
  });
  shipit.task('post-publish', ['install', 'run', 'cleanup'], function() {
    shipit.log(chalk.green('Building / running finished on production'));
  });
};

module.exports = shipit;

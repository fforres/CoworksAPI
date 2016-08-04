var shipitDeploy = require('shipit-deploy');
var chalk = require('chalk');
var CWD = '/home/travis/build/fforres/CoworksAPI';

module.exports = function (shipit) {
  console.log(shipit);
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
        user: 'deploy',
      }],
    },
    development: {
      servers: 'localhost',
    },
  });

  // Events!
  shipit.on("deploy", function() {
    shipit.log(chalk.green('DEPLOY STARTED'));
  });
  shipit.on("published", function() {
    shipit.start('post-publish');
  });


  shipit.blTask('install', function() {
    shipit.log(chalk.green('Installing Dependencies: ' + shipit.config.deployTo + '/current'));
    return shipit.remote('NODE_ENV=production && npm --production --prefix ' + shipit.config.deployTo + '/current' + ' install ' + shipit.config.deployTo + '/current')
  })
  shipit.blTask('run', function() {
    shipit.log(chalk.green('Running proyect'));
    return shipit.remote('pm2 startOrRestart ' + shipit.config.deployTo + '/current/pm2_ecosystem.json' )
  })
  shipit.task('post-publish', ['install','run'], function() {
    shipit.log(chalk.green('Deploy Finally finished'));
  })

  // shipit.task('build', function () {
  //   shipit.log(chalk.green('Building Production/Dist code (npm run build)'));
  //   return shipit.local('npm run build', {cwd: CWD});
  // });
  // shipit.task('copy_source', ['build'], function () {
  //   shipit.log(chalk.green('Copying sourcecode to: ' + shipit.config.deployTo));
  //   shipit.remoteCopy(CWD, shipit.config.deployTo)
  // })
  // shipit.task('remote_install', ['copy_source'], function () {
  //   shipit.log(chalk.green('Installing packages'));
  //   return shipit.remote('NODE_ENV=production && npm install', {cwd: shipit.config.deployTo})
  //   .then(() => { shipit.log(chalk.green('Installing packages')) });
  // });
  // shipit.task('start', ['remote_install'], function () {
  //   shipit.log(chalk.green('Running production!'));
  //   return shipit.remote('NODE_ENV=production && node dist', {cwd: shipit.config.deployTo});
  // });
};

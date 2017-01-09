import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';

import 'font-awesome/css/font-awesome.css';

import repoModule from './reposModule';
import './app.scss';


angular.module('app', [
  uirouter,
  ngSanitize,
  repoModule]).config(($locationProvider) => {
    'ngInject';

    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    }).hashPrefix('!');
  });
angular.bootstrap(document, ['app']);

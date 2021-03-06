import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import ngAnimate from 'angular-animate';
import toastr from 'angular-toastr';
import 'font-awesome/css/font-awesome.css';
import 'angular-toastr/dist/angular-toastr.css';

import repoModule from './reposModule';
import './app.scss';


angular.module('app', [
  uirouter,
  ngSanitize,
  ngAnimate,
  toastr,
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

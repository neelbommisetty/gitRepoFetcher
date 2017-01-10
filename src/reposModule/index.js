import angular from 'angular';
import HomeController from './ctrl.home';
import ReposController from './ctrl.repos';
import RepoController from './ctrl.repo';
import RepoService from './service.repos';
import routes from './routes.repos';

export default angular.module('app.repos', [])
  .config(routes)
  .controller('homeController', HomeController)
  .controller('reposController', ReposController)
  .controller('repoController', RepoController)
  .factory('repos', RepoService.repoFactory)
  .name;

routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  const home = {
    name: 'home',
    url: '/',
    views: {
      Root: {
        template: require('./home.html'),
        controller: 'homeController',
        controllerAs: 'home',
      },
    },
  };
  const userRepos = {
    name: 'repos',
    url: '/:username',
    views: {
      Root: {
        template: require('./repos.html'),
        controller: 'reposController',
        controllerAs: 'repos',
      },
    },
  };
  const repoPage = {
    name: 'repoPage',
    url: '/:username/:reponame',
    views: {
      Root: {
        template: require('./repoPage.html'),
        controller: 'repoController',
        controllerAs: 'repo',
      },
    },
  };


  $stateProvider
    .state(home)
    .state(userRepos)
    .state(repoPage);
}

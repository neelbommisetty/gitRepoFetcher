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
    url: '/:username/repos',
    views: {
      Root: {
        template: require('./repos.html'),
        controller: 'reposController',
        controllerAs: 'repos',
      },
    },
  };


  $stateProvider
    .state(home)
    .state(userRepos);
}

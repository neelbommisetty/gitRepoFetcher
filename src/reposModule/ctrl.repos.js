export default class ReposController {
  constructor($stateParams, repos) {
    this.username = $stateParams.username;
    repos.getRepos(this.username).then((res) => {
      this.repos = res.data;
    });
  }
}

ReposController.$inject = ['$stateParams', 'repos'];

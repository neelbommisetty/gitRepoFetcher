export default class RepoController {
  constructor($stateParams, repos) {
    repos.getRepoReadme($stateParams.username, $stateParams.reponame).then((res) => {
      this.readme = repos.getHtmlFromMd(res.data);
    });
  }
}

RepoController.$inject = ['$stateParams', 'repos'];

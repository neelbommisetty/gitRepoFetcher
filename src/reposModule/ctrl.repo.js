export default class RepoController {
  constructor($stateParams, repos, toastr) {
    this.username = $stateParams.username;
    this.reponame = $stateParams.reponame;
    repos.getRepoReadme($stateParams.username, $stateParams.reponame)
    .then((res) => {
      this.readme = repos.getHtmlFromMd(res.data);
    })
    .catch((res) => {
      if (res.status === 404) {
        toastr.error('Readme Does not exist for this repository', 'Error Occurred');
      } else {
        toastr.error('Error Fetching Readme! Please try again.', 'Error Occurred');
      }
    });
  }
}

RepoController.$inject = ['$stateParams', 'repos', 'toastr'];

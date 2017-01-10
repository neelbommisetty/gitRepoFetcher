export default class ReposController {
  constructor($stateParams, repos, toastr) {
    this.username = $stateParams.username;
    this.toastr = toastr;
    repos.getRepos(this.username).then((res) => {
      this.repos = res.data;
    })
    .catch((res) => {
      if (res.status === 404) {
        this.toastr.error('Please enter a valid username', `User ${this.username} does not exist`);
      } else {
        this.toastr.error(`Error Fetching ${this.username}'s Repositories`, 'Error Occurred');
      }
    });
  }
}

ReposController.$inject = ['$stateParams', 'repos', 'toastr'];

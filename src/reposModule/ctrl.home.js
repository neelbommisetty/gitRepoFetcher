export default class HomeController {
  constructor($state, toastr) {
    this.$state = $state;
    this.toastr = toastr;
  }
  getRepos(e) {
    e.preventDefault();
    if (!this.username) {
      this.toastr.error('Please Enter A Valid Username', 'Invalid Input');
      return;
    }
    this.$state.go('repos', {
      username: this.username,
    });
  }
}

HomeController.$inject = ['$state', 'toastr'];

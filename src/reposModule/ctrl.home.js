export default class HomeController {
  constructor($state) {
    this.$state = $state;
  }
  getRepos(e) {
    e.preventDefault();
    this.$state.go('repos', {
      username: this.username || '',
    });
  }
}

HomeController.$inject = ['$state'];

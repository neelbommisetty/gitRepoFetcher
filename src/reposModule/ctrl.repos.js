export default class ReposController {
  constructor($stateParams) {
    this.username = $stateParams.username;
  }
}

ReposController.$inject = ['$stateParams'];


import markdownIt from 'markdown-it';


export default class RepoService {
  constructor($http) {
    this.http = $http;
    this.markdownParser = markdownIt({
      html: true,
      linkify: true,
      typographer: true,
    });
  }
  getRepos(username) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }

  getRepoReadme(username, repo) {
    return this.http({
      method: 'GET',
      url: `https://api.github.com/repos/${username}/${repo}/readme`,
      headers: {
        accept: 'application/vnd.github.VERSION.raw',
      },
    });
  }
  getHtmlFromMd(content) {
    return this.markdownParser.render(content);
  }
  static repoFactory($http) {
    return new RepoService($http);
  }
}

RepoService.repoFactory.$inject = ['$http'];

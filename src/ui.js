class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.repos = document.getElementById("repos");
  }

  // 프로필을 보여주는 메소드
  showProfile(user) {
    this.profile.innerHTML = `
          <div class="card">
              <div class="row">
                  <div class="col-md-3">
                      <img class="img-fluid mb-2" src="${user.avatar_url}">
                      <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                  </div>
                  <div class="col-md-9">
                      <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                      <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                      <span class="badge badge-success">Followers: ${user.followers}</span>
                      <span class="badge badge-info">Following: ${user.following}</span>
                      <br><br>
                      <ul class="list-group">
                          <li class="list-group-item">Company: ${user.company}</li>
                          <li class="list-group-item">Website/Blog: ${user.blog}</li>
                          <li class="list-group-item">Location: ${user.location}</li>
                          <li class="list-group-item">Member Since: ${user.created_at}</li>
                      </ul>
                  </div>
              </div>
          </div>
      `;
  }

  // 레포지토리를 보여주는 메소드
  showRepos(repos) {
    let output = "";

    repos.forEach((repo) => {
      output += `
              <div class="card card-body mb-2">
                  <div class="row">
                      <div class="col-md-6">
                          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                      </div>
                      <div class="col-md-6">
                          <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                          <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                          <span class="badge badge-success">Forks: ${repo.forks_count}</span>
                      </div>
                  </div>
              </div>
          `;
    });

    // 레포지토리 출력
    this.repos.innerHTML = output;
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}

class GitHub {
  constructor() {
    this.client_id = "YOUR_CLIENT_ID"; // GitHub OAuth에서 제공받은 클라이언트 ID
    this.client_secret = "YOUR_CLIENT_SECRET"; // GitHub OAuth에서 제공받은 클라이언트 시크릿
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=5&sort=created: asc&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}

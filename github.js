class GitHub {
  constructor(){
    this.client_id = '61cbae7bb390ef89148f';
    this.client_secret = '86a57d09a378e2f019a9876c50893bd281230f74';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repo = await repoResponse.json()

    return {
      profile,
      repo
    }
  }
}
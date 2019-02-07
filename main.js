const github = new GitHub;
const ui = new UI;

const search = document.querySelector('#searchUser');

search.addEventListener('keyup', (e) => {
  const searchValue = e.target.value;
  if (searchValue !== '') {
    // make an http call to get the data
    github.getUser(searchValue).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show user not found
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repo);
      }
    })
  } else {
    ui.clearProfile()
  }
})
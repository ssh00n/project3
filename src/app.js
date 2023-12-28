const github = new GitHub();
const ui = new UI();

// 검색 입력 필드 이벤트 리스너
document.getElementById("searchUser").addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    // GitHub API 호출
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // 유저를 찾을 수 없음
      } else {
        // 프로필과 레포지토리 보여주기
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});

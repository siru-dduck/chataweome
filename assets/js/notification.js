const chatBox = document.querySelector(".chatBox");
const userNumBox = document.querySelector("span.userNum");

const notify = (message) => {
  const msgBox = document.createElement("div");
  msgBox.classList.add("chatBox__notifyMsg");
  msgBox.innerText = message;
  chatBox.append(msgBox);
  setTimeout(() => removeNoifyMsg(msgBox), 3000);
};

const removeNoifyMsg = (msgBox) => {
  chatBox.removeChild(msgBox);
};

const updateUserNum = (userNum) => {
  userNumBox.innerText = `(${userNum})`;
};

export const handleInitChat = ({ userNum }) => {
  updateUserNum(userNum);
};

export const handleNewUser = ({ nickname, userNum }) => {
  if (nickname && nickname.length === 0) return;
  notify(`${nickname}님이 입장했습니다.`);
  updateUserNum(userNum);
};

export const handleDisconnected = ({ nickname, userNum }) => {
  if (nickname && nickname.length === 0) return;
  notify(`${nickname}님이 퇴장했습니다.`);
  updateUserNum(userNum);
};

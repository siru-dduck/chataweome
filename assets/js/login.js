import { initSocket } from "./socket";

// 상수 및 변수 선언
const loginBox = document.querySelector(".loginBox");
const chatBox = document.querySelector(".chatBox");
const loginForm = document.querySelector(".loginBox > .nickname-form ");
const loginInput = document.querySelector(
  '.nickname-form > input[name="nickname"]'
);
const nickname = localStorage.getItem("nickname");

const validInputValue = (value) => {
  if (value === "" || value.length === 0) return false;
  return true;
};

const hideLoginBox = () => {
  loginBox.classList.add("hidden");
  loginBox.classList.remove("loginBox"); // css 케스케이딩으로 인한 .loginBox 제거
};

const showChatBox = () => {
  chatBox.classList.remove("hidden");
};

const openChat = (nickname) => {
  initSocket(nickname);
  hideLoginBox();
  showChatBox();
};

const handleSubmitLogin = (e) => {
  e.preventDefault();
  const inputValue = loginInput.value;
  if (validInputValue(inputValue)) {
    localStorage.setItem("nickname", inputValue);
    nickname = localStorage.getItem("nickname");
    openChat(nickname);
  } else alert("닉네임을 올바르게 입력해주세요.");
  inputValue = "";
};

// 함수선언
const checkLogin = () => {
  if (nickname && nickname.length > 0) return true;
  return false;
};

// 초기화 세팅
if (checkLogin()) {
  openChat(nickname);
} else {
  loginForm.addEventListener("submit", handleSubmitLogin);
}

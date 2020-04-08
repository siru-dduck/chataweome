import { initSocket } from "./socket";

// 상수 및 변수 선언
const loginBox = document.querySelector(".loginBox");
const chatBox = document.querySelector(".chatBox");
const loginForm = document.querySelector(".loginBox > .loginBox__form ");
const loginInput = document.querySelector(
  '.loginBox__form > input[name="nickname"]'
);
let nickname = localStorage.getItem("nickname");

const validInputValue = (value) => {
  if (value === "" || value.length === 0) return false;
  return true;
};

const hideLoginBox = () => {
  loginBox.parentElement.classList.add("hidden");
};

const showChatBox = () => {
  chatBox.parentElement.classList.remove("hidden");
};

const openChat = (nickname) => {
  initSocket(nickname);
  hideLoginBox();
  showChatBox();
};

const handleSubmitLogin = (e) => {
  e.preventDefault();
  if (checkLogin()) return;

  const inputValue = loginInput.value;
  if (validInputValue(inputValue)) {
    localStorage.setItem("nickname", inputValue);
    nickname = inputValue;
    openChat(nickname);
  } else alert("닉네임을 올바르게 입력해주세요.");
  loginInput.value = "";
};

// 함수선언
const checkLogin = () => {
  if (nickname && nickname.length > 0) return true;
  return false;
};

// 초기화 세팅
if (checkLogin()) {
  openChat(nickname);
}

loginForm.addEventListener("submit", handleSubmitLogin);

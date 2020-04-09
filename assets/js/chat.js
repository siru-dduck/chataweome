import { getSocket } from "./socket";

const chatList = document.querySelector("ul.chatBox__contents");
const chatForm = document.querySelector("form.chatBox__form");
const chatText = document.querySelector("textarea[name='chatContent']");

const appendMsg = ({ nickname, message }) => {
  const li = document.createElement("li");
  li.classList.add("chatList", nickname ? "other" : "self");
  li.innerHTML = `
    ${
      nickname
        ? '<div class="avatar-icon"><span><i class="fas fa-user"></i></span></div>'
        : ""
    }
    <div class="chatList__column">${
      nickname ? `<span class="nickname">${nickname}</span>` : ""
    }<div class="chat_msg">${message}</div></div>
    <span class="sendTime">오후 1:05</span>
  `;
  chatList.append(li);
};

const handleChatSubmit = (event) => {
  event.preventDefault();
  const message = chatText.value;
  if (!message || message.length === 0) return;
  getSocket().emit("sendMsg", { message });
  chatText.value = "";
  appendMsg({ message });
};

export const handleNewMsg = ({ nickname, message }) => {
  appendMsg({ nickname, message });
};

if (chatForm) {
  chatForm.addEventListener("submit", handleChatSubmit);
}

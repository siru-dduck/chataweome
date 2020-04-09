const chatBox = document.querySelector(".chatBox");
const opacityRange = document.querySelector(
  ".chatFunctions__column > input[type='range']"
);

const handleDragOpacity = (event) => {
  const { target } = event;
  chatBox.style = `opacity:${target.value}`;
};

if (opacityRange) {
  opacityRange.addEventListener("input", handleDragOpacity);
}

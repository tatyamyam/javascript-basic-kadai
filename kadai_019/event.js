const changeText = document.getElementById("text");
const pushBtn = document.getElementById("btn");

pushBtn.addEventListener("click", () => {
  changeText.textContent = "ボタンをクリックしました"
});

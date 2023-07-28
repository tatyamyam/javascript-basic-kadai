const changeText = document.getElementById("text");
const pushBtn = document.getElementById("btn");

pushBtn.addEventListener("click", () => {
  setTimeout(() => {
    changeText.textContent = "ボタンをクリックしました";
  }, 2000);
});

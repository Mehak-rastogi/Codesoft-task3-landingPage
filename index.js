let icon = document.querySelector(".icon");
let sidebar = document.querySelector(".nav2");
icon.addEventListener("click", function () {
  sidebar.style.display = "flex";
});
const cut = document.querySelector(".icon1");
cut.addEventListener("click", function () {
  sidebar.style.display = "none";
});

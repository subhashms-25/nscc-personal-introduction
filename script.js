const themeButton = document.getElementById("theme-button");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeButton.textContent = "Light Mode";
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeButton.textContent = "Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    themeButton.textContent = "Dark Mode";
  }
});

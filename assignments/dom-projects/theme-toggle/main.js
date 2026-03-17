const btn = document.getElementById("toggleButton");
const heading = document.getElementById("heading");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.className === "dark") {
    heading.innerText = "Light Mode Toggle";
    btn.innerText = "Toggle Light Mode";
  } else {
    heading.innerText = "Dark Mode Toggle";
    btn.innerText = "Toggle Dark Mode";
  }
});

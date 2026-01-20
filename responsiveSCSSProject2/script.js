let body= document.querySelector("body");
let toggleButton = document.querySelector(".dark-mode-toggle");

const THEME_KEY = "theme"; // "dark" | "light"

const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === "dark") {
  body.classList.add("dark-mode");
} else {
  body.classList.remove("dark-mode");
}

toggleButton.addEventListener("click",()=>{
    body.classList.toggle("dark-mode");
     
    const isDark = body.classList.contains("dark-mode");
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
})


// localStorage.clear();
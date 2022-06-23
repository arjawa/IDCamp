const navbarButton = document.querySelector(".navbar-toggler");
const articleEven = document.querySelectorAll("#content > :nth-child(even)");
const closeAlertButton = document.querySelector(".alert-close");
const loadCounter = document.querySelector("#loadCounter");

// Navbar handler
navbarButton.addEventListener("click", () => {
  document.querySelector(".navbar-collapse").classList.toggle("collapse");
  navbarButton.classList.toggle("active");
});

// Article layouting
articleEven.forEach(article => {
  article.classList.add("row-reverse");
});

// Alert handler
closeAlertButton.addEventListener("click", () => {
  document.querySelector(".alert").style.display = "none";
});

// LocalStorage data handler
window.onload = () => {
  if (typeof(Storage) !== 'undefined') {
  // Browser mendukung sessionStorage/localStorage.
  let savedCount = Number(localStorage.getItem("loadCount"));
    if (savedCount && savedCount >= 1 ) {
      loadCounter.innerHTML = `<span>This page has been loaded ${savedCount + 1} times.</span>`;
      localStorage.loadCount = savedCount + 1;
    } else {
      document.querySelector(".alert").style.display = "none";
      localStorage.loadCount = 1;
    }
  } else {
    // Browser tidak mendukung sessionStorage/LocalStorage
    alert("Please consider to use another browser.");
  }
  
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 5000);
};
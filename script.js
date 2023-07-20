function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("DOMContentLoaded", function() {
  // Scroll to the desktop-nav section on page load
  const desktopNavSection = document.getElementById("desktop-nav");
  desktopNavSection.scrollIntoView();
});

window.addEventListener("load", function() {
  const preloader = document.querySelector(".preloader");
  const words = ["&#x2022;Welcome", "&#x2022;To", "&#x2022;My", "&#x2022;Portfolio."];
  const loaderInner = document.querySelector(".loader-inner");

  function showNextWord(index) {
    if (index < words.length) {
      loaderInner.innerHTML = `<span class="word">${words[index]}</span>`;
      setTimeout(function() {
        showNextWord(index + 1);
      }, 500);
    } else {
      // Start exit animation and remove the preloader element from the DOM
      preloader.classList.add("hide");
      setTimeout(function() {
        preloader.remove(); // Remove the preloader element from the DOM
      }, 500); // Updated delay to match the exit animation duration
    }
  }

  // Adjust the delay below (in milliseconds) to change the time before the website pops up
  setTimeout(function() {
    showNextWord(0);
  }, 500); // Updated delay to 2000ms (2 seconds)
});

document.getElementById("logo").addEventListener("click", function() {
  // Add your desired effect here
  this.classList.add("logo-effect");
  
  // Adjust the delay below (in milliseconds) to change the time before page reloads after the logo click
  setTimeout(() => {
    location.reload();
  }, 300); // Updated delay to 2500ms (2.5 seconds)
});



// Description: Main script for the website

// Function to handle the resizing of the window
function handleResize() {
  if (window.innerWidth <= 750) {
    try {
      document.querySelector("li[name='mypage-mobile']").style.display =
        "block"; // Show the option for the mypage option on the menu on mobile (if it exists)
    } catch (error) {
      // Do nothing
    }
    document.querySelector("div.navicon").style.display = "none"; // Hide the hamburger menu on mobile
    document.querySelector("div.header ul.menu").classList.remove("show"); // Remove the show class from the menu
    document.querySelector("div.mobile").style.display = "block"; // Show the mobile menu
  } else {
    try {
      document.querySelector("li[name='mypage-mobile']").style.display = "none"; // Hide the option for the mypage option on the menu on desktop (if it exists)
    } catch (error) {
      // Do nothing
    }
    document.querySelector("div.navicon").style.display = "block"; // Show the hamburger menu on desktop
    document.querySelector("div.mobile").style.display = "none"; // Hide the mobile menu
  }
}

// Toggle the show class on the menu when clicking on the hamburger menu
document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector("div.header ul.menu").classList.toggle("show");
  });

// Close the menu when clicking outside of it
window.addEventListener("click", function (event) {
  if (!event.target.matches(".hamburger-menu") && window.innerWidth <= 751) {
    document.querySelector("div.header ul.menu").classList.remove("show");
  }
});

// Handle the resizing of the window when the window is resized
window.addEventListener("resize", function () {
  handleResize();
});

// Handle the resizing of the window when the page is loaded
handleResize();

// Function to handle the theme switching
function setTheme(theme) {
  const root = document.documentElement;
  document.cookie = "theme=" + theme;
  location.reload();
}

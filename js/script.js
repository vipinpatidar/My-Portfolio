// Aos
AOS.init();

// /////////////////////////////////////
// function myFunction() {
//   let element = document.body;
//   element.classList.toggle("dark");
// }
// /////////////////////////////////
class Typewriter {
  constructor(txtElement, words, wait = 2500) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.isDeleting = false;
    this.type();
  }

  type() {
    const currentWord = this.words[this.wordIndex % this.words.length];
    this.txt = this.isDeleting
      ? currentWord.substring(0, this.txt.length - 1)
      : currentWord.substring(0, this.txt.length + 1);

    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    let typeSpeed = this.isDeleting ? 150 : 300;

    if (!this.isDeleting && this.txt === currentWord) {
      typeSpeed = this.wait;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.wordIndex++;
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// initialize on DoM load
document.addEventListener("DOMContentLoaded", init);

// initialize App

function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  // inti TypeWriter
  new Typewriter(txtElement, words, wait);
}

// /////////////////////////////////// Menu.js ////////////////////////////////////////////////////////////////////////////

//Select Dom items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item");
const clickLinks = document.querySelectorAll(".clicked-link");

// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  showMenu = !showMenu;
  menuBtn.classList.toggle("close", showMenu);
  menu.classList.toggle("show", showMenu);
  menuNav.classList.toggle("show", showMenu);
  menuBranding.classList.toggle("show", showMenu);
  document.body.style.overflow = showMenu ? "hidden" : "visible";
  navItems.forEach((item) => item.classList.toggle("show", showMenu));
}

// Handle link color change on click
clickLinks.forEach((item) => {
  item.addEventListener("click", () => {
    // Reset all link colors
    clickLinks.forEach((link) => {
      if (link.children[0]) {
        link.children[0].style.color = "white";
      }
    });

    // Highlight the active link after hash changes
    setTimeout(() => {
      const activeLinks = document.querySelectorAll(
        `[href="${window.location.hash}"]`
      );
      activeLinks.forEach((link) => {
        link.style.color = "#20c997";
      });
    }, 0);

    // Close menu if open
    if (item.classList.contains("show")) {
      toggleMenu();
    }
  });
});

// Highlight active link on page load
window.onload = function () {
  if (window.location.hash) {
    window.location = window.location.href;
  }
  setTimeout(() => {
    const activeLinks = document.querySelectorAll(
      `[href="${window.location.hash}"]`
    );
    activeLinks.forEach((link) => {
      link.style.color = "#20c997";
    });
  }, 0);
};

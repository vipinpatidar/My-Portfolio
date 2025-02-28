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
    this.txt = " "; //runing word in area
    this.wordIndex = 0; //which word we are on accroding to formatted array
    this.wait = parseInt(wait, 10); // 10 base value
    this.type(); // a method
    this.isDeleting = false; // when it go back where isdeleting = true
  }

  type() {
    // Current index of word
    const Current = this.wordIndex % this.words.length;

    // console.log(this.wordIndex , this.words.length , Current)

    // Get full text fo current index word
    const fullText = this.words[Current];
    //  console.log(fullText)- developer

    // check if deleting
    if (this.isDeleting) {
      // if thid deleting the remove char
      this.txt = fullText.substring(0, this.txt.length - 1); // subtract -1

      // console.log(this.txt , fullText , this.txt.length );
    } else {
      //if it is not deleting Add char
      this.txt = fullText.substring(0, this.txt.length + 1); //adding +1
    }

    //  get output of this.txt or adding in to dom span
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Type speed , it is vary according to situation
    let typeSpeed = 300;

    // Deleteing check and mank it faster
    if (this.isDeleting) {
      typeSpeed /= 2; // increasing deleting speed typespeed/2
    }

    //  If word is complete by matching with this.txt and fullText
    if (!this.isDeleting && this.txt === fullText) {
      // make pause at end
      typeSpeed = this.wait;
      // set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      //this is the condition where our all word get deleted then we change the new word
      this.isDeleting = false;
      // move on next word
      this.wordIndex++;
      // pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed); // for continuous processing of delete and type of data- words
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

// Set Initial State of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    document.body.style.overflow = "hidden";
    navItems.forEach((e) => {
      e.classList.add("show");
    });
    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    document.body.style.overflow = "visible";
    navItems.forEach((e) => {
      e.classList.remove("show");
    });

    //set menu state
    showMenu = false;
  }
}

clickLinks.forEach((item, i) => {
  item.addEventListener("click", function (e) {
    clickLinks.forEach((link) => {
      link.children[0].style.color = "white";
    });
    // item.children[0].style.color = "#20c997";
    setTimeout(() => {
      const x = document.querySelectorAll(`[href="${window.location.hash}"]`);
      x.forEach((link) => {
        link.style.color = "#20c997";
      });
    }, 0);
    item.classList.contains("show") ? toggleMenu() : "";
    // toggleMenu();
  });
});

window.onload = function () {
  // window.location = window.location.href;
  window.location.hash ? (window.location = window.location.href) : "";
  // clickLinks.forEach((link) => {
  //   link.children[0].style.color = "white";
  // });
  setTimeout(() => {
    const x = document.querySelectorAll(`[href="${window.location.hash}"]`);
    x.forEach((link) => {
      link.style.color = "#20c997";
    });
  }, 0);
};

filterSelection("all");
function filterSelection(btnArea) {
  let column = document.getElementsByClassName("column");

  if (btnArea === "all") btnArea = "";
  for (let i = 0; i < column.length; i++) {
    removeClass(column[i], "showPro");
    if (column[i].className.indexOf(btnArea) > -1)
      addClass(column[i], "showPro");
  }
}

function addClass(element, name) {
  let arrayColumn = element.className.split(" ");
  let arrayClass = name.split(" ");

  arrayClass.forEach((arrayTwo) => {
    if (arrayColumn.indexOf(arrayTwo) == -1) {
      element.className += " " + arrayTwo;
    }
  });
}

function removeClass(element, name) {
  let arrayOne = element.className.split(" ");
  let arrayTwo = name.split(" ");

  for (let i = 0; i < arrayTwo.length; i++) {
    while (arrayOne.indexOf(arrayTwo[i]) > -1) {
      arrayOne.splice(arrayOne.indexOf(arrayTwo[i]), 1);
    }
  }
  element.className = arrayOne.join(" ");
}

// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("myBtnContainer");
let btns = btnContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
// Get the button that opens the modal
let btn = document.querySelectorAll(".myBtn");
btn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const btnId = btn.dataset.btn;
    document.querySelector(`[data-modal="${btnId}"]`).classList.add("showPro");
  });
});

let span = document.querySelectorAll(".close");
// console.log(span);
span.forEach((X) => {
  X.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.classList.remove("showPro");
  });
});

let show = document.querySelector(".showPro");
window.addEventListener("click", function (event) {
  event.target.classList.remove("showPro");
  // console.log(event.target);
});

// window.onclick = function (event) {
//   if (event.target == show) {
//     show.style.display = "none";
//   }
// };
// //////////////////////////////////// top button //////////////////////////////////////

let scrollBtn = document.querySelector("#myBtnPort");

// window.addEventListener("onscroll", () => {
//   scrollUp();
//   // goOnTop();
//   console.log("fdh");
// });
window.onscroll = function () {
  scrollUp();
};
function scrollUp() {
  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    scrollBtn.style.display = "flex";
  } else {
    scrollBtn.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// * Const //////////////////////////////////////////
// changing nav color according to the current page

const sections = document.querySelectorAll("section");

function callBackFun(entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      clickLinks.forEach((link) => {
        link.children[0].style.color = "white";
      });
      const x = document.querySelectorAll(`[href="#${entry.target.id}"]`);
      x.forEach((link) => {
        link.style.color = "#20c997";
      });
    }
  });
}

const options = {
  root: null,
  thorshold: 0,
  rootMargin: "-300px",
};

const observerSection = new IntersectionObserver(callBackFun, options);

sections.forEach((section) => {
  observerSection.observe(section);
});

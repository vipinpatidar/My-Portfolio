// Initial filter display
filterSelection("all");

function filterSelection(category) {
  const columns = document.getElementsByClassName("column");
  const filterCategory = category === "all" ? "" : category;

  Array.from(columns).forEach((column) => {
    column.classList.remove("showPro");
    if (column.className.includes(filterCategory)) {
      column.classList.add("showPro");
    }
  });
}

function updateClassList(element, classNames, action) {
  const elementClasses = element.className.split(" ");
  const targetClasses = classNames.split(" ");

  targetClasses.forEach((className) => {
    const classIndex = elementClasses.indexOf(className);
    if (action === "add" && classIndex === -1) {
      elementClasses.push(className);
    } else if (action === "remove" && classIndex > -1) {
      elementClasses.splice(classIndex, 1);
    }
  });

  element.className = elementClasses.join(" ");
}

// Button active state management
const btnContainer = document.getElementById("myBtnContainer");
const filterButtons = btnContainer.getElementsByClassName("btn");

Array.from(filterButtons).forEach((button) => {
  button.addEventListener("click", function () {
    const currentActive = document.querySelector(".btn.active");
    currentActive.classList.remove("active");
    this.classList.add("active");
  });
});

///////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////
// Get the button that opens the modal
// Modal open buttons
document.querySelectorAll(".myBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const modalId = btn.dataset.btn;
    const modal = document.querySelector(`[data-modal="${modalId}"]`);
    if (modal) {
      modal.classList.add("showPro");
      document.body.style.overflow = "hidden";
    }
  });
});

// Modal close buttons
document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", function (e) {
    const modal = e.target.closest(".showPro");
    if (modal) {
      modal.classList.remove("showPro");
      document.body.style.overflow = "visible";
    }
  });
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  const modals = document.querySelectorAll(".showPro[data-modal]");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.classList.remove("showPro");
      document.body.style.overflow = "visible";
    }
  });
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

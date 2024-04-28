// Multi menu
function setupTabs() {
  document.querySelectorAll(".tabs-button").forEach((button) => {
    button.addEventListener("mousemove", () => {
      const sideBar = button.parentElement;
      const tabsContainer = sideBar.parentElement;
      const tabNumber = button.dataset.forTab;
      const tabToActivate = tabsContainer.querySelector(
        `.tabs-content[data-tab="${tabNumber}"]`
      );

      sideBar.querySelectorAll(".tabs-button").forEach((button) => {
        button.classList.remove("tabs-button--active");
      });
      tabsContainer.querySelectorAll(".tabs-content").forEach((tab) => {
        tab.classList.remove("tabs-content--active");
      });
      button.classList.add("tabs-button--active");
      tabToActivate.classList.add("tabs-content--active");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  setupTabs();
  document.querySelectorAll(".tabs").forEach((tabsConteiner) => {
    tabsContainer.querySelector(".tabs-sidebar .tabs-button").click();
  });
});
// First slider
let prev1 = document.getElementById("prev1");
let next1 = document.getElementById("next1");
let product1 = document.getElementsByClassName("product1");
let product1_page = Math.ceil(product1.length / 3);
let left = 0;
let movePer1 = 33.34;
let maxMove1 = 303;

let right_mover1 = () => {
  left = left + movePer1;
  if (product1 == 1) {
    l = 0;
  }
  for (const i of product1) {
    if (left > maxMove) {
      left = left - movePer1;
    }
    i.style.left = "-" + left + "%";
  }
};
let left_mover1 = () => {
  left = left - movePer1;
  if (left <= 0) {
    left = 0;
  }
  for (const i of product1) {
    if (product1_page > 1) i.style.left = "-" + left + "%";
  }
};
prev1.onclick = () => {
  left_mover1();
};
next1.onclick = () => {
  right_mover1();
};

// Second slider
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let product = document.getElementsByClassName("product");
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 33.34;
let maxMove = 303;
slideWrapper = document.querySelector(".offer-slider");
//Mobile view Tablet
let tablet_view = window.matchMedia("(max-width: 1024px)");
if (tablet_view.matches) {
  movePer = 50.36;
  maxMove = 504;
}
let right_mover = () => {
  l = l + movePer;
  if (product == 1) {
    l = 0;
  }
  for (const i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.left = "-" + l + "%";
  }
};
let left_mover = () => {
  l = l - movePer;
  if (l <= 0) {
    l = 0;
  }
  for (const i of product) {
    if (product_page > 1) i.style.left = "-" + l + "%";
  }
};
prev.onclick = () => {
  left_mover();
};
next.onclick = () => {
  right_mover();
};

//Indicator settings
const section = document.querySelector("#cards");
let indicator = document.createElement("ol"),
  dots = [];
indicator.classList.add("carousel-indicator");
section.append(indicator);

for (let i = 0; i < slides.length; i++) {
  const dot = document.createElement("li");
  dot.setAttribute("data-slide-to", i + 1);
  dot.classList.add("carousel-dot");

  indicator.append(dot);
  if (i == 0) {
    dot.style.opacity = 0.5;
  }
  dots.push(dot);
  dots.forEach((dot) => (dot.style.opacity = 0.5));
  dots[slideIndex - 1].style.opacity = 1;
  next.addEventListener("click", () => {
    if (i == 0) {
      dots.forEach((dot) => (dot.style.opacity = 0.5));
      dots[slideIndex - 1].style.opacity = 1;
    }
  });
  prev.addEventListener("click", () => {
    if (i == 0) {
      dots.forEach((dot) => (dot.style.opacity = 0.5));
      dots[slideIndex - 1].style.opacity = 1;
    }
  });
}
dots.forEach((dot) => {
  dot.addEventListener("click", (e) => {
    const slideTo = e.target.getAttribute("data-slide-to");
    slideIndex = slideTo;
    offset = +width.slice(0, width.length - 2) * (slideTo - 1);
    slidesField.style.transform = `translateX(-${offset}px)`;
    dots.forEach((dot) => (dot.style.opacity = 0.5));
    dots[slideIndex - 1].style.opacity = 1;
  });
});

//Mobile Menu

const pageHeader = document.querySelector(".page-header");
const menuToggle = pageHeader.querySelector(".main-nav__toggle")
const menuMainNav = pageHeader.querySelector(".main-nav__list")
const menuSearch = pageHeader.querySelector(".page-header__search")
const menuCart = pageHeader.querySelector(".page-header__cart")

menuToggle.classList.remove("main-nav__toggle--no-js");
menuMainNav.classList.add("main-nav__list--close");
menuSearch.classList.add("page-header__search--close");
menuCart.classList.add("page-header__cart--close");

menuToggle.addEventListener("click", function (evt){
  evt.preventDefault();
  menuToggle.classList.toggle("main-nav__toggle--open");
  menuToggle.classList.toggle("main-nav__toggle--close");
  menuMainNav.classList.toggle("main-nav__list--close");
  menuSearch.classList.toggle("page-header__search--close");
  menuCart.classList.toggle("page-header__cart--close");
});

//Reviews Slider

const reviewsItems = document.querySelectorAll(".reviews__item");
const reviewsControlPrevious = document.querySelector(".reviews__control-button--previous");
const reviewsControlNext = document.querySelector(".reviews__control-button--next");

function findActiveSlide (sliderItems, className) {
  for (let i = 0; i < sliderItems.length; i++) {
    if (sliderItems[i].classList.contains(className)) {
      return i;
    }
  }
}

if (reviewsControlPrevious && reviewsControlNext) {
  reviewsControlNext.addEventListener("click", function (evt) {
    evt.preventDefault();
    let toggleClassName = "reviews__item--active";
    let activeSlide = findActiveSlide(reviewsItems, toggleClassName);
    reviewsItems[activeSlide].classList.remove(toggleClassName);
    if (activeSlide < reviewsItems.length - 1) {
      reviewsItems[activeSlide + 1].classList.add(toggleClassName);
    } else {
      reviewsItems[0].classList.add(toggleClassName);
    }
  });

  reviewsControlPrevious.addEventListener("click", function (evt) {
    evt.preventDefault();
    let toggleClassName = "reviews__item--active";
    let activeSlide = findActiveSlide(reviewsItems, toggleClassName);
    reviewsItems[activeSlide].classList.remove(toggleClassName);
    if (activeSlide > 0) {
      reviewsItems[activeSlide - 1].classList.add(toggleClassName);
    } else {
      reviewsItems[reviewsItems.length - 1].classList.add(toggleClassName);
    }
  });
}

// Modal window

const buttonWeekOffer = document.querySelector(".week-offer__button");
const buttonAddCart = document.querySelectorAll(".product-card__add-cart");
const modalAddCart = document.querySelector(".modal-add-cart");

function openModal (button, modalWindow, toggleClassName) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalWindow.classList.add(toggleClassName);
  });
}

if (buttonWeekOffer) {
  openModal(buttonWeekOffer, modalAddCart, "modal-add-cart--open");
}
if (buttonAddCart.length) {
  for (let i = 0; i < buttonAddCart.length; i++) {
    openModal(buttonAddCart[i], modalAddCart, "modal-add-cart--open");
  }
}

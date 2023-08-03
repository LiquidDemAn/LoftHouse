const menuBtn = document.querySelector(".header-nav__btn");
const menuIcon = document.querySelector(".nav-icon");
const headerTop = document.querySelector(".header__top");

menuBtn.addEventListener("click", () => {
  menuIcon.classList.toggle("nav-icon--active");
  headerTop.classList.toggle("header__top--mobile");
  document.body.classList.toggle("no-scroll");
});

// Phone Mask

mask("[data-tel-input]");

const phoneInputs = document.querySelectorAll("[data-tel-input]");

phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value === "+") {
      input.value = "";
    }
  });
  input.addEventListener("blur", () => {
    if (input.value === "+") {
      input.value = "";
    }
  });
});

function myMap() {
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.12),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID,
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

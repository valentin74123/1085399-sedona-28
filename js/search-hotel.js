var searchLink = document.querySelector(".button-interested-in");
var searchPopupForm = document.querySelector(".modal-date");
var isFormOpen = true; 
var searchForm = searchPopupForm.querySelector(".date-form");
var arrivalDate= searchPopupForm.querySelector(".search-arrival-date");
var departureDate = searchPopupForm.querySelector(".search-departure-date");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("arrival-date");
  storage = localStorage.getItem("departure-date");
} catch (err) {
  isStorageSupport = false;
}

searchLink.addEventListener("click", function (evt) {
  if (isFormOpen === true){
    searchPopupForm.classList.remove("modal-show");
    searchPopupForm.classList.remove("modal-error");
    isFormOpen = false;
  } else {
    searchPopupForm.classList.add("modal-show");
    arrivalDate.focus();
    isFormOpen = true;  
  }
});

searchForm.addEventListener("submit", function (evt) {
  if (!arrivalDate.value || !departureDate.value) {
    evt.preventDefault();
    searchPopupForm.classList.remove("modal-error");
    searchPopupForm.offsetWidth = searchPopupForm.offsetWidth;
    searchPopupForm.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("arrival-date", arrivalDate.value);
      localStorage.setItem("departure-date", departureDate.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchPopupForm.classList.contains("modal-show")) {
      evt.preventDefault();
      searchPopupForm.classList.remove("modal-show");
    }
  }
});

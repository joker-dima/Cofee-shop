// BURGER MENU

let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");


navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }

});


//SEARCH MENU

let searchInput = document.querySelector(".visually-hidden--none");
let searchSubmit = document.querySelector(".search__submit--hidden");
let searchIcon = document.querySelector(".search__icon");

searchIcon.addEventListener("click", function () {
    searchInput.classList.toggle('search-iput--open');
    searchSubmit.classList.toggle('search__submit');

});




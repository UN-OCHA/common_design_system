var searchButton = document.querySelector('.cd-search--inline__btn');
var searchInput = document.querySelector('.cd-search--inline__input');

function focusInput() {
  searchInput.focus();
}

if (searchButton) {
  searchButton.addEventListener('click', focusInput);
}

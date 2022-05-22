let linksWrap = $('.links-wrap');
let dropdownButton = $('.dropdown-btn');
let links = document.querySelectorAll('.links li a');

dropdownButton.on('click', () => {
  dropdownButton.toggleClass('active');
  linksWrap.toggleClass('active');
});

links.forEach((item) => {
  item.addEventListener('click',  () => {
    dropdownButton.removeClass('active');
    linksWrap.removeClass('active');
  })
});

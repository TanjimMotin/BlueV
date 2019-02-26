var title = document.getElementsByClassName('title')[0];
// var navBar = document.getElementsByClassName('.navbar')
// var listedItems = document.getElementsByTagName('li')
// var list = document.getElementsByTagName('ul')[0];
var newLi = document.getElementById('newLi');


title.addEventListener('mouseover', function() {
  title.style.transition = '1s';
  title.style.color = '#1D3942';
  title.innerHTML = 'hello world :-)';
});

title.addEventListener('mouseout', function() {
  // title.style.transition = '1s';
  title.style.color = '#92D5E6';
  title.innerHTML = 'the blueview';
});


// ------------------------
window.addEventListener('scroll', function() {
  var scrolled = window.scrollY;
  console.log(scrolled);
  if (scrolled >= 509) {
    newLi.style.fontSize = '1em';
    newLi.style.transition = '1s';
    newLi.style.opacity = '1';
  } else if(scrolled < 509) {
    newLi.style.fontSize = '0';
    newLi.style.opacity = '.0';
  }
});
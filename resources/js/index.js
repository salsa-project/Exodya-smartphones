const navbar = document.getElementById('navbar');
const acceuil = document.getElementsByClassName('navbar-list-item')[1];
const comparateur = document.getElementsByClassName('navbar-list-item')[2];
const phones = document.getElementsByClassName('navbar-list-item')[3];
const apropos = document.getElementsByClassName('navbar-list-item')[4];

// Fixed navbar
window.addEventListener("scroll", function (e) {
    var scrollPxs = this.scrollY;
    if(scrollPxs > 125){
      navbar.classList.add('navbar-list-fixed');
    }else{
      navbar.classList.remove('navbar-list-fixed');
    }
});



// [TEST PURPOSE]
// Active navbar item
switch(window.location.pathname){
  case "/index.html":
  acceuil.classList.add('navbar-item-active');
  break;
  case "/single.html":
  phones.classList.add('navbar-item-active');
  break;
}

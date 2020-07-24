const mobileMenuIcon = document.getElementById('menu-btn');
const navLayer = document.getElementsByClassName('nav-layer')[0];
const navList = document.getElementById('navbar-list');
const acceuil = document.getElementsByClassName('navbar-list-item')[1];
const lesMarques = document.getElementsByClassName('navbar-list-item')[2];
const lesDernies = document.getElementsByClassName('navbar-list-item')[3];
const comming = document.getElementsByClassName('navbar-list-item')[4];
const similar = document.getElementsByClassName('navbar-list-item')[5];
const rechercheLayer = document.getElementsByClassName('search-bar-options-layer')[0];
const rechercheFilterBtn = document.getElementById("filters-btn");
const rechercheBox = document.getElementsByClassName('search-bar-options')[0];


// Fixed navbar
// window.addEventListener("scroll", function (e) {
//     var scrollPxs = this.scrollY;
//     if(scrollPxs > 125){
//       navbar.classList.add('navbar-list-fixed');
//     }else{
//       navbar.classList.remove('navbar-list-fixed');
//     }
// });



// [TEST PURPOSE]
// Active navbar item
switch(window.location.pathname){
  case "/index.html":
  acceuil.classList.add('navbar-item-active');
  break;
  case "/marques.html":
  lesMarques.classList.add('navbar-item-active');
  break;
  case "/derniers.html":
  lesDernies.classList.add('navbar-item-active');
  break;
}

// display/hide recherche avancé
rechercheFilterBtn.addEventListener('click', function(){
  rechercheLayer.classList.toggle('search-bar-options-layer-visible');
})
window.addEventListener('click', function(e){
  if(rechercheLayer.contains(e.target) && !rechercheBox.contains(e.target)){
    rechercheLayer.classList.toggle('search-bar-options-layer-visible')
  }
})

// toggle mobile menu
mobileMenuIcon.addEventListener('click', function(){
  navLayer.classList.toggle('nav-layer-hide');
  setTimeout(function(){
    if(navLayer.classList[1] !== 'nav-layer-hide'){
      navList.style.transform = 'translateX(0%)';
    }else{
      navList.style.transform = 'translateX(-100%)';
    }
    }, 100)
})

//
window.addEventListener('click', function(e){
  if(navLayer.contains(e.target) && !navList.contains(e.target) ){
    
      navList.style.transform = 'translateX(-100%)';
    setTimeout(function(){
      navLayer.classList.toggle('nav-layer-hide');
      mobileMenuIcon.checked = false;
    }, 300)
  }
})

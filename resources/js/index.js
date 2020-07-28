const mobileMenuIcon = document.getElementById('menu-btn');
const navLayer = document.getElementsByClassName('nav-layer')[0];
const navList = document.getElementById('navbar-list');
const sectionTopItems = document.getElementsByClassName('section-top-item');
const sectionTopSlide = document.getElementById("section-top-items-slide")
const sliderArrowL = document.getElementsByClassName('left-arrow-slider')[0];
const sliderArrowR = document.getElementsByClassName('right-arrow-slider')[0];
const acceuil = document.getElementsByClassName('navbar-list-item')[1];
const lesMarques = document.getElementsByClassName('navbar-list-item')[2];
const lesDernies = document.getElementsByClassName('navbar-list-item')[3];
const comming = document.getElementsByClassName('navbar-list-item')[4];
const similar = document.getElementsByClassName('navbar-list-item')[5];
const rechercheLayer = document.getElementsByClassName('search-bar-options-layer')[0];
const rechercheFilterBtn = document.getElementById("filters-btn");
const rechercheBox = document.getElementsByClassName('search-bar-options')[0];



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
  (navLayer.classList[1] !== 'nav-layer-hide') ? navList.style.transform = 'translateX(0%)' : navList.style.transform = 'translateX(-100%)';
})

// slider mobile
// @ TODO: fix layout pc version
// @ this loop is causing problem of layout in the pc version
let itemPos = 0;
Array.from(sectionTopItems).forEach(item => {
  item.style = `transform: translateX(${itemPos}px)`;
  itemPos += item.offsetWidth + 200;
});

// slider L/R triggers
let slideLimit = 0;
let fullWidth = 0;
sliderArrowR.addEventListener('click', function(){
  if(slideLimit == 4) return;
  fullWidth += sectionTopItems[0].offsetWidth + 200;
  sectionTopSlide.style = `transform: translateX(${-fullWidth}px);`;
  slideLimit++;
})
sliderArrowL.addEventListener('click', function(){
  if(slideLimit == 0) return;
  fullWidth -= sectionTopItems[0].offsetWidth + 200;
  sectionTopSlide.style = `transform: translateX(${-fullWidth}px);`;
  slideLimit--;
})



// Fixed navbar
// window.addEventListener("scroll", function (e) {
//     var scrollPxs = this.scrollY;
//     if(scrollPxs > 125){
//       navbar.classList.add('navbar-list-fixed');
//     }else{
//       navbar.classList.remove('navbar-list-fixed');
//     }
// });

// hide mobile menu when layer clicked
// window.addEventListener('click', function(e){
//   if(navLayer.contains(e.target) && !navList.contains(e.target) ){
    
//       navList.style.transform = 'translateX(-100%)';
//     setTimeout(function(){
//       navLayer.classList.toggle('nav-layer-hide');
//       mobileMenuIcon.checked = false;
//     }, 200)
//   }
// })



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
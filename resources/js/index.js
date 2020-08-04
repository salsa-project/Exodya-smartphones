const mobileMenuIcon = document.getElementById('menu-btn');
const navLayer = document.getElementsByClassName('nav-layer')[0];
const navList = document.getElementById('navbar-list');
const sectionTopItems = document.getElementsByClassName('section-top-item');
const sectionTopSlide = document.getElementById("section-top-items-slide")
const sectionDernierItems = document.getElementsByClassName("section-derniers-item");
const sectionDernierSlide = document.getElementsByClassName("section-derniers-items-container")[0];
const commingCategories = document.getElementsByClassName('les-derniers-categorie');
const sectionCommingSlide = document.getElementsByClassName("comming-slider")[0];
const sectionComparisonItems = document.getElementsByClassName("section-similaire-item");
const commingSliderArrowL = document.getElementsByClassName('comming-left-arrow')[0];
const commingSliderArrowR = document.getElementsByClassName('comming-right-arrow')[0];
const topSliderArrowL = document.getElementsByClassName('left-arrow-slider')[0];
const topSliderArrowR = document.getElementsByClassName('right-arrow-slider')[0];
const dernierSliderArrowL = document.getElementsByClassName('dernier-left-arrow')[0];
const dernierSliderArrowR = document.getElementsByClassName('dernier-right-arrow')[0];

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

// @ If device is mobile then ..
// @ to prevent effecting pc version
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
  /****************@ start isMobile*****************/
  // toggle mobile menu
  mobileMenuIcon.addEventListener('click', function(){
    navLayer.classList.toggle('nav-layer-hide');
    (navLayer.classList[1] !== 'nav-layer-hide') ? navList.style.transform = 'translateX(0%)' : navList.style.transform = 'translateX(-100%)';
  })
  /**************************
        slider mobile
  **************************/
  // top marques
  let itemPos = 0;
  let slideLimitTop = 0;
  let fullWidthTop = 0;
  Array.from(sectionTopItems).forEach(item => {
    item.style = `transform: translateX(${itemPos}px)`;
    itemPos += item.offsetWidth + 200;
  });
  topSliderArrowR.addEventListener('click', function(){
    if(slideLimitTop == 4) return;
    fullWidthTop += sectionTopItems[0].offsetWidth + 200;
    sectionTopSlide.style = `transform: translateX(${-fullWidthTop}px);`;
    slideLimitTop++;
  })
  topSliderArrowL.addEventListener('click', function(){
    if(slideLimitTop == 0) return;
    fullWidthTop -= sectionTopItems[0].offsetWidth + 200;
    sectionTopSlide.style = `transform: translateX(${-fullWidthTop}px);`;
    slideLimitTop--;
  })

  // les derniers
  let slideLimitDernier = 0;
  let itemDerniersPos = 0;
  let fullWidthDernier = 0;
  Array.from(sectionDernierItems).forEach(item => {
    item.style = `transform: translateX(${itemDerniersPos}px)`;
    itemDerniersPos += item.offsetWidth + 200;
  });
  dernierSliderArrowR.addEventListener('click', function(){
    if(slideLimitDernier == 2) return;
    fullWidthDernier += sectionDernierItems[0].offsetWidth + 200;
    sectionDernierSlide.style = `transform: translateX(${-fullWidthDernier}px);`;
    slideLimitDernier++;
  })
  dernierSliderArrowL.addEventListener('click', function(){
    if(slideLimitDernier == 0) return;
    fullWidthDernier -= sectionDernierItems[0].offsetWidth + 200;
    sectionDernierSlide.style = `transform: translateX(${-fullWidthDernier}px);`;
    slideLimitDernier--;
  })

  // Comming
  let slideLimitComming = 0;
  let categoryPos = 0;
  let fullWidthComming = 0;
  Array.from(commingCategories).forEach(item => {
    item.style = `transform: translateX(${categoryPos}px)`;
    categoryPos += item.offsetWidth + 200;
  });

  commingSliderArrowR.addEventListener('click', function(){
    if(slideLimitComming == 1) return;
    fullWidthComming += sectionDernierItems[0].offsetWidth + 200;
    sectionCommingSlide.style = `transform: translateX(${-fullWidthComming}px);`;
    slideLimitComming++;
  })
  commingSliderArrowL.addEventListener('click', function(){
    if(slideLimitComming == 0) return;
    fullWidthComming -= sectionDernierItems[0].offsetWidth + 200;
    sectionCommingSlide.style = `transform: translateX(${-fullWidthComming}px);`;
    slideLimitComming--;
  })


  // Comparison
  let slideLimitComparison = 0;
  let comparisonPos = 0;
  let fullWidthComparison = 0;
  Array.from(sectionComparisonItems).forEach(item => {
    item.style = `transform: translateX(${comparisonPos}px)`;
    comparisonPos += item.offsetWidth + 200;
  });

  /****************@ END isMobile*****************/
}


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
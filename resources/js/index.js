//Navbar Btns
const acceuil = document.getElementsByClassName('navbar-list-item')[1];
const lesMarques = document.getElementsByClassName('navbar-list-item')[2];
const lesDernies = document.getElementsByClassName('navbar-list-item')[3];
const comming = document.getElementsByClassName('navbar-list-item')[4];
const similar = document.getElementsByClassName('navbar-list-item')[5];
const rechercheLayer = document.getElementsByClassName('search-bar-options-layer')[0];
const rechercheFilterBtn = document.getElementById("filters-btn");
const rechercheBox = document.getElementsByClassName('search-bar-options')[0];
const rechercheBoxClose = document.getElementsByClassName('search-bar-options-close')[0];


const mobileMenuIcon = document.getElementById('menu-btn');
const navLayer = document.getElementsByClassName('nav-layer')[0];
const navList = document.getElementById('navbar-list');
//top Btns
const sectionTopItems = document.getElementsByClassName('section-top-item');
const sectionTopSlide = document.getElementById("section-top-items-slide")
const topSliderArrowL = document.getElementsByClassName('left-arrow-slider')[0];
const topSliderArrowR = document.getElementsByClassName('right-arrow-slider')[0];
//dernier Btns
const sectionDernierItems = document.getElementsByClassName("section-derniers-item");
const sectionDernierSlide = document.getElementsByClassName("dernier-slider")[0];
const dernierSliderArrowL = document.getElementsByClassName('dernier-left-arrow')[0];
const dernierSliderArrowR = document.getElementsByClassName('dernier-right-arrow')[0];
//comming Btns
// const commingCategories = document.getElementsByClassName('les-derniers-categorie');
// const sectionCommingSlide = document.getElementsByClassName("comming-slider")[0];
// const commingSliderArrowL = document.getElementsByClassName('comming-left-arrow')[0];
// const commingSliderArrowR = document.getElementsByClassName('comming-right-arrow')[0];
//comparaison Btns
const sectionComparisonItems = document.getElementsByClassName("section-similaire-item");
const sectionComparisonSlide = document.getElementsByClassName("comparison-slider")[0];
const comparisonSliderArrowL = document.getElementsByClassName('comparison-left-arrow')[0];
const comparisonSliderArrowR = document.getElementsByClassName('comparison-right-arrow')[0];

const dotsContainer = document.getElementsByClassName('dots-container');


// display/hide recherche avancé
rechercheFilterBtn.addEventListener('click', function(){
  rechercheLayer.classList.toggle('search-bar-options-layer-visible');
})
window.addEventListener('click', function(e){
  if(rechercheLayer.contains(e.target) && !rechercheBox.contains(e.target) || rechercheBoxClose.contains(e.target)){
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
    document.body.classList.toggle('body-no-scroll');
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
    if(slideLimitTop == sectionTopItems.length -1){ return;}
    fullWidthTop += sectionTopItems[0].offsetWidth + 200;
    sectionTopSlide.style = `transform: translateX(${-fullWidthTop}px);`;
    slideLimitTop++;
    (slideLimitTop == sectionTopItems.length -1) && topSliderArrowR.classList.toggle('arrow-slider-off');
    (slideLimitTop !== 0) && topSliderArrowL.classList.remove('arrow-slider-off');
    dotsContainer[0].children[slideLimitTop-1].classList.toggle('dot-active')
    dotsContainer[0].children[slideLimitTop].classList.toggle('dot-active')
  })
  topSliderArrowL.addEventListener('click', function(){
    if(slideLimitTop == 0){ return;}
    fullWidthTop -= sectionTopItems[0].offsetWidth + 200;
    sectionTopSlide.style = `transform: translateX(${-fullWidthTop}px);`;
    slideLimitTop--;
    (slideLimitTop == 0) && topSliderArrowL.classList.toggle('arrow-slider-off');
    (slideLimitTop !== sectionTopItems.length -1) && topSliderArrowR.classList.remove('arrow-slider-off');
    dotsContainer[0].children[slideLimitTop+1].classList.toggle('dot-active')
    dotsContainer[0].children[slideLimitTop].classList.toggle('dot-active')
  })

  // les derniers
  let slideLimitDernier = 0;
  let itemDerniersPos = 0;
  let fullWidthDernier = 0;
  Array.from(sectionDernierItems).forEach(item => {
    item.style = `transform: translateX(${itemDerniersPos}px)`;
    itemDerniersPos += item.offsetWidth + 200;
  })
  dernierSliderArrowR.addEventListener('click', function(){
    if(slideLimitDernier == sectionDernierItems.length -1) return;
    fullWidthDernier += sectionDernierItems[0].offsetWidth + 200;
    sectionDernierSlide.style = `transform: translateX(${-fullWidthDernier}px);`;
    slideLimitDernier++;
    (slideLimitDernier == sectionDernierItems.length -1) && dernierSliderArrowR.classList.toggle('arrow-slider-off');
    (slideLimitDernier !== 0) && dernierSliderArrowL.classList.remove('arrow-slider-off');    
    dotsContainer[1].children[slideLimitDernier-1].classList.toggle('dot-active')
    dotsContainer[1].children[slideLimitDernier].classList.toggle('dot-active')
  })
  dernierSliderArrowL.addEventListener('click', function(){
    if(slideLimitDernier == 0) return;
    fullWidthDernier -= sectionDernierItems[0].offsetWidth + 200;
    sectionDernierSlide.style = `transform: translateX(${-fullWidthDernier}px);`;
    slideLimitDernier--;
    (slideLimitDernier == 0) && dernierSliderArrowL.classList.toggle('arrow-slider-off');    
    (slideLimitDernier !== sectionDernierItems.length -1) && dernierSliderArrowR.classList.remove('arrow-slider-off');
    dotsContainer[1].children[slideLimitDernier].classList.toggle('dot-active')
    dotsContainer[1].children[slideLimitDernier+1].classList.toggle('dot-active')
  })

  // Comming
  // let slideLimitComming = 0;
  // let categoryPos = 0;
  // let fullWidthComming = 0;
  // Array.from(commingCategories).forEach(item => {
  //   item.style = `transform: translateX(${categoryPos}px)`;
  //   categoryPos += item.offsetWidth + 200;
  // });

  // commingSliderArrowR.addEventListener('click', function(){
  //   if(slideLimitComming == 1) return;
  //   fullWidthComming += sectionDernierItems[0].offsetWidth + 200;
  //   sectionCommingSlide.style = `transform: translateX(${-fullWidthComming}px);`;
  //   slideLimitComming++;
  // })
  // commingSliderArrowL.addEventListener('click', function(){
  //   if(slideLimitComming == 0) return;
  //   fullWidthComming -= sectionDernierItems[0].offsetWidth + 200;
  //   sectionCommingSlide.style = `transform: translateX(${-fullWidthComming}px);`;
  //   slideLimitComming--;
  // })


  // Comparison
  let slideLimitComparison = 0;
  let comparisonPos = 0;
  let fullWidthComparison = 0;
  Array.from(sectionComparisonItems).forEach(item => {
    item.style = `transform: translateX(${comparisonPos}px)`;
    comparisonPos += item.offsetWidth + 200;
  });
  comparisonSliderArrowR.addEventListener('click', function(){
    if(slideLimitComparison == sectionComparisonItems.length -1) return;
    fullWidthComparison += sectionComparisonItems[0].offsetWidth + 200;
    sectionComparisonSlide.style = `transform: translateX(${-fullWidthComparison}px);`;
    slideLimitComparison++;
    (slideLimitComparison == sectionComparisonItems.length -1) && comparisonSliderArrowR.classList.toggle('arrow-slider-off');
    (slideLimitComparison !== 0) && comparisonSliderArrowL.classList.remove('arrow-slider-off');    
    dotsContainer[2].children[slideLimitComparison].classList.toggle('dot-active')
    dotsContainer[2].children[slideLimitComparison-1].classList.toggle('dot-active')
  })
  comparisonSliderArrowL.addEventListener('click', function(){
    if(slideLimitComparison == 0) return;
    fullWidthComparison -= sectionComparisonItems[0].offsetWidth + 200;
    sectionComparisonSlide.style = `transform: translateX(${-fullWidthComparison}px);`;
    slideLimitComparison--;
    (slideLimitComparison == 0) && comparisonSliderArrowL.classList.toggle('arrow-slider-off');    
    (slideLimitComparison !== sectionComparisonItems.length -1) && comparisonSliderArrowR.classList.remove('arrow-slider-off');
    dotsContainer[2].children[slideLimitComparison].classList.toggle('dot-active')
    dotsContainer[2].children[slideLimitComparison+1].classList.toggle('dot-active')
  })

  //This will fix the hidden SEARCH-BOX when the  keyboard POP-up ..
  const itemCenter = document.getElementsByClassName('item-center')[0];
  window.addEventListener('resize', function(e){
    (navList.offsetHeight < 540)? itemCenter.classList.add('item-center-row') : itemCenter.classList.remove('item-center-row')
  });

  //This will fix the checkbox history problem
  setTimeout(()=>{
    document.getElementsByClassName('menu-btn')[0].checked = false;
  }, 0)


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

function detectLimit(counter, btn){
  
}



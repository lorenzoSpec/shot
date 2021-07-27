function animationHero() {
  const IMG = document.getElementById('img-hero');
  const TITLE = document.getElementById('title-cont');
  let screenWidth = window.innerWidth;

  decideWhatClass(screenWidth, IMG, TITLE);
}

function decideWhatClass(screenWidth, IMG, TITLE){
  if(screenWidth >= 360 && screenWidth < 1280){
    animationImgOne(IMG);
    animationTitleOne(TITLE);
    console.log('sj');
  } else {
    animationImgTwo(IMG);
    animationTitleTwo(TITLE);
  }
}

function animationImgOne(IMG) {
  IMG.setAttribute('class', 'animate-hero');
}

function animationImgTwo(IMG) {
  IMG.setAttribute('class', 'animate-hero-two');
}

function animationTitleOne(TITLE) {
  TITLE.setAttribute('class', 'animate-hero-title');
}

function animationTitleTwo(TITLE) {
  TITLE.setAttribute('class', 'animate-hero-title-two');
}

window.addEventListener('load', animationHero);
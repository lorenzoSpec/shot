function animationHero() {
  const IMG = document.getElementById('img-hero');
  const TITLE = document.getElementById('title-cont');

  decideWhatClass(IMG, TITLE);
}

function decideWhatClass(IMG, TITLE){
    animationImgTwo(IMG);
    animationTitleTwo(TITLE);
}

function animationImgTwo(IMG) {
  IMG.setAttribute('class', 'animate-hero-two');
}

function animationTitleTwo(TITLE) {
  TITLE.setAttribute('class', 'animate-hero-title-two');
}

window.addEventListener('load', animationHero);
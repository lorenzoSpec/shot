const CONTP = document.getElementById('cont');
let historyScrolled = [];

/* animataion for the different section sof products */
function animationForProducts(){
  const SCREENH = window.innerHeight;
  const EL = document.querySelectorAll('.ell');
  
  let elTop = getTopOfProductsSection(EL);
  let nameEL = savingTheNameProducts(EL);
  addClass(elTop, nameEL);
  removeClass(elTop, nameEL); 
}

/* get the top coordinates for different section */
function getTopOfProductsSection(EL){
  let elTop2 = [];
  EL.forEach( x => {
    elTop2.push(x.getBoundingClientRect().top);
  });
  return elTop2;
}

/* save the ids of differents section */
function savingTheNameProducts(EL){
  let nameEL2 = [];
  EL.forEach( x => {
    nameEL2.push([x.id, x]);
  });
  return nameEL2
}

/* add class name for animation */
function addClass(elTop, nameEL){
  elTop.forEach( (x, y) => {
    if(x === 0){
      nameEL[y][1].children[0].classList.add('anmtnDesc');
      nameEL[y][1].children[1].classList.add('anmtn');
      nameEL[y][1].children[2].classList.add('anmtnH');
      nameEL[y][1].children[3].classList.add('anmtnPrice');
    }
  });
}

/* remove the class for animation at a time */
function removeClass(elTop, nameEL) {
  elTop.forEach( (x, y) => {
    if(x === 0){
      historyScrolled.push(nameEL[y][1]);
      if(historyScrolled.length >= 2){
        let recent = historyScrolled[historyScrolled.length - 2];
        let current = historyScrolled[historyScrolled.length - 1];
        
        if(recent !== current){
          recent.children[0].classList.remove('anmtnDesc');
          recent.children[1].classList.remove('anmtn');
          recent.children[2].classList.remove('anmtnH');
          recent.children[3].classList.remove('anmtnPrice');
        }
      }
    }
  });
}

CONTP.addEventListener('scroll', animationForProducts);
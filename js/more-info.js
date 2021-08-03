import { cart } from './cart.js';
import { savedBuy } from './buy-save.js'

let eTwo = null;
let eThree = null;

/* show the more info for product */
function moreInfo(which){
  let dataP = dataProducts();

  moreInfoDom(which, dataP);

}

/* more info DOM made */
function moreInfoDom(which, dataP){
  let srcImg = dataP[which][0];
  let nameP = dataP[which][1];
  let colorP = dataP[which][2];

  const BODY = document.getElementById('body');
  const FOOT = footerDom();
  const IMG = imgItem(srcImg, 'more-info');
  const NAMEFORITEM = nameForItem(nameP, 'more-info');

  const CONTAINER = document.createElement('div');
  CONTAINER.setAttribute('id', 'container-more-info');

  const BACK = document.createElement('img');
  BACK.setAttribute('id', 'back-more-info');
  BACK.setAttribute('src', 'img/shot-logo.png');
  BACK.addEventListener('click', backP);

  const DIVBUYPRICE = document.createElement('div');
  DIVBUYPRICE.setAttribute('id', 'divbuyprice-more-info');

  const BUTTON = document.createElement('button');
  const BUY = document.createTextNode('BUY');
  BUTTON.appendChild(BUY);
  BUTTON.setAttribute('id', 'buy-more-info');
  BUTTON.addEventListener('click', eTwo = cart.bind(this, srcImg, nameP));
  BUTTON.addEventListener('click', eThree = savedBuy.bind(this, srcImg, nameP));

  const PRICE = document.createElement('p');
  const FIVED = document.createTextNode('$5.00');
  PRICE.appendChild(FIVED);
  PRICE.setAttribute('id', 'price-more-info');

  const BASICDESCRIPTION = document.createElement('div');
  const PCONTENT = document.createElement('p');
  const ST1 = document.createElement('strong');
  const ST2 = document.createElement('strong');
  const ST3 = document.createElement('strong');
  const ST4 = document.createElement('strong');
  const ST1TXT = document.createTextNode('Lens Shape: ');
  const ST2TXT = document.createTextNode('Lens Color: ');
  const ST3TXT = document.createTextNode('Frame Material: ');
  const ST4TXT = document.createTextNode('UV/UVB Protection');
  const TXT1 = document.createTextNode('Butterfly');
  const TXT2 = document.createTextNode(colorP);
  const TXT3 = document.createTextNode('Plastic');
  const TXT4 = document.createTextNode('Polarized Protection');
  const BR1 = document.createElement('br');
  const BR2 = document.createElement('br');
  const BR3 = document.createElement('br');
  const BR4 = document.createElement('br');

  ST1.appendChild(ST1TXT);
  ST2.appendChild(ST2TXT);
  ST3.appendChild(ST3TXT);
  ST4.appendChild(ST4TXT);

  PCONTENT.appendChild(ST1);
  PCONTENT.appendChild(TXT1);
  PCONTENT.appendChild(BR1);
  PCONTENT.appendChild(ST2);
  PCONTENT.appendChild(TXT2);
  PCONTENT.appendChild(BR2);
  PCONTENT.appendChild(ST3);
  PCONTENT.appendChild(TXT3);
  PCONTENT.appendChild(BR3);
  PCONTENT.appendChild(TXT4);
  PCONTENT.appendChild(BR4);
  PCONTENT.appendChild(ST4);
  BASICDESCRIPTION.setAttribute('id', 'basic-desc-moe-info');
  BASICDESCRIPTION.appendChild(PCONTENT);

  const MOREP = document.createElement('p');
  const MOREPTEXT = document.createTextNode(`
    Lorem ipsum, dolor sit amet 
    consectetur adipisicing elit. 
    Reprehenderit voluptas, delectus
    aspernatur hic non pariatur! Aspernatur 
    cupiditate rem distinctio culpa 
    voluptatibus, natus odio, laborum
    facilis voluptates perspiciatis 
    nam quibusdam quasi.`);
  MOREP.appendChild(MOREPTEXT);
  MOREP.setAttribute('id', 'morep-more-info');

  CONTAINER.appendChild(BACK);
  CONTAINER.appendChild(IMG);
  CONTAINER.appendChild(NAMEFORITEM);
  CONTAINER.appendChild(DIVBUYPRICE);
  CONTAINER.appendChild(BASICDESCRIPTION);
  CONTAINER.appendChild(MOREP);
  CONTAINER.appendChild(FOOT);

  DIVBUYPRICE.appendChild(BUTTON);
  DIVBUYPRICE.appendChild(PRICE);

  BODY.appendChild(CONTAINER);
}

/* name for item */
function nameForItem(nameP, where){
  const H3 = document.createElement('h3');
  const H3TXT = document.createTextNode(nameP);
  
  if(where === 'more-info'){
    H3.setAttribute('id', 'h-more-info');
  } else {
    H3.setAttribute('id', 'cart-h');
  }

  H3.appendChild(H3TXT);

  return H3;
}

/* image of items */
function imgItem(srcImg, whereCalled){
  const IMG = document.createElement('img');

  IMG.setAttribute('src', srcImg);

  if(whereCalled === 'more-info'){
    IMG.setAttribute('id', 'img-more-info');
  } else {
    IMG.setAttribute('id', 'cart-img');
  }

  return IMG;
}

/* MAKE FOOTER DOM */
function footerDom(){
  const FOOTER = document.createElement('footer');
  const CREDITS = document.createElement('a');
  const CREDITSTXT = document.createTextNode('Credits');
  const TANDS = document.createElement('a');
  const TANDSTXT = document.createTextNode('Terms and Service');
  const PRIVACY = document.createElement('a');
  const PRIVACYTXT = document.createTextNode('Privacy and Policy');
  const COPYRIGHT = document.createElement('p');
  const COPYRIGHTTXT = document.createTextNode('Copyright 2021 - Lorenzo');
  const LINE = document.createElement('hr');

  FOOTER.setAttribute('class', 'footer');
  CREDITS.setAttribute('href', 'google.com');
  TANDS.setAttribute('href', 'google.com');
  PRIVACY.setAttribute('href', 'google.com');
  COPYRIGHT.setAttribute('class', 'copyright-more-info');
  LINE.setAttribute('class', 'line');

  CREDITS.appendChild(CREDITSTXT);
  TANDS.appendChild(TANDSTXT);
  PRIVACY.appendChild(PRIVACYTXT);
  COPYRIGHT.appendChild(COPYRIGHTTXT);

  FOOTER.appendChild(CREDITS);
  FOOTER.appendChild(TANDS);
  FOOTER.appendChild(PRIVACY);
  FOOTER.appendChild(LINE);
  FOOTER.appendChild(COPYRIGHT);

  return FOOTER;
}

/* containing data about the products */
function dataProducts(){
  const data = {
    'alpha-cont': ['img/blue-glass.png', 'Alpha', 'Blue'],
    'beta-cont': ['img/red-glass.png', 'Beta', 'Red'],
    'delta-cont': ['img/purple-glass.png', 'Delta', 'Purple'],
    'omega-cont': ['img/orange-glass.png', 'Omega', 'Orange']
  };

  return data;
}

function backP(){
  location.reload();
}

/* event listeners */
function eventList(){
  const SHADEIMG = document.querySelectorAll('.shade-img');
  const SHADENAME = document.querySelectorAll('.shade-name');

  for(let i = 0; i < SHADEIMG.length; i++){
    SHADEIMG[i].addEventListener('click', function(){moreInfo(this.parentNode.id)});
    SHADENAME[i].addEventListener('click', function(){moreInfo(this.parentNode.id)});
  }

  
}
eventList();


export { footerDom, imgItem, nameForItem };
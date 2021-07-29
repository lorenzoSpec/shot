/* show the more info for product */
function moreInfo(which){
  let dataP = dataProducts();
  moreInfoDom(which, dataP);
}

/* more info DOM made */
function moreInfoDom(which, dataP){
  const BODY = document.getElementById('body');
  let srcImg = dataP[which][0];
  let nameP = dataP[which][1];
  let colorP = dataP[which][2];

  const CONTAINER = document.createElement('div');
  CONTAINER.setAttribute('id', 'container-more-info');

  const BACK = document.createElement('p');
  const BACKTXT = document.createTextNode('Back');
  BACK.appendChild(BACKTXT);
  BACK.setAttribute('id', 'back-more-info');
  BACK.addEventListener('click', function(){backP(BODY, CONTAINER)});
  
  const IMG = document.createElement('img');
  IMG.setAttribute('src', srcImg);
  IMG.setAttribute('id', 'img-more-info');

  const MANY = document.createElement('div');
  MANY.setAttribute('id', 'plus-minus-more-info');

  const MINUS = document.createElement('p');
  const MINUSTXT = document.createTextNode('-');
  MINUS.appendChild(MINUSTXT);
  MINUS.setAttribute('id', 'minus-more-info');

  const NUM = document.createElement('p');
  const NUMTXT = document.createTextNode('1');
  NUM.appendChild(NUMTXT);
  NUM.setAttribute('id', 'num-more-info');

  const PLUS = document.createElement('p');
  const PLUSTXT = document.createTextNode('+');
  PLUS.appendChild(PLUSTXT);
  PLUS.setAttribute('id', 'plus-more-info');

  const H3 = document.createElement('h3');
  const H3TXT = document.createTextNode(nameP);
  H3.appendChild(H3TXT);
  H3.setAttribute('id', 'h-more-info');

  const DIVBUYPRICE = document.createElement('div');
  DIVBUYPRICE.setAttribute('id', 'divbuyprice-more-info');

  const BUTTON = document.createElement('button');
  const BUY = document.createTextNode('BUY');
  BUTTON.appendChild(BUY);
  BUTTON.setAttribute('id', 'buy-more-info');

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

  const FOOTER = document.createElement('footer');
  FOOTER.setAttribute('id', 'footer');

  const CREDITS = document.createElement('a');
  const CREDITSTXT = document.createTextNode('Credits');
  CREDITS.appendChild(CREDITSTXT);
  CREDITS.setAttribute('href', 'google.com');

  const TANDS = document.createElement('a');
  const TANDSTXT = document.createTextNode('Terms and Service');
  TANDS.appendChild(TANDSTXT);
  TANDS.setAttribute('href', 'google.com');

  const PRIVACY = document.createElement('a');
  const PRIVACYTXT = document.createTextNode('Privacy and Policy');
  PRIVACY.appendChild(PRIVACYTXT);
  PRIVACY.setAttribute('href', 'google.com');

  const COPYRIGHT = document.createElement('p');
  const COPYRIGHTTXT = document.createTextNode('Copyright 2021 - John Erwin Lorenzo');
  COPYRIGHT.appendChild(COPYRIGHTTXT);
  COPYRIGHT.setAttribute('id', 'copyright-more-info');

  const LINE = document.createElement('hr');
  LINE.setAttribute('id', 'line');

  CONTAINER.appendChild(BACK);
  CONTAINER.appendChild(IMG);
  CONTAINER.appendChild(MANY);
  CONTAINER.appendChild(H3);
  CONTAINER.appendChild(DIVBUYPRICE);
  CONTAINER.appendChild(BASICDESCRIPTION);
  CONTAINER.appendChild(MOREP);
  CONTAINER.appendChild(FOOTER);

  MANY.appendChild(MINUS);
  MANY.appendChild(NUM);
  MANY.appendChild(PLUS);

  DIVBUYPRICE.appendChild(BUTTON);
  DIVBUYPRICE.appendChild(PRICE);

  FOOTER.appendChild(CREDITS);
  FOOTER.appendChild(TANDS);
  FOOTER.appendChild(PRIVACY);
  FOOTER.appendChild(LINE);
  FOOTER.appendChild(COPYRIGHT);

  BODY.appendChild(CONTAINER);
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

function backP(BODY, CONTAINER){
  BODY.removeChild(CONTAINER);
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
import { footerDom, imgItem, nameForItem } from './more-info.js';

let eOne = null;

/* MAKE THE CART  */
function cart(srcImg, nameP){
  const FOOT = footerDom();
  const ITEMIMG = imgItem(srcImg, 'cart');
  const NAMEFORITEM = nameForItem(nameP, 'cart');
  const HOWMANYITEMS = howManyItems();
  const PRICEEL = priceOfItem();
  const REMOVE = removeBtn();
  const ITEMDIV = itemsDom(ITEMIMG, NAMEFORITEM, HOWMANYITEMS, PRICEEL, REMOVE);

  cartDom(ITEMDIV, FOOT);
}

/* MAKE DOM FOR CART */
function cartDom(ITEMDIV, FOOT){
  const BODY = document.getElementById('body');
  const CONTAINER = document.createElement('div');
  const BACK = document.createElement('p');
  const BACKTXT = document.createTextNode('Back');
  const CHECKOUT = document.createElement('button');
  const CHECKOUTTXT = document.createTextNode('Check Out');

  CONTAINER.setAttribute('id', 'cart-cont');
  BACK.setAttribute('id', 'cart-back');
  CHECKOUT.setAttribute('id', 'cart-checkout');
  
  BACK.appendChild(BACKTXT);
  CHECKOUT.appendChild(CHECKOUTTXT);

  CONTAINER.appendChild(BACK);
  CONTAINER.appendChild(CHECKOUT);
  CONTAINER.appendChild(FOOT);
  CONTAINER.insertBefore(ITEMDIV, CONTAINER.firstChild);

  BACK.addEventListener('click', eOne = cartBack.bind(this, BACK, BODY, CONTAINER));
  
  BODY.appendChild(CONTAINER);
}

/* Items DOM  */
function itemsDom(ITEMIMG, NAMEFORITEM, HOWMANYITEMS, PRICEEL, REMOVE){
  const ITEMCONT = document.createElement('div');
  const FIRSTDIV = document.createElement('div');
  const SECONDDIV = document.createElement('div');

  ITEMCONT.setAttribute('id', 'cart-item-cont');
  FIRSTDIV.setAttribute('id', 'cart-f-div');
  SECONDDIV.setAttribute('id', 'cart-s-div');

  FIRSTDIV.appendChild(ITEMIMG);
  FIRSTDIV.appendChild(NAMEFORITEM);
  FIRSTDIV.appendChild(HOWMANYITEMS);

  SECONDDIV.appendChild(PRICEEL);
  SECONDDIV.appendChild(REMOVE)

  ITEMCONT.appendChild(FIRSTDIV);
  ITEMCONT.appendChild(SECONDDIV);

  return ITEMCONT;
}

/* BUTTONS FOR CHANGING HOW MANY ITEMS USER WILL BUY */
function howManyItems(){
  const HOWMANYITEMSCONT = document.createElement('div');
  const MINUSICN = document.createElement('i');
  const NUMBER = document.createElement('p');
  const NUMTXT = document.createTextNode('1');
  const PLUSICN = document.createElement('i');

  NUMBER.appendChild(NUMTXT);

  HOWMANYITEMSCONT.setAttribute( 'id', 'cart-how-many-items-cont');
  MINUSICN.setAttribute('class', 'fas fa-minus');
  NUMBER.setAttribute('id', 'cart-number');
  PLUSICN.setAttribute('class', 'fas fa-plus');

  HOWMANYITEMSCONT.appendChild(MINUSICN);
  HOWMANYITEMSCONT.appendChild(NUMBER);
  HOWMANYITEMSCONT.appendChild(PLUSICN);

  return HOWMANYITEMSCONT;
}

/* DOM FOR PRICE */
function priceOfItem(){
  const PRICEP = document.createElement('p');
  const PRICETXT = document.createTextNode('$5.00');

  PRICEP.appendChild(PRICETXT);

  PRICEP.setAttribute('id', 'cart-price');

  return PRICEP;
}

/* DOM FOR REMOVE BUTTON */
function removeBtn(){
  const REMOVEBTN = document.createElement('button');
  const BTNTXT = document.createTextNode('remove');

  REMOVEBTN.setAttribute('id', 'cart-remove-btn');

  REMOVEBTN.appendChild(BTNTXT);

  return REMOVEBTN;
}

/* BACK FROM CART */
function cartBack(BACK, BODY, CONTAINER){
  BODY.removeChild(CONTAINER);
  BACK.removeEventListener('click', eOne);
}

export {cart};
import { footerDom, imgItem, nameForItem } from './more-info.js';

let eTwo = null;

let anyIs = Object.keys(localStorage);
let arrayOfNameSaved = [];
for(let i = 0; i < anyIs.length; i++){
  let dataStr = localStorage.getItem(anyIs[i]);
  let dataArr = dataStr.split(',');

  arrayOfNameSaved.push(dataArr[1]);
}


/* MAKE THE CART  */
function cart(srcImg, nameP){
  const FOOT = footerDom();
  const ITEMIMG = imgItem(srcImg, 'cart');
  const NAMEFORITEM = nameForItem(nameP, 'cart');
  const HOWMANYITEMS = howManyItems();
  const PRICEEL = priceOfItem();
  const REMOVE = removeBtn();
  const ITEMDIV = itemsDom(ITEMIMG, NAMEFORITEM, HOWMANYITEMS, PRICEEL, REMOVE, 'cart', nameP);

  cartDom(ITEMDIV, FOOT);
}

/* MAKE DOM FOR CART */
function cartDom(ITEMDIV, FOOT){
  const BODY = document.getElementById('body');
  const CONTAINER = document.createElement('div');
  const BACK = document.createElement('p');
  const BACKTXT = document.createTextNode('Back');
  const DIV = document.createElement('div');
  const CHECKOUT = document.createElement('button');
  const TOTAL = totalPrice();
  const CHECKOUTTXT = document.createTextNode('Check Out');

  CONTAINER.setAttribute('id', 'cart-cont');
  BACK.setAttribute('id', 'cart-back');
  CHECKOUT.setAttribute('id', 'cart-checkout');
  DIV.setAttribute('id', 'div-contain-checkout');
  
  BACK.appendChild(BACKTXT);
  CHECKOUT.appendChild(CHECKOUTTXT);

  DIV.appendChild(TOTAL)
  DIV.appendChild(CHECKOUT);

  CONTAINER.appendChild(BACK);
  CONTAINER.appendChild(DIV);
  CONTAINER.appendChild(FOOT);
  
  if(ITEMDIV){
    CONTAINER.insertBefore(ITEMDIV, CONTAINER.firstChild);
  }

  BACK.addEventListener('click', cartBack);

  BODY.appendChild(CONTAINER);
  updateTotal();
}

/* Items DOM  */
function itemsDom(ITEMIMG, NAMEFORITEM, HOWMANYITEMS, PRICEEL, REMOVE, whereIsCalled, nameP){
  const ITEMCONT = document.createElement('div');
  const FIRSTDIV = document.createElement('div');
  const SECONDDIV = document.createElement('div');

  ITEMCONT.setAttribute('id', 'cart-item-cont');
  FIRSTDIV.setAttribute('id', 'cart-f-div');
  SECONDDIV.setAttribute('id', 'cart-s-div');

  FIRSTDIV.appendChild(ITEMIMG);
  FIRSTDIV.appendChild(NAMEFORITEM);
  //FIRSTDIV.appendChild(HOWMANYITEMS);

  SECONDDIV.appendChild(PRICEEL);
  SECONDDIV.appendChild(REMOVE)

  ITEMCONT.appendChild(FIRSTDIV);
  ITEMCONT.appendChild(SECONDDIV);

  if(whereIsCalled === 'cart'){
    if(arrayOfNameSaved.indexOf(nameP) === -1){
      return ITEMCONT;
    }
  } else if ('buy-save'){
    return ITEMCONT;
  } else {
    console.log('What Now');
  }
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

/* DOM for total price */
function totalPrice(){
  const TOTAL = document.createElement('p');
  const TOTALTXT = document.createTextNode('Total: $5.00');

  TOTAL.setAttribute('id', 'total-cost');

  TOTAL.appendChild(TOTALTXT);

  return TOTAL;
}

/* know how manyitems is saved in the local storage */
function howManyitemsSaved(){
  let anyIs3 = Object.keys(localStorage);
  
  return anyIs3.length;
}

/* update the tootale price on total p element */
function updateTotal(){
  let countTotal = howManyitemsSaved();
  let totalCostEl = document.getElementById('total-cost');

  totalCostEl.textContent = 'Total: $' + (countTotal * 5) + '.00';
}

/* to update the cart count on the home */
function updateCartCount(){
  let countTotal = howManyitemsSaved();
  let cartCount = document.getElementById('cart');

  cartCount.textContent= `Cart(${countTotal})`;
}
updateCartCount();

/* DOM FOR REMOVE BUTTON */
function removeBtn(){
  const REMOVEBTN = document.createElement('button');
  const BTNTXT = document.createTextNode('remove');

  REMOVEBTN.setAttribute('id', 'cart-remove-btn');

  REMOVEBTN.appendChild(BTNTXT);

  REMOVEBTN.addEventListener('click', eTwo = toBeRemove.bind(this, REMOVEBTN));

  return REMOVEBTN;
}

function toBeRemove(el){
  let anyIs2 = Object.keys(localStorage);
  if(anyIs2.length >= 0){
    const CNT = document.getElementById('cart-cont');
    let nameOfProduct =  el.parentNode.parentNode.firstChild.firstChild.nextSibling.textContent;

    for(let i = 0; i < anyIs2.length; i++){
      let z = anyIs2[i];

      let x = localStorage.getItem(z).split(',')[1];
      if(x === nameOfProduct){
        localStorage.removeItem(z);
        CNT.removeChild(el.parentNode.parentNode);
        updateTotal();
      }
    }
  }
}

/* BACK FROM CART */
function cartBack(){
  location.reload();
}

export {cart, itemsDom, howManyItems, priceOfItem, removeBtn, updateTotal};
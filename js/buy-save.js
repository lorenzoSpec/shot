/* SAVE THE ITEM WHEN USER CLICKED THE BUY BUTTON */
function savedBuy(srcImg, nameP){
  let isAny = Object.keys(localStorage);
  let makeArray = [srcImg, nameP, 1];
  let toBeSaved = makeArray.toString();
  let nameSaving = ['first-product', 'second-product', 'third-product', 'fourth-product'];

  let itemsSaved2 = getItemsSaved(nameSaving);
  let check2 = checkIfExisting(nameSaving);
  let checkAlso2 = checkIfNotSaved(itemsSaved2, nameP);

  willSaveOrSaved(checkAlso2, check2, toBeSaved, nameSaving);
} 

/* GET ALL THE SAVE ITEMS */
function getItemsSaved(nameSaving){
  for(let i = 0; i < nameSaving.length; i++){
    let itemsSaved = [];
    if(localStorage.getItem(nameSaving[i])){
      itemsSaved.push(localStorage.getItem(nameSaving[i]));
    }

    return itemsSaved;
  }
}

/* CHECK IF THE {NAMESAVING} IS ALREADY SAVED */
function checkIfExisting(nameSaving){
  let check = [];
  for(let i = 0; i < nameSaving.length; i++){
    check.push(localStorage.hasOwnProperty(nameSaving[i]));
  }

  return check;
}

/* CHECK IF THE SPECIFIC ITEM IS SAVED */
function checkIfNotSaved(itemsSaved, nameP){
  let checkAlso = [];
  for(let i = 0; i < itemsSaved.length; i++){
    if(itemsSaved[i].split(',')){
      checkAlso.push(itemsSaved[i].split(',')[1] === nameP);
    }
  }

  return checkAlso;
}

/* DECIDE IF ITEM WILL BE SAVE OR NOT OR REMOAIN THE SAME */
function willSaveOrSaved(checkAlso2, check2, toBeSaved, nameSaving){
  if(checkAlso2.indexOf(true) === -1){
    if(!check2[0]){
      localStorage.setItem(nameSaving[0], toBeSaved);
    } else if (!check2[1]) {
      localStorage.setItem(nameSaving[1], toBeSaved);
    } else if (!check2[2]) {
      localStorage.setItem(nameSaving[2], toBeSaved);
    } else if (!check2[3]){
      localStorage.setItem(nameSaving[3], toBeSaved);
    } else {
      console.log('All items are listed');
    }
  }
}

export { savedBuy };
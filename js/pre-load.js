function vanish(){
  const LOADER = document.getElementById('loader-div');
  const BODY = document.getElementById('body');
  BODY.removeChild(LOADER);
  console.log(BODY);
}

window.addEventListener('load', vanish);
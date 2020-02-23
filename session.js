const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const key = urlParams.get('key');

// Checks if the key exists so then the cookie is overwritten
if(key){
  document.cookie = "key=" + key + ";" + "max-age=2592000" ;
  console.log(document.cookie);
}
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);

const key = urlParams.get('key');
sessionStorage.setItem('keys', key);
console.log(sessionStorage.getItem('keys'));

document.cookie = "key=" + sessionStorage.getItem('keys');
  console.log(document.cookie);

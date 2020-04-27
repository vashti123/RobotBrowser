function uncheck(target) {
  target.innerHTML = '<input type="checkbox" id="checkbox"/>';
  target.setAttribute('onclick', 'check(this)')
}

function check(target) {
  target.innerHTML = '<input type="checkbox" id="checkbox"/>';
  target.setAttribute('onclick', 'uncheck(this)')
}

function uncheck(target) {
  target.innerHTML = '<img id="notBox" src="img/blackBox.png" width="10px" height="10px"/>';
  target.setAttribute('onclick', 'check(this)')
}

function check(target) {
  target.innerHTML = '<img id="box" src="img/checkedBox.png" width="10px" height="10px"/>';
  target.setAttribute('onclick', 'uncheck(this)')
}

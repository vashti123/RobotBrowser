function returnChecklist() {
  const CB = 2; //number of checkboxes

  let cookieArray = []
  let cookieString

  for (i = 0; i < CB; i++) {
    cookieArray.push(document.getElementById("box"))
  }

  for (i = 0; i < cookieArray.length; i++) {

    cookieString += "checkBox" + [i] + "=" + cookieArray[i] + ";";
  }

  document.cookie = cookieString

  console.log(document.cookie);
}

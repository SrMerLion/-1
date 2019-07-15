function schet() {
  for (var i = 1; i < document.getElementById("myTBL").rows.length - 1; i++) {
    document.getElementById("myTBL").rows[i].cells[4].innerHTML =
      document.getElementById("myTBL").rows[i].cells[3].firstChild.value *
      document.getElementById("myTBL").rows[i].cells[2].innerHTML;
  }
}
function ItoSymma() {
  var summa = +0;
  schet();
  for (var i = 1; i < document.getElementById("myTBL").rows.length - 1; i++) {
    var st = +document.getElementById("myTBL").rows[i].cells[4].innerHTML;
    summa += st;
     
  }
  document.getElementById("ItoSymma").innerHTML = summa;
}
function loadPage() {
  var form = document.getElementById("form1");
  var num = form.elements[0].value;

  window.location = "http://site" + num + ".cfn.acsitefactory.com/";

}

function searchKeyPress(e) {
  e = e || window.event;
  if (e.keyCode == 13) {
    loadPage();
    return false;
  }
  return true;
}

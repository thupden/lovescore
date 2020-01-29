function myFunction() {
  var x = document.getElementById("text").value;
  var y = document.getElementById("text1").value
  if (x == "" || y == "") {
    alert("Name must be filled out");
    return false;
  } else {
    var num = Math.random();
    var loveScore = Math.floor(num * 100);
    document.getElementById("score").innerHTML = loveScore + '%';
    document.getElementById("loveButton").innerHTML = "Re calculate love score";
    document.getElementsByTagName("BUTTON")[0].setAttribute("onclick", "refreshPage()")
  }
}

function refreshPage() {
  location.reload(true);
}

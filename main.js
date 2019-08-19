var newName = document.querySelector('#newName');

var button = document.querySelector('#button');


function showInput () {
  document.getElementById('newName').innerHTML = document.getElementById('enterName').value;
}



function hideText1() {
  var text = document.getElementById("clear1");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function hideText2() {
  var text = document.getElementById("clear2");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function hideText3() {
  var text = document.getElementById("clear3");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

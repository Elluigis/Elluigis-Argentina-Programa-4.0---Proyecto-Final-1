
document.getElementById("boton").addEventListener("mouseover", mouseOver);

document.getElementById("boton").addEventListener("mouseout", mouseOut);
function home(){
    window.location.href = "index.html";
}
function career(){
    document.location.href = "career.html"
}
function awards(){
    document.location.href ="awards.html"
}
function aboutMe(){
    document.location.href ="aboutMe.html"
}
function monstrarNum() {
  var popup = document.getElementById("numeroTelfonico");
  popup.classList.toggle("show");
}
function monstrarDir() {
    var popup = document.getElementById("direccion");
    popup.classList.toggle("show");
  }
  function monstrarMail() {
    var popup = document.getElementById("email");
    popup.classList.toggle("show");
  }
function mouseOver(){
    document.getElementById("boton").style.backgroundColor = "red";
}
function mouseOut() {
    document.getElementById("boton").style.backgroundColor = "black";
  }
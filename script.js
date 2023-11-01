window.addEventListener("load", function() {

//Audio variables
const durianAudio = document.getElementById("durian");
const markisaAudio = document.getElementById("markisa");
const buahNagaAudio = document.getElementById("buah-naga");
const nangkaAudio = document.getElementById("nangka");
const rambutanAudio = document.getElementById("rambutan");
const salakAudio = document.getElementById("salak");
const belimbingAudio = document.getElementById("belimbing");
const pepayaAudio = document.getElementById("pepaya");

//Button variables
const durianButton = document.getElementById("durianButton");
const markisaButton = document.getElementById("markisaButton");
const buahNagaButton = document.getElementById("buahNagaButton");
const nangkaButton = document.getElementById("nangkaButton");
const rambutanButton = document.getElementById("rambutanButton");
const salakButton = document.getElementById("salakButton");
const belimbingButton = document.getElementById("belimbingButton");
const pepayaButton = document.getElementById("pepayaButton");

//Audio button functions
durianButton.addEventListener("click", function () {
durianAudio.play();
});

markisaButton.addEventListener("click", function () {
markisaAudio.play();
});

buahNagaButton.addEventListener("click", function () {
buahNagaAudio.play();
});

nangkaButton.addEventListener("click", function () {
nangkaAudio.play();
});
   
rambutanButton.addEventListener("click", function () {
rambutanAudio.play();
});
   
salakButton.addEventListener("click", function (){
    salakAudio.play();
});
   
belimbingButton.addEventListener("click", function () {
    belimbingAudio.play();
});

pepayaButton.addEventListener("click", function () {
    pepayaAudio.play();
});

});
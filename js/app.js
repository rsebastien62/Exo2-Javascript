///////////////////////
/// EXO Calulatrice ///
///////////////////////

var titre = document.getElementById("page-title");

titre.innerHTML="Exo 02 JS";
titre.style.color="white";

// Création des variables et fonctions
var enter1 =  document.getElementById("enter1");
var enter2 =  document.getElementById("enter2");
var result =  document.getElementById("result");


 function addition() {
   result.innerHTML = parseInt(enter1.value) + parseInt(enter2.value);
 }

 function multiplication() {
   result.innerHTML = enter1.value * enter2.value;
 }

 function soustraction() {
   result.innerHTML = enter1.value - enter2.value;
 }

 function division() {
   result.innerHTML = enter1.value / enter2.value;
 }

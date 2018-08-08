///////////////////////
///// Story Teller /////
///////////////////////

// Phrase d'intro

document.body.style.backgroundImage = "url('img/porte.jpg')";

var nom = prompt("Bienvenue voyageur ! Quel est ton nom ?");

alert("Enchanter de faire ta connaissance " + nom + ". Prépare toi à vivre une aventure extraordinaire ! Pour une meilleur expérience je te recommande d'utiliser le navigateur Mozilla Firefox.");

// Hisoitres 
var content1 = document.getElementById("content1");
content1.style.display="block";

var dial1 = document.getElementById("dial1");
dial1.innerHTML = nom.bold() + ", tu te retrouve devant une grande et imposante porte des étoiles, que décide tu de faire ?";

// Scénario 1 
var content2 = document.getElementById("content2");
var dial2 = document.getElementById("dial2");
var choix3 = document.getElementById("choix3");
var choix4 = document.getElementById("choix4");
var choix5 = document.getElementById("choix5");
var choix6 = document.getElementById("choix6");
function choix1() {
   document.body.style.backgroundImage = "url('img/desert.jpg')";
   content1.style.display="none";
   content2.style.display="block";
   choix5.style.display="none";
   choix6.style.display="none";
   dial2.innerHTML = "Quel courage " + nom.bold() + "! Mais désormais tu es dans un désert, tu va devoir faire de la marche, il faut absolument que tu te débarrasse d'un objet sur toi. Que choisis tu d'abandonner ?";  
 }

// Scénario 2
 function choix2() {
   document.body.style.backgroundImage = "url('img/neige.jpg')";  
   content1.style.display="none";
   content2.style.display="block";
   choix3.style.display="none";
   choix4.style.display="none";
   dial2.innerHTML = nom.bold() + ", tu es un vrai trouillard ! La porte t'as aspiré alors que tu t'enfuyais. Pas de chance tu es dans les montagnes gelées et il va falloir marcher. Pas loin de toi se trouve 2 objets. Lequel prends-tu ? ";  
 }

// Scénario 3-4
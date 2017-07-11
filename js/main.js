var user = document.getElementById("user");
var jeu = document.getElementById("jeu");
var nameInput = "";
var images = document.getElementsByClassName("images");
var score = "";
var compteurOrdi = 0;
var compteurChoice = 0;
var tab = ["pierre", "feuille", "ciseaux"];
// var restartGame = document.getElementById("restart");
var computer = "computer";

// POUR QUE LE BOUTON AFFICHE LE JEU
function button() {
  nameInput = document.getElementById("nameInput").value;
  user.innerHTML = nameInput.value;
  jeu.style.visibility = "visible";
  // button.onclick.reset(game(choice));
}

//POUR REJOUER//

function time() {
  setTimeout(function restart(){
    restart.addEventListener('click', location.reload(), false);}
    , 2000);
}


// POUR VISER MON ALT
for (i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    game(this.alt);
  };
}


//ANIMATION CHANGE DE COULEURS
function colorChange(image) {
  image.style.opacity = "0.5";
}

function colorNormal(image){
  image.style.opacity = "1";
}




//ANIMATION IMAGES CHOISIE PAR JOUEUR (fonctionne pas)
// function animation() {
//   var images = document.getElementsByClassName("images");
//   var pos = 0;
//   var id = setInterval(shake, 100);
//
//   function shake() {
//     if (pos === 30) {
//       clearInterval(id);
//     } else {
//       pos++;
//       images.style.right = pos + 'px';
//       images.style.top = pos + 'px';
//     }
//   }
// }


// FONCTION DU JEU
function game(choice) {
  var ordi = tab[parseInt(Math.random() * tab.length)];
  if (compteurChoice !== 3 && compteurOrdi !== 3) {
    if (ordi === choice) {
      compteurChoice;
      compteurOrdi;
      document.getElementById("compteur").innerHTML = (score = computer + " " + compteurOrdi + "-" + nameInput + " " + compteurChoice);
    } else if (ordi === tab[0] && choice === "feuille") {
      compteurChoice++;
      document.getElementById("compteur").innerHTML = (score = computer + " " + compteurOrdi + "-" + nameInput + " " + compteurChoice);
    } else if (ordi === tab[1] && choice === "ciseaux") {
      compteurChoice++;
      document.getElementById("compteur").innerHTML = (score = computer + " " + compteurOrdi + "-" + nameInput + " " + compteurChoice);
    } else if (ordi === tab[2] && choice === "pierre") {
      compteurChoice++;
      document.getElementById("compteur").innerHTML = (score = computer + " " + compteurOrdi + "-" + nameInput + " " + compteurChoice);
    } else {
      compteurOrdi++;
      document.getElementById("compteur").innerHTML = (score = computer + " " + compteurOrdi + "-" + nameInput + " " + compteurChoice);
    }
  } else {
    if (compteurOrdi === 3) {
      document.getElementById("compteur").innerHTML = (score = "Manche terminée" + "\nGame Over" + "\n" + computer + " " + compteurOrdi + "-" + nameInput + " " + compteurChoice);
    } else {
      document.getElementById("compteur").innerHTML = (score = "Manche terminée" + "\nYou Win" + "\n" + computer + " " + compteurOrdi + "-" + nameInput + " " + compteurChoice);
      restart();
    }
  }
}







/*document.getElementById("jeu").innerHTML= game();*/

var user = document.getElementById("user");
var jeu = document.getElementById("jeu");
var nameInput = "";
var images = document.getElementsByClassName("images");
var score = "";
var compteurOrdi = 0;
var compteurChoice = 0;
var tab = ["pierre", "feuille", "ciseaux"];
var ordi = tab[parseInt(Math.random() * tab.length)];
var restartGame = document.getElementsByClassName("restart");

// POUR VISER MON ALT

for (i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    game(this.alt);
  };
}

// POUR QUE LE BOUTON AFFICHE LE JEU
function button() {
  nameInput = document.getElementById("nameInput").value;
  user.innerHTML = nameInput.value;
  jeu.style.visibility = "visible";
  // button.onclick.reset(game(choice));
}

//POUR REJOUER//
// ??

//ANIMATION IMAGES CHOISIE PAR JOUEUR

function animation(images) {
  var images = document.getElementsByClassName("images");
  var pos = 0;
  var id = setInterval(shake, 100);

  function shake() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      images.style.left = pos + 'px';
      images.style.top = pos + 'px';
    }
  }
}


// FONCTION DU JEU
function game(choice) {

  if (compteurChoice !== 3 && compteurOrdi !== 3) {
    if (ordi === choice) {
      compteurChoice;
      compteurOrdi;
      document.getElementById("compteur").innerHTML = (score = compteurOrdi + "-" + nameInput + " " + compteurChoice);
    } else if (ordi === tab[0] && choice === "feuille") {
      compteurChoice++;
      document.getElementById("compteur").innerHTML = (score = compteurOrdi + "-" + nameInput + " " + compteurChoice);
    } else if (ordi === tab[1] && choice === "ciseaux") {
      compteurChoice++;
      document.getElementById("compteur").innerHTML = (score = compteurOrdi + "-" + nameInput + " " + compteurChoice);
    } else if (ordi === tab[2] && choice === "pierre") {
      compteurChoice++;
      document.getElementById("compteur").innerHTML = (score = compteurOrdi + "-" + nameInput + " " + compteurChoice);
    } else {
      compteurOrdi++;
      document.getElementById("compteur").innerHTML = (score = compteurOrdi + "-" + nameInput + " " + compteurChoice);
    }
  } else {
    document.getElementById("compteur").innerHTML = (score = "Manche terminée" + "\nGame Over" + "\n" + compteurOrdi + "-" + nameInput + " " + compteurChoice);
    // document.getElementById("compteur").innerHTML = (score = "Manche terminée" + "\nYou Win" + "\n" + compteurOrdi + "-" + nameInput + " " + compteurChoice);
  }
}







/*document.getElementById("jeu").innerHTML= game();*/

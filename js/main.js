var user = document.getElementById("user");
var jeu = document.getElementById("jeu");
var nameInput = "";
var images = document.getElementsByClassName("images");
var score = "";
var compteurOrdi = 0;
var compteurChoice = 0;
var tab = ["pierre", "feuille", "ciseaux"];
var ordi = tab[parseInt(Math.random() * tab.length)];

// POUR VISER MON ALT

for (i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    game(this.alt);
  };
}


//ANIMATION IMAGES CHOISIE PAR JOUEUR
images.addEventListener("onmouseover", function(){
  images.style.opacity = "1";
}
)

images.addEventListener("onmouseout", function(){
  images.style.opacity = "1";
}
)


// POUR QUE LE BOUTON AFFICHE LE JEU
function button() {
  nameInput = document.getElementById("nameInput").value;
  user.innerHTML = nameInput.value;
  jeu.style.visibility = "visible";
  
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
      if (compteurOrdi === 3){
    document.getElementById("compteur").innerHTML = (score = "Manche terminée" + "\nL'ordinateur gagne" + "\n" + compteurOrdi + "-" + nameInput + " " + compteurChoice);
  }
  else {
    document.getElementById("compteur").innerHTML = (score = "Manche terminée" + "\nVous avez gagné" + "\n" + compteurOrdi + "-" + nameInput + " " + compteurChoice);
  }

  }
}






/*document.getElementById("jeu").innerHTML= game();*/

var user = document.getElementById("user");
var jeu = document.getElementById("jeu");
var nameInput = document.getElementById("nameInput");
var images = document.getElementsByClassName("images");

for (i=0; i<images.length; i++){
  images[i].onclick = function(){
     game(this.alt);
  };
}


function button(){
  user.innerHTML = nameInput.value;
  jeu.style.visibility = "visible";
}


function game(choice){
//var score = "";
var compteurOrdi = 0;
var compteurChoice = 0;

  while (compteurChoice !== 3 && compteurOrdi !== 3){

var tab = ["pierre", "feuille", "ciseaux"];
var ordi = tab[parseInt(Math.random()*tab.length)];



    if (ordi === choice){
      alert("égalité");
      alert("ordi" + " " + compteurOrdi + "-" + "vous" + " " +compteurChoice)
    }
   else if(ordi === tab[0] && choice === "feuille"){
     alert ("Vous avez gagné");
     compteurChoice ++;
     alert("ordi" + " " +compteurOrdi + "-" + "vous" + " " + compteurChoice)
   }
   else if (ordi === tab[1] && choice === "ciseaux"){
     alert ("Vous avez gagné");
     compteurChoice ++;
     alert("ordi" + " " +compteurOrdi + "-" + "vous" + " " +compteurChoice)
   }
   else if (ordi === tab[2] && choice === "pierre"){
    alert ("Vous avez gagné");
    compteurChoice ++;
    alert("ordi" + " " +compteurOrdi + "-" + "vous" + " " + compteurChoice)
   }
   else{
    alert ("Vous avez perdu");
    compteurOrdi ++;
    alert("ordi" + " " +compteurOrdi + "-" + "vous" + " " + compteurChoice)
   }
  }
  document.getElementById("compteur").innerHTML = (score = "Manche terminée" + " " + compteurOrdi + "-" + nameInput + " " + compteurChoice);
}




/*document.getElementById("jeu").innerHTML= game();*/

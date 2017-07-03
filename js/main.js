var tab = ["pierre", "feuille", "ciseaux"];
var ordi = tab[Math.trunc(Math.random()*tab.length)];
var choice = prompt("pierre, feuille ou ciseaux?");


// boucle jouer la partie 3 fois for

function game(){
  if (ordi === choice){
    alert("égalité");
  }
 else if( ){
   alert ("gagné");
 }
  else{
    alert ("perdu");
  }

}

game();

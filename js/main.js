var tab = ["pierre", "feuille", "ciseaux"];
var ordi = tab[parseInt(Math.random()*tab.length)];
var choice = prompt("pierre, feuille ou ciseaux?");
var score = "";

function game(){
  //for (i=0; i<; i++){
    if (ordi === choice){
      alert("égalité");
    }
   else if(ordi === tab[0] && choice === "feuille"){
     alert ("Vous avez gagné");
   }
   else if (ordi === tab[1] && choice === "ciseaux"){
     alert ("Vous avez gagné");
   }
   else if (ordi === tab[2] && choice === "pierre"){
    alert ("Vous avez gagné");
   }
   else{
    alert ("Vous avez perdu");
   }
  }
  return score += "Manche fini";
//}

game();

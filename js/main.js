var tab = ["pierre", "feuille", "ciseaux"];
var ordi = tab[parseInt(Math.random()*tab.length)];
var choice = prompt("pierre, feuille ou ciseaux?");
var score = "";
var compteurOrdi = 0;
var compteurChoice = 0;

function game(){

    if (ordi === choice){
      alert("égalité");
      alert(compteurOrdi + "-" + compteurChoice)
    }
   else if(ordi === tab[0] && choice === "feuille"){
     alert ("Vous avez gagné");
     compteurChoice ++;
     alert(compteurOrdi + "-" + compteurChoice)
   }
   else if (ordi === tab[1] && choice === "ciseaux"){
     alert ("Vous avez gagné");
     compteurChoice ++;
     alert(compteurOrdi + "-" + compteurChoice)
   }
   else if (ordi === tab[2] && choice === "pierre"){
    alert ("Vous avez gagné");
    compteurChoice ++;
    alert(compteurOrdi + "-" + compteurChoice)
   }
   else{
    alert ("Vous avez perdu");
    compteurOrdi ++;
    alert(compteurOrdi + "-" + compteurChoice)
   }
  }
 // return score += compteurOrdi + "-" + compteurChoice + " " +"Manche fini";
}

game();

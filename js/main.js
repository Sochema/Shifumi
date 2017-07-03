function game(){
var score = "";
var compteurOrdi = 0;
var compteurChoice = 0;

  while (compteurChoice !== 3 && compteurOrdi !== 3){

var tab = ["pierre", "feuille", "ciseaux"];
var ordi = tab[parseInt(Math.random()*tab.length)];
var choice = prompt("pierre, feuille ou ciseaux?");


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
  return score += compteurOrdi + "-" + compteurChoice + " " +"Manche fini";
}

game();

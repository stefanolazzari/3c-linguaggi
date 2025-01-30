

alert("Ciao");



//dichiarazione di funzione
function saluto(){
    alert("Ciao 3c");
}


saluto(); //chiamata alla funzione




//dichiarazione di funzione
function saluto(){
    console.log("ciao");
}
//chiamata alla funzione
saluto(); //chiamata alla funzione
saluto()
saluto()
saluto()
saluto()



//console.log(calcolo(3,6,somma));

//console.log(calcolo(3,6,moltiplizione));








// GIT    
// CONTROLLO DI VERSIONE

// GITHUB  
// CONTROLLO DI VERSIONE REMOTA


// Javascript

// Dichiarazione di una variabile:
// var : obsoleto, visibilità globale meno sicura
// let : visibilità di blocco (scope) 
// const : visibilità di blocco (scope), dichiara variabili che non possono essere riassegnate

  


 {
    let miaVariabile = 68; 
 }

 {
    var miaVariabile = 90;
 }

console.log(miaVariabile); //90

//wIUEFGLIWEUFGWIEUFGòWQIEUFWòIUF
{
const costante1 = 9.18;
}

//console.log(costante1); //9.18

//costante1 = 80; //errore 

//console.log(costante1); //errore



let a = 5;    //5
let b = 10;   //10


a = a + b;  //15


b = a - b; //5

a = a -b;

console.log("Valore di a " + a);
console.log("Valore di b " + b);




function somma(valore1,valore2){
        return valore1 + valore2;
}

function sottrazione(valore1,valore2){
    return valore1 - valore2;
}


function calcolo(valore1, valore2, tipoDiCalcolo){
        let risultato = tipoDiCalcolo(valore1,valore2);
        return risultato;
}


console.log(calcolo(70,60,sottrazione));




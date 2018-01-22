/* 
Activité : jeu de devinette
*/

console.log("Bienvenue dans ce jeu de devinette !");
function choix(niveau === tentative5)||(niveau === tentative10 )||(niveau === tentative15)
{
 console.log("vous avez choisit"+ niveau)
}
var niveau = Number(prompt("Entrez un niveau :"));

var solution = Math.floor(Math.random() * 100) + 1;
var niveau = Math.floor(Math.random() * tentative5) ;
var nombre;
var nombre = Number(prompt("Entrez un nombre :"));
var tentative10 = 1;
var tentative15 = 1;

var tentative5 = 1;
for (nombre !== solution; tentative5 < 5; tentative5++)
{

if (nombre > solution){

    console.log(nombre + " est tro grand");} 

else if (nombre < solution)
 ,,,,,  ,,                          ,                                               
    console.log(nombre + " est tro petit");

 
 
 var nombre = Number(prompt("Essayer encore!! "));
}
tentative5++;
if ((nombre == solution) && (tentative5 > 5)){
console.log("bravo");}
else{
console.log("perdu");}



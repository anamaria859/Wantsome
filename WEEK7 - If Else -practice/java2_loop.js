// 1.Scrieti o functie care accepta ca argument o valoare numerica si afiseaza 
//de atatea ori pe ecran textul: “Sunt la iteratia numarul [index]” - 
//Scrieti codul in doua variante

for(var i=0; i<=10; i++){
console.log("Sunt la iteratia numarul "+i);
}

var j=10;
while (j<=15){
    console.log("sunt la iteratia numarul "+j)
    j++;
}

// 2. Scrieti o functie care accepta ca argument un array si afiseaza in consola elementele 
//acestuia prin parcurgerea sa - Scrieti codul in doua variante


function showArray(array1){
for(var i=0; i<array1.length; i++){
    console.log("Elementul de la indexul "+i+" este "+ array1[i])
}}
showArray(['unu','doi','trei','patru'])

var array2=['dimineata', 'amiaza','seara','noapte']
var poz = 0;
while(poz < array2.length){
    console.log("elementul de la pozitia "+poz+" este "+array2[poz])
    poz++;
} 
// 3. Scrieti o functie care accepta ca argument un obiect si afiseaza in consola elementele 
//acestuia prin parcurgerea sa - scrieti codul in doua variante

function showObject(){
    var userKeys = Object.keys(user);
    var userValues = Object.values(user);
    for(var a=0; a<userKeys.length; a++){
        console.log("Proprietatea "+userKeys[a]+" are valoarea "+userValues[a])
    }
}
var user={
    name: "Ana",
    age: 30,
    height: '160 cm',
    weight: '55 kg'
}
showObject(user)

var user2={
    name: "Lemon",
    taste: "Sour",
    color: "Yellow"
}
function showObject2(){
    var propr = Object.keys(user2);
    var values = Object.values(user2);
    var b=0;
    while (b<propr.length){
        console.log("Proprietatea "+propr[b]+" are valoarea "+ values[b])
        b++;
    }
}

showObject2(user2)
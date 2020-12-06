//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com"
//sau "ovid...@test.com"

function secretEmail(email) {
  var user1 = email.slice(0, email.indexOf("@"));
  //console.log(user1)
  if (user1.length <= 3) {
    var substr1 = email.slice(0, email.indexOf("@"));
    var replace1 = email.replace(substr1, "...");
    console.log(replace1);
  } else {
    var substr1 = email.slice(4, email.indexOf("@"));
    var replace1 = email.replace(substr1, "...");
    console.log(replace1);
  }
}
secretEmail("anamaria.pal@email.com");
secretEmail("ana@email.com");
secretEmail("a@email.com");

//Ex2
//Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
// de ex: myFunction("i am superman") sa printeze "I Am Superman"

///split in arrays pe cuvinte
function capitalize(sentence) {
  var array2 = sentence.split(" ");
  for (var i = 0; i < array2.length; i++) {
    array2[i] = array2[i].charAt(0).toUpperCase() + array2[i].slice(1);
  }
  var result2 = array2.join(" ");
  console.log(result2);
}

capitalize("i am superman");

//Ex3
// Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si
//invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"

function reverse(text2) {
  var split2 = text2.split("");
  console.log(split2);

  for (var i = 0; i < split2.length; i++) {
    if (split2[i] === split2[i].toUpperCase()) {
      split2[i] = split2[i].toLowerCase();
    } else {
      split2[i] = split2[i].toUpperCase();
    }
  }
  var result3 = split2.join("");
  console.log(result3);
}
reverse("xxXyYzZZ");

//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

function concatenare(text4, number4) {
  var result4 = "";
  for (var i = 0; i < number4; i++) {
    result4 = result4.concat(text4);
  }
  console.log(result4);
}
concatenare("ana", 4);
concatenare("Wantsome", 2);

//function concatenare2(text44, number44){
//   var result44 = text44.repeat(number44)
//}console.log(result44)

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards,
// for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante

function polindrom(text5) {
  // var main = text5.split("");
  //  var rev = main.reverse();
  //console.log(rev);
  //for (var i = 0; i < main.length; i++) {
  //  if (main[i] === rev[i]) {;
  //    console.log("cuvantul este polindrom");
  //  } else {
  //     console.log("cuvantul nu este polindrom");
  //  }
  // }
  var rev = text5.split("").reverse().join("");
  console.log(rev);
  if (text5 === rev) {
    console.log("cuvantul este polindrom");
  } else {
    console.log("cuvantul nu este polindrom");
  }
}
polindrom("level");
polindrom("cat");

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri
//de valori numerice si returneaza un array care contine ca si elemente cele mai
// mari numere din fiecare array

//Ex7
// Implementati o functie care face reverse la un string

function stringRev(text7) {
  var result7 = text7.split("").reverse().join("");
  console.log(result7);
}
stringRev("matematica");
stringRev("ana maria");

//Ex8
// Implementati o functie care calculeaza factorialul unui numar

function factorial(number8) {
  var result8 = 1;
  for (var i = 1; i <= number8; i++) {
    result8 = result8 * i;
  }
  console.log(result8);
}
factorial(5);
factorial(8);
//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca
//primul se termina cu cel din urma

function endString(text9, text99) {
  var result9 = text9.indexOf(text99, text9.length - text99.length);
  console.log(result9);
  if (result9 !== -1) {
    console.log("Primul text se termina cu al doilea");
  } else {
    console.log("Primul text nu se termina cu al doilea");
  }
}
endString("matemapoctica", "poc");
endString("crocobaur", "aur");

//Ex10
// Implementati o functie care accepta doua argumente: un array si o functie de adevar.
// Functia returneaza primul element din array care trece testul specificat



//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca
//primul string contine toate literele celui de-al doilea string

function letters(primText, aldoileaText){
  for(var i=0; i<aldoileaText.length; i++){
  if(primText.indexOf(aldoileaText.charAt(i)) === -1){
    console.log('Textul nu contine toate literele')
  }else{
    console.log('Primul text contine toate literele din al doilea text')
  }
  }
}

//letters('orez','zero')
//letters('cirese','cires')
letters('pan','pain')

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare.
//Functia afiseaza fiecare element al array-ului pana cand intalneste elementul cu valoarea
//specificata
var array12 = [23, 54, 13, 69, 120];

function showElements(array12, var12) {
  if (array12.indexOf(var12) !== -1) {
    for (var i = 0; i < array12.indexOf(var12); i++) {
      console.log(array12[i]);
    }
  } else {
    for (var i = 0; i < array12.length; i++) {
      console.log(array12[i]);
    }
  }
}
showElements(array12, 69);
showElements(array12, 55);

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "",
//undefined, NaN

//The filter() method creates a new array with all elements that pass the test implemented 
//by the provided function.

function fakeval(array13) {
  var result13 = array13.filter(testArray13);
  console.log(result13);
}
function testArray13(value) {
  if (
    value !== false ||
    value !== null ||
    value !== 0 ||
    value !== "" ||
    value !== undefined ||
    value !== NaN
  ) {
    return value;
  }
}

fakeval([10, NaN, 34, "optzeci", null, 567, "ana are mere", false, 100, NaN]);

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate

//1.Scrieti o functie care verifica daca un input este sau nu de tip string

function is_string(text1) {
  if (typeof text1 === "string") {
    return true;
  } else {
    return false;
  }
}

//var result1 = typeof text1;
//return result1}
console.log(is_string("ana")); //true
console.log(is_string(123)); //false

//2.Scrieti o functie care verifica daca un string este gol sau nu

function is_empty(text2) {
  if (text2.length === 0) {
    return "String is empty";
  } else {
    return "String is not empty";
  }
}
console.log(is_empty("ana")); //string is not empty
console.log(is_empty("")); // string is empty

//3.Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:

function string_to_array(text3) {
  var result3 = text3.split(" ");
  return result3;
}
console.log(string_to_array("Robin Singh"));

//4.Scrieti o functie care transforma un string in forma abreviata:

function abbrev(text4) {
  var result4 = text4.split(" ");
  if (result4.length > 1) {
    return result4[0] + " " + result4[1].charAt(0) + ".";
  }
  return result4[0];
}
console.log(abbrev("Ana Marie"));

//5.Scrieti o functie care face prima litera a unui string sa fie de tip capital (litera mare):

function capitalize(text5) {
  var result5 = text5.charAt(0).toUpperCase();
  return result5 + text5.slice(1);
}
console.log(capitalize("ana"));

//6.Scrieti o functie care elimina un numar specificat de
//caractere pornind de la inceputul string-ului:

function remove(text6, nr6) {
  var array6 = text6.split("");

  array6.splice(0, nr6);
  var result6 = array6.join("");
  console.log(result6);
}
remove("azi este sambata", 6);

//7.Scrieti o functie care specifica daca o caracterul de la o anumita pozitie
//specificata dintr-un string este litera mare sau nu:

function caseTest(text7, nr7) {
  if (text7.charAt(nr7) === text7.charAt(nr7).toUpperCase()) {
    console.log("Litera de la pozitia " + nr7 + " este litera mare");
  } else {
    console.log("Litera de la pozitia " + nr7 + " este litera mica");
  }
}
caseTest("BumBum", 5);
caseTest("BumBum", 3);

//8.Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:

function insertText(text8, nr8, text8Toinsert) {
  var array8 = text8.split("");
  array8.splice(nr8, 0, text8Toinsert);
  var result8 = array8.join("");
  console.log(result8);
}
insertText("ana are mere", 4, "cucubau");

//9.Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:

function firstApp(firstText,secondText){
  
  var result9 = firstText.replace(secondText,'')
  console.log(result9)
}
firstApp('ana are mere si maria are mere','mere')
firstApp('unudoiunutrei','unu')

//10.Scrieti o functie care compara doua string-uri case-insensitive

function compare(firstString, secondString){
  if (firstString.toLowerCase() === secondString.toLowerCase()) {
    console.log('textele sunt la fel')
  }else{
    console.log('textele nu sunt la fel')
  }
}
compare('Ana','Ana')
compare('ANA','anA')
compare('Anna','ana')

//11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital

function uncapital(text11){
  var result11 = text11.replace(text11.charAt(0),text11.charAt(0).toLowerCase())
  console.log(result11)
}
uncapital('Ana')
uncapital('AAAAA')
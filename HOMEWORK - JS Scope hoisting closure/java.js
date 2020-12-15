//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar
//daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

function sumORmultiply(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Wrong input";
  }
  if (a !== b) {
    return a + b;
  } else return (a + b) * 5;
}

console.log(sumORmultiply(1, "s"));
console.log(sumORmultiply(78, 78));

//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau
//daca suma lor este egala cu 30
//ex testFunction(30, 30) - true
//testFunction(15,15) - true
//testFunction(10, 15) - false

function test30(a, b) {
  if ((a === 30 && b === 30) || a + b === 30) {
    return true;
  } else {
    return false;
  }
}
console.log(test30(30, 30));
console.log(test30(1, 2));
console.log(test30(12, 18));

//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze
//acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS

function stringJS(string) {
  if (string.substr(0, 2) !== "JS") {
    return "JS".concat(string);
  } else {
    return string;
  }
}
console.log(stringJS("ana"));
console.log(stringJS(""));
console.log(stringJS("JS"));

//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

function removeDuplicates(inputVal) {
  for (let i = 0; i < inputVal.length; i++) {
    let result = inputVal.replace(inputVal(i)); // use regex
  }
}

//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'///split and compare length

function longestString(text5) {
  let splitArray = text5.split(" ");
  let longestWord = "";
  for (let i = 0; i < splitArray.length; i++) {
    if (splitArray[i].length > longestWord.length) {
      longestWord = splitArray[i];
    }
  }
  return longestWord;
}

console.log(longestString("ana are struguri si mere"));
console.log(longestString("Wantsome is Awsomeeee today"));

//Ex6
//Scrieti o functie care sa aiba output-ul asta // for cu increase la retrn
// *
// * *
// * * *
// * * * *
// * * * * *

function stars(asterix) {
  let result6 = " ";
  for (let i = 0; i < 5; i++) {
    result6 += asterix;

    console.log(result6);
  }
}
stars("*");

//ex7
const negativeNumbers = [];
// append any negative numbers found in the numbers array
// into the negativeNumbers array constant variable above

function extractNegativeNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {}
}

console.log(extractNegativeNumbers([1, 2, -5, 4, -6]));

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator
//- "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function math(firstNr, secondNr, operator) {
  switch (operator) {
    case "add":
      return firstNr + secondNr;
      break;
    case "substract":
      return firstNr - secondNr;
      break;
    case "multipy":
      return firstNr * secondNr;
      break;
    case "divide":
      return firstNr / secondNr;
      break;
    default:
      return firstNr, secondNr;
  }
}
console.log(math(1, 2, "add"));
console.log(math(4, 5, "substract"));
console.log(math(3, 9, "divide"));

//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele
//si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDiv(numberToCheck) {
  if (numberToCheck % 3 === 0) {
    if (numberToCheck % 5 === 0) {
      return "BOTH";
    } else {
      return "THREE";
    }
  } else if (numberToCheck % 5 === 0) {
    return "FIVE";
  } else {
    return numberToCheck;
  }
}
console.log(isDiv(8));
console.log(isDiv(15));
console.log(isDiv(9));
console.log(isDiv(25));

//Master exercises
//Ex9
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni.
// Ora este : 20 PM : 30 : 38

//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

//ex11
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

function removeVowels(text11) {
  let array11 = text11.split('');
  for (let i = 0; i < array11.length; i++) {
    if (
      array11[i] === "a" ||
      array11[i] === "e" ||
      array11[i] === "i" ||
      array11[i] === "o" ||
      array11[i] === "u"
   ) {
      array11.splice(i, 1);
    }
  }
  let result11= array11.join('');
  return result11;
}

//function removeVowels(text11){
//  let pattern = [aeiou];
//  let result11 = text11.match(pattern);
//  console.log(result11)
//}

console.log(removeVowels("Hey I am developer"))
//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false

function isSquareNumber(number12) {}

//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele
//din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

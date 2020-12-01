//Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.
var str = "Daca te simti bine, nu te ingrijora, trece!";
//Raspuns: 
var stringPosition = str.indexOf("trece");
console.log(stringPosition); //37
var stringPosition = str.indexOf("javascript"); 
console.log(stringPosition);//-1

// Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
// Ex 2.1: Returnati toate fructele incepand de la 'Lemon'.
  var fruits = "Apple, Lemon, Plum, Kiwi";

  var slice1 = fruits.slice(20);
  console.log(slice1);// Kiwi
  var slice2 = fruits.slice(-4);
  console.log(slice2);// Kiwi
  
// Ex 3: Returnati stringul 'Plum' folosind metoda substr()
   var moreFruits = "Apple, Lemon, Plum, Kiwi";
    var substr1 = moreFruits.substr(14,4);
    console.log(substr1);//

// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.
   var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
    var replace1 = replaceName.replace('Mia Kalifa','Ana Maria')
    console.log(replace1)//Eu sunt Ana Maria, doctor docent in matematica

   var bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)"
   var replace2 = bonusName.replaceAll('Sasha','Ana Maria')
   console.log(replace2);//
   
// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
   var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
   var text1 = text.toUpperCase()
   var text2 = text.toLowerCase()
 // ??????????????

// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)
   var text1 = "Când ai un";
   var text2 = "ciocan";
   var text3 = "in mana toate lucrurile ti se par";
   var text4 = "cuie";
  var fulltext = text1.concat(' ',text2,' ', text3, ' ', text4)
   console.log(fulltext);

   
// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
  var word = "Mamaliga";
  var letterSix = word.charAt(6)
  console.log(letterSix)
  var unicodeSix = word.charCodeAt(6)
  console.log(unicodeSix)
  //word[6] - property access
 
// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
  var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
  var split1 = cars.split('|')
  console.log(split1)
  
//Big BONUS 
// Se dau variabilele de mai jos, vreau sa ajung la rezultatul "NU EXISTA INTREBARI PROASTE" fara sa modific valorile celor 2 variabile;
  var firstWord = 'Nu exista';
  var secondWord = 'raspunsuri proaste';
  var bigbonus = firstWord.concat(' ',secondWord.replace('raspunsuri','intrebari'));
  console.log(bigbonus.toUpperCase())
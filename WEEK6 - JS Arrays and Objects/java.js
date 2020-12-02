//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var arrayFirst = ['Luni', 'Marti', 'Miercuri', 'Joi', 'Vineri']
var length1 = arrayFirst.length;
console.log(length1) //5


//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];

var concat1 = array1.concat(array2);
console.log(concat1)//

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand 
//folosim metoda isArray()
var PrimaVar = [1, 2, 4, 5];
var test1 = Array.isArray(PrimaVar);
console.log(test1);
var ADouaVar = '1,2,3,4'
var test2 = Array.isArray(ADouaVar);
console.log(test2);

//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul
// "one and two and three and four and five" fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var result = numbers.join(' and ');
console.log(result) // one and two and three and four and five
var result2 = numbers.join('and');
console.log(result2)// oneandtwoandthreeandfourandfive

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];

cars.push('BMW', 'Audi');
console.log(cars)


//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.

cars.pop()
console.log(cars)
//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului

cars.unshift('Dodge')
console.log(cars)
//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array

cars.reverse()
console.log(cars); //Array(4) [ "BMW", "Dacia", "Tesla", "Dodge" ]

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand
// de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();

//var pozitie = cars.indexOf('Tesla')
//console.log(pozitie);
//var lungime = cars.length;
//console.log(lungime)
//cars.splice(2,4, 'X,Y')
//console.log(cars)

cars.splice(cars.indexOf('Tesla'), cars.length-cars.indexOf('Tesla'), 'x', 'y')
console.log(cars)


//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];

arrayNumbers.sort(function(a,b)
{return a-b;})
console.log(arrayNumbers)
arrayNumbers.reverse();
console.log(arrayNumbers)

//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l 
//returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]

  function sorting(a) {
    var result3 = a.sort();
    return result3
  }
  console.log(sorting(fruitsArray))
//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.
function multiplyByTen(a){
    var result=a*10;
    return result;
}
console.log(multiplyByTen(6));

//Ex2
//Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
function myNameIs(a){
    var name = 'Numele meu este '+ a;
    return name;
}
console.log(myNameIs('Ana'));

//Ex3 
//Scrieti o functie care sa transforme un numar in string.
function transformNumber(a){
    var num = a.toString();
    return num;
}
    console.log(transformNumber(4));

//Ex4 
//Scrieti o functie care sa returneze patratul numarului pe care-l dam ca si argument.
function square(a){
    var sq = a*a;
    return sq;
}
console.log(square(5));

//Ex5
//Scrieti o functie numita aflaViitorul care sa aiba 4 parametrii -  numele jobului, compania, in cati ani, si cati bani - ar trebui sa returnam "Eu voi fi job in x ani la compania y si voi face z bani pe ora"
//Chemati/invocati/apelati acea functie de 3 ori cu diferite argumente.
function future(job, company, years, money){
    var prop = 'Eu voi fi '+ job + ' in ' + years + ' ani la compania ' + company + ' si voi face ' + money + ' pe ora'
    return prop;
}
console.log(future('FE', 'Endava', 2, '50 EUR'));
//Ex6
//Scrieti o functie care sa calculeze cati ani are o pisica in ani pisicesti avand in vedere ca 1 an de om = 7 ani de pisica.
// functia are 1 singur parametru - deci va accepta 1 singur argument.
// Rezultatul trebuie sa fie "Pisica mea are xx ani in ani pisicesti"
//BONUS - adaugati un alt parametru care reprezinta varsta noastra si obtinem la final varsta pisciii relatata la varsta noastra.
function catYears(catAge){
    var age = catAge*7;
    return 'Pisica mea are ' +age + ' ani in ani pisicesti';
}
console.log(catYears(4));
//Ex7
// Vreau sa scriu o functie ce sa calculeze pentru urmatorii X ani cate cani de cafea voi bea
// Functia accepta ca parametrii years si coffePerDay.
// Rezultatul va fi "In urmatorii X ani voi bea in total Y cani de cafea"
function coffee(years, coffeePerDay){
    var qty = years * coffeePerDay *365;
    return 'In urmatorii '+ years+' ani voi bea in total '+qty+' cani de cafea. '
}
console.log(coffee(2,3));
//EX8 BONUS 
// Faceti 2 functii una calculateCelsiusToFarenheit() si una calculateFarenheitToCelsius() unde sa facem conversia dintre celsius si farenhite.
// rezultatul trebuie sa fie "X grade Celsius reprezinta Y grade Farenhite"
// folositi https://www.mathsisfun.com/temperature-conversion.html ca si referinta pentru calcul.

function calculateCelsiusToFarenheit(celsius){
var tempf = (celsius/5*9)+32
return celsius+ ' grade Celsius reprezinta '+tempf+' grade Fahrenheit'
}
console.log(calculateCelsiusToFarenheit(100));


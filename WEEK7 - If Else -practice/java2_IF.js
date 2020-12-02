// 1. Scrieti o functie de tip named function denumita greatestNrBetween care:
// - Primeste ca argumente doua numere
// - Returneaza numarul care este mai mare
// Apelati functia de doua ori si afisati pe ecran textul: “Numarul mai mare dintre 
//5 si 10 este 10“
function greatestNrBetween(firstNr, secondNr){
    if(firstNr < secondNr){
        console.log("numarul mai mare dintre"+" "+firstNr+" si "+secondNr+" este "+secondNr)
    }else if(firstNr===secondNr){console.log("Numerele sunt egale")}    
    else{console.log("numarul mai mare dintre"+" "+firstNr+" si "+secondNr+" este "+firstNr)}
}
greatestNrBetween(7,4)
greatestNrBetween(10,100)
greatestNrBetween(5,5)

//2.Scrieti o functie de tip function expression asociata cu numele helloWorldInLang care:
// - Primeste ca argument codul unei limbi: “en”, “es”, “de”
// - Returneaza “Hello World” pentru limba corespunzatoare ( cel putin 3 limbi )
// - Daca limba nu este specificata, trebuie sa returneze textul pentru limba engleza
// Apelati functia pentru fiecare caz in parte.

var helloWorldInLang = function (codLang){
switch(codLang){
    case 'en':
        console.log("Hello World");
        break;
    case 'ro':
        console.log("Salutare Lume");
        break;
    case 'it':
        console.log("Ciao Tutti");
        break;
    default:
        console.log("Hello World");
}
}
helloWorldInLang('en')
helloWorldInLang('ro')
helloWorldInLang('es')

// 3. Scrieti o functie numita pluralizeWord care:
// - accepta doua argumente: un substantiv in engleza si un numar
// - returneaza numarul si forma de plural corespunzatoare substantivului,
// precum: “5 cats”, “1 dog”
// - adaugati cateva cazuri particulare pentru cuvinte precum “sheep” sau “geese” 

function pluralizeWord (subst, number){
    if(number === 1){console.log(number +' '+subst)}
    else if(number === 0){console.log('no '+subst+'s')}
    else if(number > 1){
        if(subst==="goose"){
        console.log(number+ ' '+'geese')}
        if(subst ==='fox'){console.log(number+' '+'foxes')}
        else{console.log(number+ ' '+subst+'s')}
    }
    
}
pluralizeWord('dog',5)
pluralizeWord('dog',1)
pluralizeWord('cat',0)

// 4.  Scrieti o functie care accepta ca argument venitul anual al unui angajat in dolari 
//(ex: $30,000) si calculeaza taxa corespunzatoare considerand urmatoarele criterii:
// - daca angajatul castiga anual o suma mai mica de $30,000, taxa este 0%
// - daca venitul anual se situeaza intre $50,000 - $99,999, taxa calculata trebuie sa fie 35%
// - pentru venit mai mare de $100,000, taxa se calculeaza ca procentaj de 40%
// Returnati un text care sa aiba un format asemanator: “Pentru un venit anual de x, aveti de
// platit taxe in valoare de y”

function taxes(income){
    if (income<=50000){
        console.log("Pentru un venit anual de "+ income+" USD, aveti de platit taxe in valoare de 0 USD.")
    } else if(income>50000 && income<=99999) {
        var tax = income * 0.35;
        console.log("Pentru un venit anual de "+income+" USD, aveti de platit taxe in valoare de "+tax+" USD")
    } else {
        var tax = income * 0.4;
        console.log("Pentru un venit anual de "+income+" USD, aveti de platit taxe in valoare de "+tax+" USD")
    }
}
taxes(100)
taxes(1000000)
taxes(123456)
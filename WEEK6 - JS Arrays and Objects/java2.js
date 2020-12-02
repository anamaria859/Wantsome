// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name
var car = {
    name: 'Tesla',
    wheels: 4,
};
car.name='BMW'
console.log(car)
delete car.wheels
console.log(car)
//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"
var user={
    name: "Bubu",
    age: 5,
    gender: 'M',
    location: 'iasi',
}
var keys = Object.keys(user);
console.log(keys)
var upperkeys = keys.map(keys=>keys.toUpperCase())
console.log(upperkeys)

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare
// impreuna cu a doua valoare.
var kid={
    name: "Bibi",
    age: 4,
    sayHello: function(){return(kid.name +' '+ kid.age)},
}
console.log(kid.sayHello())

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil
// intr-o alta variabila
myGarden={
    size: '100 mp',
    type: 'flowers'
}
var myGarden2 = Object.assign({}, myGarden)
console.log(myGarden2)

// Pe obiectul nou adaugam 2 noi proprietati

myGarden2.owner = 'Coco';
myGarden2.forsale = 'Yes';
console.log(myGarden2)

// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte 
//si salvati-l sub un nume nou.
myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  }

  var merged = {...myGarden, ...myHouse}
  console.log(merged)
 
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  
  
  var profile={
      adult: {
          name: 'Ion',
          sex: 'm'
      },
      kid: {
          height: '100 cm',
          age: 10
      }
  }
  var chei = Object.keys(profile.adult)
  console.log(chei)

  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si 
  //proprietatea2 apartin obiectului x"

var joined = chei.join(', ')
  console.log('proprietatile'+' "'+joined+'" '+'apartin obiectului adult')


  //Ex6
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  }
  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  myObject.alfabetic = function(){
      var names = Object.values(myObject);
      return names.sort()}
      console.log(myObject.alfabetic())
  
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.

  function Carti(title, author, year){
      this.title = title;
      this.author = author;
      this.year = year;
  }

  var mybook1 = new Carti('Pisica lui Dalai Lama', 'David Michie', 2020);
  var mybook2 = new Carti('Ochiul Lumii','Robert Jordan', 2018);
  var mybook3 = new Carti('Cianura pt un suras','Rodica Brasoveanu',2001)
  
  
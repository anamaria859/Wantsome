//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor 
de la 1 pana la valoarea specificata
*/

const sumOfNumbers = val1 => { 
    if(typeof val1  !== 'number'){
        return 'Parametrul trebuie sa fie un numar'
    }
    let result = 0;
    for(let i = 1; i<=val1; i++ ){

    result = result + i ;
    }
    return result;
    
} 
console.log(sumOfNumbers(5))
console.log(sumOfNumbers('1'))

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din 
acel string.
*/
const longest = sentence =>{
    if(typeof sentence !== 'string'){
        return 'Parametrul trebuie sa fie tip text'
    }

    let words = sentence.split(" ");
    let longestWord = "";
    for(let i=0; i<words.length; i++){
        const currentWord = words[i];
        if (currentWord.length>longestWord.length){
            longestWord = currentWord;
        }
    }
    return longestWord;
}

console.log(longest('ana are mere si struguri'))
/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

const reverseString = textToReverse => {
    if(typeof textToReverse !== 'string'){
        return "Please input a string"
    }

    let textToArray = textToReverse.split('');
    let reversedArray = textToArray.reverse();
    let result = reversedArray.join('')
    return result;

}
console.log(reverseString('cioca-boca'))
console.log(reverseString(345))


/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta 
cu urmatoarea litera din alfabet
*/

const replaceLetter = stringTransform => {
    if (typeof stringTransform !== 'string'){
        return 'Please input a string'
    }

    let newArray = [];

    for(let i = 0; i< stringTransform.length; i++){
        if(stringTransform.charCodeAt(i) === 90){
            newArray.push(String.fromCharCode(stringTransform.charCodeAt(65)))
        }

        if(stringTransform.charCodeAt(i) === 122){
            newArray.push(String.fromCharCode(stringTransform.charCodeAt(97)))
        }

        newArray.push(String.fromCharCode(stringTransform.charCodeAt(i)+1))
        
    }    
    let replacedLetters= newArray.join('');
    return replacedLetters;
}
console.log(replaceLetter('abc'))
console.log(replaceLetter('ZZ'))





/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste 
la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

const convertToTime = time =>{
    if(time < 60){
        return ('0 : '+time)
    } else {
        let minutes = time%60;
        return (~~(time / 60) + ' : '+ minutes)
    }
}
console.log(convertToTime(123))
console.log(convertToTime(34))

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu
 toate literele ordonate alfabetic
*/

const alphabetical = text6 => {
    let array6 = text6.split('');
    array6.sort();
    let result6 = array6.join('');
    return result6;

}

console.log(alphabetical('nckdsj'))
console.log(alphabetical('azaza'))

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa
 fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/
const testChar = text7 => {
    let array7 = text7.split('');
    for(let i = 0; i < array7.length; i++){
        if (array7[i] === '+'){
            continue;
        } else if (array7[i-1] === '+' && array7[i+1] === '+') {
            return true;
        }  
        else{
            return false;
        }
    }
}
console.log(testChar('+a+b+c+'))
console.log(testChar('+ab+c+d+'))
console.log(testChar('++++1++'))


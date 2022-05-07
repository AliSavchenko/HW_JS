// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let i = 1;
let result = 1;
while (i<=10){
    result = result *2;
    i++
}
console.log(result)


// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const problem = function(abc){
    return 2**abc
}
console.log(problem(10))

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let smile = ':)'
let script = ' '
for(let i = 1; i<=5; i++){
    script+=smile
    console.log(script)
}


// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows){
    let script = ' '
    for(let i = 1; i<=numberOfRows; i++){
        script+=stroka
        console.log(script)
    }   
}
printSmile(':)', 5)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

// Вариант 1

const getWordStructure = function(word){
    let numberOfVowels = 0;
    let numberOfConsonants = 0;
    let vowels=['A','a','E','e','I','i','O','o','U','u','Y','y'];
    let consonants=['B','b','C','c','D','d','F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];

        for(i = 0; i < word.length; i++){
            for(v = 0; v < vowels.length; v++){
                if(word[i] === vowels[v]){
                    numberOfVowels++;
                    break;
                }
            }
          
            for(c = 0; c < consonants.length; c++){
                if(word[i] === consonants[c]){
                    numberOfConsonants++;
                    break;
            }
        }
    }
    console.log("Слово " + word + " состоит из " + numberOfVowels + " гласных и " + numberOfConsonants + " согласных")
}
getWordStructure('Check-list');

// Вариант 2

const getWordStructure2 = function(word){
    let numberOfVowels = 0;
    let numberOfConsonants = 0;
    let vowels=['A','a','E','e','I','i','O','o','U','u','Y','y'];
    let consonants=['B','b','C','c','D','d','F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z'];

    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
          numberOfVowels++;
        } else if (consonants.includes(word[i])) {
          numberOfConsonants++;
        }
      }
        
    console.log("Слово " + word + " состоит из " + numberOfVowels + " гласных и " + numberOfConsonants + " согласных")
}
    getWordStructure2("Case");

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrom(str){
    str = str.toLowerCase();
    const len = str.length;
    
    for(let i = 0; i < len/2; i++){
        if(str[i] !== str[len -1 -i]){
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(isPalindrom('ASSA'))
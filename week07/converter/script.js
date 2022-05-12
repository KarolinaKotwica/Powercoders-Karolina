/* 
    Write a function to convert from arabic (normal) numbers to Roman Numerals. The Romans wrote numbers using letters: I, V, X, L, C, D, M. There is no need to be able to convert numbers larger than about 3000.

    Example: 7 returns VII
*/

let convertButton = document.getElementById('convert');
let valueOfInput = document.getElementById('arabic').value;
let romanField = document.getElementById('roman');

convertButton.addEventListener('click', () => {
    romanField.textContent = toRoman(valueOfInput);
});

function toRoman(value) {
    let
        numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        letters = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
        roman = '',
        numb = value,
        i;

    if (value < 1) {
        return '';
    }
    if (value > 3999) {
        return 'N';
    }

    for (i = 0; i < numbers.length; i++) {
        while (numb >= numbers[i]) {
            roman += letters[i];
            numb -= numbers[i];
        }
    }

    return roman;
}

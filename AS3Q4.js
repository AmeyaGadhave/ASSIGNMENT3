function countVowelsAndConsonants(str) {
    let vowels = 'AEIOUaeiou';
    let vowelCount = 0;
    let consonantCount = 0;
    
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) { // Check if the character is a letter
            if (vowels.includes(char)) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }
    
    console.log(`Vowels: ${vowelCount}`);
    console.log(`Consonants: ${consonantCount}`);
}

let myString = "Artificial Intelligence is amazing!";
countVowelsAndConsonants(myString);

function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}


let sentence = "I love Javascript programming!";
let correctedSentence = correctfn(sentence, "Javascript", "JavaScript");

console.log(correctedSentence); 

function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}

// Example usage:
let text = "This is a sample paragraph with multiple words.";
console.log(countWords(text)); 

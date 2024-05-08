function findAllOccurrences(str, word) {
    let indices = [];
    let index = -1;
    
    // Loop through the string until no more occurrences are found
    while ((index = str.indexOf(word, index + 1)) !== -1) {
        indices.push(index);
    }
    
    return indices;
}

// Example usage:
let sentence = "This is a simple sentence with a word.";
let searchWord = "a";

let occurrences = findAllOccurrences(sentence, searchWord);
console.log("Index positions of '" + searchWord + "' in the sentence:");
console.log(occurrences);
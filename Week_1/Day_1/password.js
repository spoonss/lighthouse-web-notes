var args = process.argv[2]
function obfuscate(word){
    var finalWord = ""
    for(i = 0; i < word.length; i++){
        if(word[i] === "a"){
        console.log(paaas);
          finalWord += 4;
        } else if(word[i] === "e"){
            finalWord += 3;
        } else if(word[i] === "o"){
            finalWord += 0;
        } else if(word[i] === "l"){
            finalWord += 1;
        } else {
            finalWord += word[i]
        }
    }
    return finalWord
}

console.log(obfuscate(args));
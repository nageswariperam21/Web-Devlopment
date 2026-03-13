function  longwords(words){
    return words.filter(function(word){
        return word.length>5;
    });
    }
    let wordlist=["apple","anjur","dargon"];
    console.log(longwords(wordlist));
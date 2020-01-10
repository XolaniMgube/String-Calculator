function add(string){

    // Global variables
    var sum = 0;
    var delimiters = /,|\n|\/|\W|[a-zA-Z]|/;
    var negativeIntegers = /-\d+?/g //use g to output every match that is found
    var greaterThan1000 = /[1-9]\d{3,}/;
    var invalidString = /\s(?=\/\/)|\d(?=\/\/)|\W$/;


    // Strings that start with 2 forward slashes
    if (/\/\/\d+/.test(string) == true){
        var beforeNewline = string.match(/(?<=\/\/).*?(?=\n)/g)[0]
        var afterNewline = string.match(/(?<=\n).*/g)[0]

        afterNewline = afterNewline.split(beforeNewline);

        for (var j = 0; j < afterNewline.length; j++){
            sum += parseInt(afterNewline[j]); 
        }
        return sum;
    }


    //Strings that start with 2 forward slashes and square brackets
    RegExp.escape = function escapingRegexCharacters(regexCharacters){
        return regexCharacters.replace(/[*&^$+\[\]\{\}\\\/\(.\)]/g, '\\$&');
    }

    if(string.includes("//[")){

        var delimiterWithBrackets = string.match(/(?<=\/\/).*(?=\n)/g)[0]
        var outerBracketsRemoved = delimiterWithBrackets.match(/(?<=\[).*(?=\])/g)[0]
        var delimiterWithoutBrackets = outerBracketsRemoved.replace(/\]\[/g, '|')
        var delimiter = new RegExp(RegExp.escape(delimiterWithoutBrackets), 'g')
        var numSection = string.match(/(?<=\n).*/g)[0]
        var splitString = numSection.replace(delimiter, ',').split(',')

        for (var x = 0; x < splitString.length; x++){
            sum += parseInt(splitString[x])
        }
            return sum
    }


    // Condition for Negative Numbers
    if (string.match(negativeIntegers)){
        throw Error("negatives not allowed " + string.match(negativeIntegers))
    }


    // Ignoring numbers that are greater than 1000
    if (greaterThan1000.test(string) == true){
        var oneThousand = string.match(greaterThan1000)
        string = string.replace(oneThousand,0)
    }


    // Invalid String
    if (invalidString.test(string) == true){
        throw Error("invalid input");
    }


    // Spliting string by the Delimiter variable
    string = string.split(delimiters);


    // Adding the numbers that are in the string
    for (var i = 0; i < string.length; i++){
        if(string[i] == ""){
            string[i] = 0;
        }
        sum += parseInt(string[i]);
    }
    return sum;
}

module.exports = {
    add
}
function add(numstring){

    let sum=0;
    RegExp.escape = function escapingRegexCharacters(regexCharacters){
        return rege xCharacters.replace(/[*&^$+\[\]\{\}\\\/\(.\)]/g, '\\$&');
    }

    if(numstring.startsWith("//[")){

    let delimiterWithBrackets = numstring.match(/(?<=\/\/).*(?=\n)/g)[0]
    console.log(delimiterWithBrackets, 'this is delimiter with brackets')
    let delimiterWithoutOuterBracket = delimiterWithBrackets.match(/(?<=\[).*(?=\])/g)[0]
    console.log(delimiterWithoutOuterBracket, "this is delimiter without out brackets")
    let delimiterWithoutBrackets = delimiterWithoutOuterBracket.replace(/\]\[/g, '|')
    console.log(delimiterWithoutBrackets, 'delimiter without brackets')
    let delimiter = new RegExp(RegExp.escape(delimiterWithoutBrackets), 'g')
    console.log(delimiter, 'this is regex delimiter')
    let numSection = numstring.match(/(?<=\n).*/g)[0]
    console.log(numSection, 'this is the number section')
let splitString = numSection.replace(delimiter, ',').split(',')
console.log(splitString,'this is a splited string')
for(let i=0; i<splitString.length; i++){
    sum += Number(splitString[i])
}
return sum
    }
    
}
console.log(add("//[abc][777][:(]\n1abc27773:(1"), 'should be 7')
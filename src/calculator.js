function add(string){
    var sum = 0;
    
    var delimiters = /,|\n|(?<=\/\/).*?(?=\n)|\/|1000*|\W|[a-zA-Z]|/;

    // console.log(/\s(?=\/\/)/.test(string))
    // console.log(string.match(/\s(?=\/\/)/))

    var invalidString = /\s(?=\/\/)|\d(?=\/\/)/;

    if (invalidString.test(string) == true){
        return "invalid string";
    }

    var negativeInt = /-\d+?/g //use g to output every match thano typet is found

    if (/\/\/\d+/.test(string) == true){
        var beforeNewline = string.match(/(?<=\/\/).*?(?=\n)/g)[0]
     
        var afterNewline = string.match(/(?<=\n).*/g)[0]

        afterNewline = afterNewline.split(beforeNewline);

        for (var j = 0; j < afterNewline.length; j++){
            sum += parseInt(afterNewline[j]); 
        }

        return sum; 
    }

    if (string.match(negativeInt)){
        throw new Error ("negatives not allowed ") + string.match(negativeInt)
    }

    string = string.split(delimiters);
    
    for (var i = 0; i < string.length; i++){

        if (string[i] == ""){
            string[i] = 0;
        }

        sum += parseInt(string[i]);
    }


    return sum;
    
}
//console.log(add("//444\n14442"))
//console.log(add("//[abc][777][:(]\n1abc27773:(1"))
//console.log(add("//;\n1000,1;2"))
//console.log(add("//;\n1000;1;2;"));
// console.log(add("1,2,3//;\n1000,1;2"))
// console.log(add(" //;\n1000,1;2"))


//return "Negative numbers are not allowed " + string.match(negativeInt);



module.exports = {
    add
}
function add(string){
    var sum = 0;

    var delimiters = /,|\n|(?<=\/\/).*?(?=\n)|\/|1000*|\W|[a-zA-Z]|/;
    var negativeInt = /-\d+?/g //use g to output every match that is found
    var invalidString = /\s(?=\/\/)|\d(?=\/\/)/;


    string = string.split(delimiters);
    console.log(string)

    for (var i = 0; i < string.length; i++){
        if (string[i] == ""){
            string[i] = 0;
        }
        sum += parseInt(string[i]);
    }
























    // Condition for Negative Numbers
    if (string.match(negativeInt)){
        throw Error("negatives not allowed " + string.match(negativeInt))
    } 
     

    if (invalidString.test(string) == true){
        return "invalid string";
    }

    
    
    //Setting delimiters for strings that start with 2 //
    if (/\/\/\d+/.test(string) == true){
        var beforeNewline = string.match(/(?<=\/\/).*?(?=\n)/g)[0]
        // console.log(beforeNewline)
     
        var afterNewline = string.match(/(?<=\n).*/g)[0]
        //  console.log(afterNewline)
        afterNewline = afterNewline.split(beforeNewline);

        for (var j = 0; j < afterNewline.length; j++){
            sum += parseInt(afterNewline[j]); 
        }

        // console.log(afterNewline)

        return sum; 
    }

    //Setting delimiters for string that start with 2// and [
    if (/\/\/\[+/.test(string) == true){
        var before = (string.match(/(?<=\[).*?(?=\])/g))[0];
         console.log(before)

        var after = string.match(/(?<=\n).*/g)[0];
        console.log(after)

       

        after = after.split(before)

        console.log(after)

        for(var k = 0; k < after.length; k++){
            sum += parseInt(after[k])
        }

        return sum
        
    }


    return sum;
   
    
}

// console.log(add("//444\n14442"))
// console.log(add("//[abc][777][:(]\n1abc27773:(1"))
// console.log(add("//;\n1000,1;2"))
// console.log(add("//;\n1000;1;2;"));
// console.log(add("1,2,3//;\n1000,1;2"))
// console.log(add("-1,-2,3,4"))
console.log(add("//;\n1000,1;2"))





// module.exports = {
//     add
// }
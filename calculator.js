function add(string){
    var sum = 0;
    
    var delimiters = /,|\n|(?<=\/\/).*?(?=\n)|\/|1000*|\W|[a-zA-Z]|/;


    if (string.includes("//") == true){
        var beforeNewline = string.match(/(?<=\/\/).*?(?=\n)/g)[0]
        console.log(beforeNewline + " this is the delimiter")
     
        var afterNewline = string.match(/(?<=\n).*/g)[0]
        console.log(afterNewline, " this is the after new line")

        // var stringSplit = afterNewline.replace(beforeNewline, ",").split(",")
        // console.log(stringSplit)

        afterNewline = afterNewline.split(beforeNewline);
        console.log(afterNewline, "newline")

        //string = string.split()
        
    }

    var invalidString;

    var negativeInt = /-\d+?/g //use g to output every match thano typet is found
    
    if (string.match(negativeInt)){
        //return "Negative numbers are not allowed " + string.match(negativeInt);
        throw new Error("negative numbers are not allowed")
    }

    
    string = string.split(delimiters);

    console.log(string)
    
    for (var i = 0; i < string.length; i++){

        if (string[i] == ""){
            string[i] = 0;
        }

        sum += parseInt(string[i]);
    }


    return sum;
}
console.log(add("//a\n1a2"))
console.log(add("1,2,3,4"))
console.log(add("-2"))





module.exports = {
    add
}
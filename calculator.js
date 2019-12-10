function add(string){
    var sum = 0;

    //var newDeli = /(?<=\/\/).*?(?=\n)/;

   //var newDeliValue = string.match(newDeli);

  

    var four = 4;

    var delimiters = /,|\n|(?<=\/\/).*?(?=\n)|\/|1000*|\W|[a-zA-Z]|/;

    var invalidString;

    var negativeInt = /-\d+?/g //use g to output every match thano typet is found
    no type

    

    if (string.match(negativeInt)){
        return "Negative numbers are not allowed " + string.match(negativeInt);
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
console.log(add("//;\n1000;142;"))
 //console.log(add("-2"))





module.exports = {
    add
}
function add(string){
    var sum = 0;

    //var newDeli = /(?<=\/\/).*?(?=\n)/;

    //var newDeliValue = string.match(newDeli);

    var delimiters = /,|\n|(?<=\/\/).*?(?=\n)|\//;

    var negativeInt = /-\d+?/g //use g to output every match that is found

    if (string.match(negativeInt)){
        return "Negative numbers are not allowed " + string.match(negativeInt);
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
console.log(add("-1,-2,3,4"))
 //console.log(add("-2"))





module.exports = {
    add
}
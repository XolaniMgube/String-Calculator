let calculatorTest = require("../src/calculator.js")

let add = calculatorTest.add

describe("Adds numbers in a string", () =>{
    it("#1.1 - return 0 if there is nothing inside the string", () =>{
        expect(add("")).toBe(0);
    })

    it("#1.2 - Returns 1 if the string has '1' only", () =>{
        expect(add("1")).toBe(1);
    })

    it("#1.3 - Returns 2 if the string is '1,1'", () =>{
        expect(add("1,1")).toBe(2);
    })

    

    it("#2 - string('1,2,3,4' will return 10", () =>{
        expect(add("1,2,3,4")).toBe(10);
    })



    it("#3 - treats \n as a delimiter", () =>{
        expect(add("1\n2,3")).toBe(6);
    })



    it("#4.1 - treats ; as a delimiter", () =>{
        expect(add("//;\n1;2")).toBe(3);
    })

    it("#4.2 - treats 4 as a delimiter", () =>{
        expect(add("//4\n142")).toBe(3);
    })


    
    it("#5 - does not work if there are negative integers", () =>{
        expect(function(){add("-1,-2,3,4")}).toThrow(Error("negatives not allowed -1,-2"));
    })



    it("#6 - ignores numbers >1000", () =>{
        expect(add("//;\n1000,1;2")).toBe(3);
    })


    it("#7 - supports delimiters of any length", () =>{
        expect(add("//***\n1***2***3")).toBe(6);
    })


    it("#8.1 - before newline default delimiter", () =>{
        expect(add("//[:D][%]\n1:D2%3")).toBe(6);
    })

    it("#8.2 - before newline default delimiter", () =>{
        expect(add("//[***][%%%]\n1***2%%%3")).toBe(6);
    })

    it("#8.2 - before newline default delimiter", () =>{
        expect(add("//[(-_-')][%]\n1(-_-')2%3")).toBe(6);
    })

    it("#8.3 - before newline default delimiter", () =>{
        expect(add("//[abc][777][:(]\n1abc27773:(1")).toBe("thats cool");
    })



    it("#9.1 - invalid input", () =>{
        expect(function(){add("//;\n1000;1;2;")}).toThrow(Error("invalid input"));
    })

    it("#9.2 - invalid input", () =>{
        expect(function(){add(" //;\n1000,1;2")}).toThrow(Error("invalid input"));
    })

    it("#9.3 - invalid input", () =>{
        expect(function(){add("1,2,3//;\n1000,1;2")}).toThrow(Error("invalid input"));
    })
 
});


let calculatorTest = require("../calculator.js")

let add = calculatorTest.add

describe("Adds numbers in a string", () =>{
    it("Displays 0 if there is nothing inside the string", () =>{
        expect(add("")).toBe(0);
    })

    it("Returns 1 if the string has '1' only", () =>{
        expect(add("1")).toBe(1);
    })

    it("Returns 2 if the string is '1,1'", () =>{
        expect(add("1,1")).toBe(2);
    })

    

    it("string('1,2,3,4' will return 10", () =>{
        expect(add("1,2,3,4")).toBe(10);
    })

    it("treats \n as a delimiter", () =>{
        expect(add("1\n2,3")).toBe(6);
    })



    it("does not work if there are negative integers", () =>{
        expect(add("-1,-2,3,4")).toBe("Negative numbers are not allowed -1,-2");
    })
});


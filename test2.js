var fs = require("fs");
var inputArray = fs.readFileSync("Input.txt").toString();
var splitChars = "";
inputArray = inputArray.split(splitChars);

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

function checkCharacter(inputArray) {
    return inputArray == Character;
}

class node{    
    constructor(Character, numberOfCharacter) {
        this.Character = Character;
        this.numberOfCharacter = numberOfCharacter;
        this.binary;
        this.LeftChild;
        this.rightChild;
        }
}

var unique = inputArray.filter(onlyUnique);
var number=[];

var x = 0;

for(var Character of unique){

    const node = new node(Character,(inputArray.filter(checkCharacter)).length);
    x++;
    
    var x = unique.indexOf(Character);
    number[x] = (inputArray.filter(checkCharacter)).length;
}




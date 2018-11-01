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

function bubbleSort(uniqueArray, numberArray){
    var done= false;
    while(!done){
        done=true;
        for(var i= 1; i< numberArray.length; i++){
            if(numberArray[i-1]< numberArray[i]){
                done=false;
                var temp = numberArray[i-1];
                var temp2 = uniqueArray[i-1];
                numberArray[i-1]=numberArray[i];
                uniqueArray[i-1]=uniqueArray[i];
                numberArray[i]=temp;
                uniqueArray[i]=temp2;
            }
        }
    }    
    return [numberArray, uniqueArray];    
}

var unique = inputArray.filter(onlyUnique);
var number=[];

for(var Character of unique){
    var x = unique.indexOf(Character);
    number[x] = (inputArray.filter(checkCharacter)).length;
}

//console.log(unique[0]);

var bubbleout= bubbleSort(unique,number);



//node = [numberofCharacters , Character , binary , Parent , leftChild , rightchild]

function node(numberofCharacters, character , binary ,parent , leftChild , rightchild ) {
    this.numberofCharacters = numberofCharacters;
    this.character = character;
    this.binary = binary;
    this.parent = parent;
    this.leftChild = leftChild;
    this.rightchild = rightchild;
}

var nodes = [];

for(var i = 0; i< bubbleout[0].length;i++){
nodes[i] = new node(bubbleout[0][i] , bubbleout[1][i] , '' , '' ,'' ,'');
}
console.log(nodes[2].numberofCharacters);

//huffman


var final=[];
var sum = [];
var sumChar = [];

/*
for(var i = bubbleout[0].length-1; i > 0;i--){

    //console.log(bubbleout[0][i]);
    //console.log(bubbleout[0][i-1]);
    sum[i] = bubbleout[0][i] + bubbleout[0][i-1];
    sumChar[i] = bubbleout[1][i] + bubbleout[1][i];
    //console.log(sum[i]);
    //console.log(sumChar[i]);

    final.push([[0,bubbleout[1][i]],[1,bubbleout[1][i]]]);
    
    bubbleout[0][i-1]=bubbleout[0][i-1] + bubbleout[0][i];
    bubbleout[1][i-1]=bubbleout[1][i-1] + bubbleout[1][i];
    


}
*/
//console.log(bubbleout);



let writeStream = fs.createWriteStream('Output.txt');


writeStream.on('finish', () => {  
    console.log('Wrote all data to file');
});
writeStream.end();  




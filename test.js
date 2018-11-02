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

function node(numberofCharacters, character , binary ,parent , leftChild , rightchild ) {
    this.numberofCharacters = numberofCharacters;
    this.character = character;
    this.binary = binary;
    this.parent = parent;
    this.leftChild = leftChild;
    this.rightchild = rightchild;
}

var unique = inputArray.filter(onlyUnique);
var number=[];

for(var Character of unique){
    var x = unique.indexOf(Character);
    number[x] = (inputArray.filter(checkCharacter)).length;
}

//console.log(unique[0]);

var bubbleout= bubbleSort(unique,number);



var nodes = [];

for(var i = 0; i< bubbleout[0].length;i++){
nodes[i] = new node(bubbleout[0][i] , bubbleout[1][i] , '' , '' ,'' ,'');
}
//console.log(nodes[2].numberofCharacters);

//huffman

for(var i = nodes.length-2; i >= 0;i-=2){
    if(i>=0 && nodes[i].parent==''){

    var newNodeNumber = nodes[i+1].numberofCharacters + nodes[i].numberofCharacters;
    var newNodeCharacter = nodes[i+1].character + nodes[i].character;
    var newNodeLeftChild = nodes[i+1].character;
    var newNodeRightChild = nodes[i].character;

    var x = i-1;
    var check = false;
    for(var x = 0; x<nodes.length;x++){
        if(nodes[x].numberofCharacters <= newNodeNumber && check==false){    
            nodes.splice(x,0, new node(newNodeNumber , newNodeCharacter , '' , '' ,newNodeLeftChild ,newNodeRightChild));
            i++;  
            nodes[i+1].parent = nodes[x].character;
            nodes[i].parent = nodes[x].character; 
            check=true;
        } 
    }



    }
    
}


console.log(nodes.length);
for(var i = nodes.length-1; i>= 0; i--){
    console.log("Character " + nodes[i].character + " Number " + nodes[i].numberofCharacters + " Parent " + nodes[i].parent + " leftchild " + nodes[i].leftChild+ " rightchild " + nodes[i].rightchild);
}



let writeStream = fs.createWriteStream('Output.txt');


writeStream.on('finish', () => {  
    

    console.log('Wrote all data to file');
});
writeStream.end();  




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
    var bubbleout = [numberArray, uniqueArray];
    return bubbleout;
}

var unique = inputArray.filter(onlyUnique);
var number=[];

for(var Character of unique){
    var x = unique.indexOf(Character);
    number[x] = (inputArray.filter(checkCharacter)).length;
}


var bubbleoutput= bubbleSort(unique,number);
number = bubbleoutput[0];
unique = bubbleoutput[1];

//huffman

var done=false;
var total= unique.length - 1;

var treedepth=0;

var outputname=unique;
var outputBinary=[];
var outputNumber = number;

var hufftemp1;

var maps=[];

while(!done){
        
    for(var i = 0; i< total;i++){
        
        var currentAgregate = number[total] + number[total-1];
        maps[i] = new Map();
        var binaryA;
        var binaryB;
        var characterA;
        var characterB;
        maps[i].set(binaryA, 1);
        maps[i].set(characterA, unique[total]);
        maps[i].set(binaryB, 0);
        maps[i].set(characterB, unique[total-1]);
        number.splice(-2,2);
        unique.splice(-2,2);
        number.push(currentAgregate);
        unique.push(maps[i]);
        
        bubbleoutput= bubbleSort(unique,number);
        number = bubbleoutput[0];
        unique = bubbleoutput[1];
        
        treedepth++;
        total--;
        console.log(currentAgregate);


    }
    if(total ==0){
        done = true;


    }
    
}





let writeStream = fs.createWriteStream('Output.txt');

/*for(var a = 0; a< unique.length;a++){
    var write=number[a] + " " + unique[a];
    writeStream.write(write + "\n", 'UTF-8');      
}*/

var outputtotal;
for(var a = treedepth; a > 0;a--){
    
    console.log();
    
}

writeStream.on('finish', () => {  
    console.log('Wrote all data to file');
});
writeStream.end();  




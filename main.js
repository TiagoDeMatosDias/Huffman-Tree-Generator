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
var output=unique;
var outputNumber = number;

var hufftemp1;

while(!done){
    done = true;
    
    if(total!=1){
        hufftemp1 = outputNumber[total] + outputNumber[total-1];
        
    }

}





let writeStream = fs.createWriteStream('Output.txt');
for(var a = 0; a< unique.length;a++){
    var write=number[a] + " " + unique[a];
    writeStream.write(write + "\n", 'UTF-8');      
}

writeStream.on('finish', () => {  
    console.log('Wrote all data to file');
});
writeStream.end();  




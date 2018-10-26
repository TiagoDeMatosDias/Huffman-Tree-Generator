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

//console.log(unique[0]);

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


        maps[i].set('0', unique[total]);
        maps[i].set('1', unique[total-1]);
        
        //console.log(unique[total-1]);

        number.splice(-2,2);
        unique.splice(-2,2);
        number.push(currentAgregate);
        unique.push(maps[i]);
        
        bubbleoutput= bubbleSort(unique,number);
        number = bubbleoutput[0];
        unique = bubbleoutput[1];
        
        treedepth++;
        total--;
        //console.log(maps[i].size);
        //console.log(maps[i].get('1'));

        //console.log(maps[i].get(characterB));

    }
    if(total ==0){
        done = true;


    }
    
}





let writeStream = fs.createWriteStream('Output.txt');

var checkedkey='0';
var checkedoutput='';
done=false;

var temp3 =unique;

//console.log(typeof unique[0]);
while(!done){
    //console.log(unique[0]);
   
    if(typeof temp3[0] =="object" || typeof temp3.get('0') =="object"){
        
        temp3 = temp3[0];

        //console.log(temp3);
        try{
            console.log(temp3[0]);
        } finally{
            console.log("test");
        }

    } else{
        console.log(temp3[0]);
        done=true;

    }

}

/*for(var a = 0; a< unique.length;a++){
    var write=number[a] + " " + unique[a];
    writeStream.write(write + "\n", 'UTF-8');      
}*/

var outputtotal;
for(var a = treedepth; a > 0;a--){
    
    //console.log(maps[0].get(1));
    
}

writeStream.on('finish', () => {  
    console.log('Wrote all data to file');
});
writeStream.end();  




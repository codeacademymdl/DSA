var inputArray = [25, 57, 37,48, 12, 92, 86, 33];
var largestIndex=0; //t
var smallestIndex=0; //h
var smallElements=0; // s :count of small elements
var largeElements=0; // l :count of large elements
var insertedArray=Array(inputArray.length).fill(-1);
insertedArray[0] = inputArray[0];
 const maxLength = inputArray.length;

const smallestLargestElementCounter = (value) => {  
    smallElements=0;
    largeElements=0;
    insertedArray.slice(0).forEach((element,index)=>{
        
        if(insertedArray[index]<value && insertedArray[index]!=-1){
            smallElements+=1;
        } else if(insertedArray[index]>value){
                largeElements+=1;
            }
    });   
    return [smallElements,largeElements] ; 
}
//arr.splice(index, 0, item)
const shiftRight = (value) => {
    insertedArray.splice(smallElements,0,value);
     indexMinus1=insertedArray.indexOf(-1);
    if (indexMinus1 > -1) {
        insertedArray.splice(indexMinus1,1);
      }
} 

const shiftLeft = (value) => {
    // console.log("shift left")
    if(smallestIndex===0 && smallElements===0){
        
        // console.log("cond1");
        smallestIndex=maxLength-1;
        insertedArray[smallestIndex]=value;
    } else if(smallElements===0 && smallestIndex!==0){
        // console.log("cond2")
        smallestIndex-=1;
        insertedArray[smallestIndex]=value;
    }else{
 
        smallestIndex-=smallElements;
        insertedArray = insertedArray.splice(smallElements-1).concat(insertedArray);
        insertedArray.splice(0,0,value);
        lastIndexMinus1=insertedArray.lastIndexOf(-1);

        if (lastIndexMinus1 > -1) {
            insertedArray.splice(lastIndexMinus1,1);
          }
    }    

};

const insertValue = (value) => {
    [smallElements,largeElements] = smallestLargestElementCounter(value);
    if(value>insertedArray[largestIndex] && insertedArray[largestIndex+1]===-1){
        insertedArray[largestIndex+1]=value;
        largestIndex+=1;
    } else {
        if(smallElements>=largeElements){
            shiftRight(value);
        } else if (smallElements < largeElements){
            shiftLeft(value);
        }
    }

};

inputArray.slice(1).forEach((value,index)=>{{
    insertValue(value);
    console.log(insertedArray);
}})

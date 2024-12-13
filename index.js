// --1--
function calculateDifference(a,b){
    return a-b;
}
console.log(calculateDifference(8,3));

// --2--
function isOdd(a){
    if(a%2==1){
        return true;
    }
    else if(a%2==0){
        return false;
    }
}
console.log(isOdd(5));

// --3--
function findmin(arr){
    if(arr.length==0){
        return null;
    }
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;

};

let numbers=[4,7,2,9,10];
console.log(findmin(numbers));

// --4-

function filterEvenNumbers(numbers1){
    let evenNumbers=[];
 for(let i=0;i<numbers1.length;i++){
    if(numbers1[i]%2==0){
        evenNumbers.push(numbers1[i]);
    }
 }
 console.log(evenNumbers);

}
let numbers1=[3,12,4,8,7,9,2];
console.log(filterEvenNumbers(numbers1));

// --5--
function sortArrayDescending(numbers2){
    for(let i=0;i<numbers2.length;i++){
        for(let j=0;j<numbers2.length-1-i;j++){
            if(numbers2[j]<numbers2[j+1]){
                let temp=numbers2[j];
                numbers2[j]=numbers2[j+1];
                numbers2[j+1]=temp;
            }
              
        }

        
    }

  return numbers2;

    
}

let numbers2=[3,6,23,4,76,2,9];
console.log(sortArrayDescending(numbers2));


// --6--
function lowercaseFirstLetter(name){
 return name[0].toLowerCase() + name.slice(1);

}

console.log(lowercaseFirstLetter('HelLo'));

// ---7--

function findAverage(array){
    let sum=0;
    let n=array.length;
    let avg;
    for(let i=0;i<n;i++){
        sum=sum+array[i];
        avg=sum/n;
        
    }
    return avg;
}
let array=[2,4,5,7,8,9];
console.log(findAverage(array));


// --8--
function isLeapYear(year){
    if (year%400==0){
        return true;
    }
    else if(year%100==0){
        return false;
    }
    else if(year%4==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isLeapYear(1998));
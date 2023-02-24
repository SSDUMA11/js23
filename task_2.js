let a= [5,3,-4,25,32,-16,6]
let b= [21,-30,9,5,12,-19,5,25]

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
}
 let sumA = sumArray(a);
 let sumB = sumArray(b);

function comparison (){
    if(sumA > sumB){
       return 'a > b'; 
    }
    else if (sumA < sumB){
        return 'a < b';
    }
    else if (sumA === sumB){
        return 'a == b';
    }
}
console.log(comparison ());


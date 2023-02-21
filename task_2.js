let a= [5,3,-4,25,32,-16,6]
let b= [21,-30,9,5,12,-19,5,25]

function comparison (){
    if(a. length > b. length){
       return 'a > b'; 
    }
    else if (a. length < b. length){
        return 'a < b';
    }
    else if (a. length === b. length){
        return 'a == b';
    }
}

console.log(comparison ());
a[2] = 44;
a[5] = 44;
a[7] = 44;
console.log(comparison ());
b.length = 2;
console.log(comparison ());
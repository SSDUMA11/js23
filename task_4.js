let a= [5,3,8,5,3,2,1,2];
let b= [];
a.forEach(function(item){
    if( b.indexOf(item) === -1) {
       b.push(item);
    } 
})
console.log(b);
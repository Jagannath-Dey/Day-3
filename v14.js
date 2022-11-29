//======for loop break and continue====

// var numbers=[12,34,55,77,88,45,90,105,189,75,98,50,54,23];
// for(var i=0; i<numbers.length; i++){
//     if(numbers[i]>100){
//         continue;
//     }
//     console.log(numbers[i]);
// }

var numbers=[12,34,55,77,88,45,90,105,189,75,98,50,54,23];
for(var i=0; i<numbers.length; i++){
    if(numbers[i]>100){
        break;
    }
    console.log(numbers[i]);
}
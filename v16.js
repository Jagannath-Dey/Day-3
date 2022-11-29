//=======Declaration Object=====

var sakib={
    name:'Sakib all Hasan',
    age:34,
    country:"Bangladesh",
    isAllRounder:true,
    isCapten:true
}
// console.log(sakib.isCapten);            //dot notation
// console.log(sakib['name']);             //bracket notation

// var proparties='country';
// console.log(sakib[proparties]);             //bracket notation

sakib.isactive=true;                        //Add proparties
// console.log(sakib);

// console.log(Object.keys(sakib));            //see proparties

console.log(Object.values(sakib));   



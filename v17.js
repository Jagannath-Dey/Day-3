//=====Looping throught an object=====

var shoopingCart={
    books: 6,
    pens: 10,
    sunglass: 1,
    keyboard: 3,
    pencile: 25,
    mouse: 5
}
for(propertyName in shoopingCart){
    // console.log(propertyName);               //property excess
    var values=shoopingCart[propertyName];
    // console.log(values);                        //value excess

    console.log(propertyName,values);           //property & value excess
}
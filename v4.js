//=========For in loop======

// var myself={firstname:'Jagannath',lastname:'Dey',age:24,city:'khulna'};
// for (let props in myself){
//     console.log(myself[props]);
// }

var billGates={shart:true,shartColor:'ofWhite',smile:true,swatercolor:'Gray',glass:true}

for(let props in billGates){
    // console.log(props);
    // console.log(billGates[props]);
    console.log(props+' : '+billGates[props]);
}
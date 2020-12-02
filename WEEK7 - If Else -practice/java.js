function reducere(age){
    if (age < 15){
        console.log("Reducerea acordata este de 25%")
    }else if (age<25){
        console.log("Reducere acordata este de 10%")
    }else {
        console.log("Nu beneficiati de reducere")
    }
}
reducere(10)
var age = 10;
switch (age){
    case 15:
        console.log("reducerea este de 25%");
        break;
    case 16:
        console.log("reducerea este de 20%");
        break;
    case 17:
        console.log("reducerea este de 15%");
        break;
    case 18:
        console.log("reducerea este de 10%");
        break;
    default:
        console.log("nici o reducere");   
    
}

//for(i=0; i<=100; i++){
  //  if(i%2==0){console.log(i) }
     //}

var j=0;
while(j<=100){
 if(j%2==1){console.log(j)}
 j++;
}

var z=0;
do{
    if(z%2==0) {console.log('nr'+' '+z+' este par')}
    else{console.log('nr'+' '+z+' este impar')}
    z++;
}while(z<=100)

const FizzBuzzArray=[];

for (let i=0; i<100; i++){
  FizzBuzzArray[i]=i+1;
}


console.log(FizzBuzzArray);

for (const element of FizzBuzzArray){
  if ( ((element%5) === 0) && ((element%3) === 0) ){
    FizzBuzzArray[element-1]='FizzBuzz';
  } else if ((element%5) === 0) {
    FizzBuzzArray[element-1]='Buzz';
  } else if ((element%3) === 0) {
    FizzBuzzArray[element-1]='Fizz';
  }
}


console.log(FizzBuzzArray);
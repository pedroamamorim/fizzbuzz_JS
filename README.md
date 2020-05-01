# fizzbuzz_JS

FizzBuzz é um problema muito utilizado em entrevistas de emprego para entender um pouco mais sobre como você programa. Ele consistem em fazer um programa que gera números de 1 a 100 e trocar os valores dos números. Os múltiplos de 3 serão Fizz, os múltiplos de 5 serão Buzz e os múltiplos de 3 e 5 serão FizzBuzz.

## versão 01
Vamos olhar o código completo.
  
```
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
```
Neste trecho, é possível ver a criação de um array com números de 0 a 100 e mostrando o array para o usuário. Depois disso ele varre os elementos do array verificando os múltiplos e substituindo os valores por Fizz, Buzz ou FizzBuzz.
  
```
  const FizzBuzzArray=[];
```
Este trecho cria um array vazio
  
```
for (let i=0; i<100; i++){
  FizzBuzzArray[i]=i+1;
}
```
Este trecho varre os elementos do array de 0 a 99, associando um valor a eles. Este valor é a posição do elemento + 1. Desta forma teremos a correspondência:
  elemento:   valor:
  0 ---------- 1
  1 ---------- 2
  2 ---------- 3
  ... ------- ...
  99 -------- 100
  
```
console.log(FizzBuzzArray);
```
Este trecho mostra o array para o usuário, via console.
  
```
for (const element of FizzBuzzArray){
  if ( ((element%5) === 0) && ((element%3) === 0) ){
    FizzBuzzArray[element-1]='FizzBuzz';
  } else if ((element%5) === 0) {
    FizzBuzzArray[element-1]='Buzz';
  } else if ((element%3) === 0) {
    FizzBuzzArray[element-1]='Fizz';
  }
}
```
Este trecho faz a varredura dos elementos do array com o for específico para arrays. O `for...of` faz a varredura em elementos de um array.
Com os laços de `if` checamos a multiplicidade de algum número através do operador `%`. Se este operador retorna 0, quer dizer que é múltiplo. Então trocamos o valor daquele elemento por um texto, que pode ser Fizz, Buzz ou FizzBuzz
Utilizei o `===` para verificar a igualdade com o valor e tipo do elemento.
O `&&` é para acrescentar mais condições dentro do `if` 
  
## versão 02
Vamos olhar o código completo.
```
  //const FizzBuzzArray=[];

//for (let i=0; i<100; i++){
//  FizzBuzzArray[i]=i+1;
//}

const FizzBuzzArray=[...Array(100)].map((_,i) => { return i+1;} );

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
```
Nesta versão, fizemos a criação do array de um jeito mais rebuscado.
  
```
  const FizzBuzzArray=[...Array(100)].map((_,i) => { return i+1;} );
```
Aqui, criamos um array utilizando o `spread operator`, função `map` e `arrow function`.
O `spread operator` faz a varedura de 100 elementos dentro do array, criando um array de 100 elementos com o valor indefinido.
A função `map` mapeia estes valores do array, recebendo parâmetros ou funções
A `arrow function` é uma `function () {}` escrita de maneira enxuta. Ele pega um elemento e retorna este elemento + 1.
Então este conjunto varre 100 elementos dentro de um array com valores indefinidos e substitui esses valores por números.

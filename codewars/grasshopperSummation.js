/*
Escreva um programa que encontre a soma de todos os números de 1 a num. O número será sempre um número inteiro positivo maior que 0.
*/

let summation = function (num) {
   let sum = 0
   for(let i = 1; i <= num; i++){
     sum += i
   }
   return sum
 }
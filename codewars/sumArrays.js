/*
Escreva uma função que receba uma matriz de números e retorne a soma dos números. Os números podem ser negativos ou não inteiros. Se a matriz não contiver nenhum número, você deverá retornar 0.
*/

function sum (numbers) {
   return numbers.reduce((res, num) => res + num, 0)
}
/*
Complete a função de soma ao quadrado de modo que ele quadrado cada número passado para ela e, em seguida, some os resultados
*/

function squareSum(numbers){
   return numbers.reduce((res, num) => num**2 + res, 0)
 }
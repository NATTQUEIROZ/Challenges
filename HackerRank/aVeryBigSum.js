/*
Neste desafio, você deve calcular e imprimir a soma dos elementos em uma matriz,
tendo em mente que alguns desses inteiros podem ser bem grandes.
Retornar a soma de todos os elementos do array
*/
function aVeryBigSum(ar) {
   let total = 0
   for (let element in ar){
       total += ar[element]
   }
   return total   
}
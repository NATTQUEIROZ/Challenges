/*
Você obtém uma matriz de números, retorna a soma de todos os positivos.

Exemplo [1,-4,7,12]=>1 + 7 + 12 = 20

Nota: se não houver nada para somar, a soma é padrão para 0.
*/

function positiveSum(arr) {
   return arr.filter(x => x>0).reduce((res, x) => res + x, 0)
 }
/*
Dada uma matriz de inteiros, encontre a soma de seus elementos.
Por exemplo, se a matriz ar=[1,2,3], 1+2+3=6 , então volte 6.
Imprima a soma dos elementos do array como um único inteiro.
*/

function simpleArraySum(ar) {
   let soma = 0
   for (let element in ar) {
       soma += ar[element]
   }
   return soma
}

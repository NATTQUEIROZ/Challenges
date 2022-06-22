/*Um número inteiro d é um divisor de um inteiro n se o restante de n/d=0.
Dado um inteiro, para cada dígito que compõe o inteiro, determine se ele é um 
divisor. Conte o número de divisores que ocorrem dentro do inteiro.

Exemplo
n=124
Verifique se 1, 2 e 3 são divisores de 124. Todos os 3 números se dividem 
igualmente em 124 então volte 3.

n=111
Verifique se 1, 1 e 1, são divisores de 111. Todos os 3 números se dividem 
igualmente em 111 então volte 3.

n=10
Verifique se 1 e 0 são divisores de 10. 1 é mas 0 não é. Retornar 1.
*/

function findDigits(n) {
   let array = n.toString().split('')
   let sum = 0
   for(let i = 0; i < array.length; i++){
       if(Number.isInteger(n/array[i])){
         sum += 1
       }
   }
   return sum
}
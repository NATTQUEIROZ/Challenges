/*Nesta tarefa simples, você recebe um número e deve torná-lo negativo. Mas talvez o número já seja negativo?*/

function makeNegative(num) {
    if (num > 0 ) {
     return num *(-1)
   } else if(num < 0) {
      return num
   } else {
     return 0
   }
  }
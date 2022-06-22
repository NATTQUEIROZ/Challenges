/*
Esta é uma escada de tamanho n = 4:
   #
  ##
 ###
####
Sua base e altura são iguais a n. É desenhado usando # símbolos e espaços. 
A última linha não é precedida por nenhum espaço.
Escreva um programa que imprima uma escada de tamanho n.
Nota : A última linha deve ter 0 espaços.
PASSO A PASSO
passo 0 - receber input (n), onde 0 < n <= 100
passo 1 - contruir (n) linhas
passo 2 - atualizar contador para contruir as colunas com (n) #
passo 3 - atualizar valor da linha de acordo com o paso 2
        - inserir espaços
        - inserir #
passo 4 - imprimir as linhas com os espaços e as # de acordo com o tamanho (n) 
*/

function staircase(n) {
   let count = n
   for(let i = 1; i <= n; i++){
       let line = ''
       count--
       for(let j = 1; j <= count; j++){
           line += ' '
       }
       for(let k = count; k < n; k++){
           line += '#'
       }
       console.log(line)
   } 
}

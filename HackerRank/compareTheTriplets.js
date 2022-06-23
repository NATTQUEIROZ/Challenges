/*
Alice e Bob criaram um problema para o HackerRank. Um revisor classifica os dois
desafios, atribuindo pontos em uma escala de 1 a 100 para três categorias: 
clareza do problema , originalidade e dificuldade.
A classificação para o desafio de Alice é a trinca a = (a[0], a[1], a[2]) , e a 
classificação para o desafio de Bob é a trinca b = (b[0], b[1], b [2]).
A tarefa é encontrar seus pontos de comparação comparando a[0] com b[0] , a[1] 
com b[1] e a[2] com b[2].
Se a[i] > b[i] , então Alice recebe 1 ponto.
Se a[i] < b[i] , Bob recebe 1 ponto.
Se a[i] = b[i] , nenhuma das pessoas recebe um ponto.
Os pontos de comparação são o total de pontos que uma pessoa ganhou.
Dados a e b , determine seus respectivos pontos de comparação.
Exemplo
a = [1, 2, 3]
b = [3, 2, 1]
Para os elementos *0*, Bob recebe um ponto porque a[0] .
Para os elementos iguais a[1] e b[1] , nenhum ponto é ganho.
Finalmente, para os elementos 2 , a[2] > b[2] então Alice recebe um ponto.
A matriz de retorno é [1, 1] com a pontuação de Alice primeiro e a de Bob em 
segundo.
Retornar
int[2] : A pontuação de Alice está na primeira posição e a pontuação de Bob está
na segunda.
*/

function compareTriplets(a, b) {
   let alice = 0
   let bob = 0
   let res = [alice, bob]
   for(let i = 0; i < a.length; i++){
       if(a[i] > b[i]) {
           res[0] += 1
       } else if(a[i] < b[i]){
           res[1] += 1
       } else {
           res
       }
   }
   return res
}
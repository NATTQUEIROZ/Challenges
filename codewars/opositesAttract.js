/*Timmy e Sarah acham que estão apaixonados, mas perto de onde moram, eles só saberão quando colherem uma flor cada um. Se uma das flores tiver um número par de pétalas e a outra tiver um número ímpar de pétalas, significa que eles estão apaixonados.

Escreva uma função que pegue o número de pétalas de cada flor e retorne true se elas estiverem apaixonadas e false se não estiverem.*/

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2
  }
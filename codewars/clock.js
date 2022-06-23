/*
Relógio mostra hhoras, mminutos e ssegundos após a meia-noite.

Sua tarefa é escrever uma função que retorne a hora desde a meia-noite em milissegundos
*/
function past(h, m, s){
   const sec = s * 1000
   const min = m * 60000
   const hou = h * 3600000
   
   return sec + min + hou
 }
/*
É bem direto. Seu objetivo é criar uma função que remova o primeiro e o último caractere de uma string. Você recebe um parâmetro, a string original. Você não precisa se preocupar com strings com menos de dois caracteres.
*/

function removeChar(str){
   return str.replace(/^./,"").replace(/.$/,"")
  }
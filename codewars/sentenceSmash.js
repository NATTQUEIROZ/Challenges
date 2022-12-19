/*
Escreva uma função que pegue uma matriz de palavras e as junte em uma frase e retorne a frase. Você pode ignorar qualquer necessidade de higienizar palavras ou adicionar pontuação, mas deve adicionar espaços entre cada palavra. Tenha cuidado, não deve haver um espaço no início ou no final da frase!
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
*/

function smash (words) {
   return words.join(' ')
}
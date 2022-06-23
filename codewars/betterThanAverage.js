/*
Houve um teste em sua classe e você passou. Parabéns!
Mas você é uma pessoa ambiciosa. Você quer saber se é melhor do que o aluno médio da sua turma.
Você recebe uma matriz com as pontuações dos testes de seus colegas. Agora calcule a média e compare sua pontuação!
Retorne Truese estiver melhor, senão False!

Observação:
Seus pontos não estão incluídos no conjunto de pontos de sua classe. Para calcular o ponto médio, você pode adicionar seu ponto à matriz fornecida!
*/

function betterThanAverage(classPoints, yourPoints) {
   let res = (classPoints.reduce((res, num) => res + num, 0) + yourPoints) / (classPoints.length + 1)
   return yourPoints > res
   }
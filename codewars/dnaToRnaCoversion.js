/*O ácido desoxirribonucléico, DNA, é a principal molécula de armazenamento de informações em sistemas biológicos. É composto por quatro bases de ácidos nucleicos Guanina ('G'), Citosina ('C'), Adenina ('A') e Timina ('T').

O ácido ribonucleico, RNA, é a principal molécula mensageira nas células. O RNA difere ligeiramente do DNA em sua estrutura química e não contém timina. No RNA, a timina é substituída por outro ácido nucléico Uracil ('U').

Crie uma função que traduza uma determinada sequência de DNA em RNA.*/

function DNAtoRNA(dna) {
    return dna.replace(/T/g, "U")
  }
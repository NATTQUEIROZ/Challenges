/*Simples, remova os espaços da string e retorne a string resultante.*/

function noSpace(x) {
    return x.replace(/ /g, "")
}

//ou 

function noSpace(x) {
    return x.split(" ").join("")
}
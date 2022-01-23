/*
    Cree un algoritmo que permita determinar 
    la calificación en letras de un alumno

    Si la nota se encuentra entre 100 a 90 = A
    Si la nota se encuentra entre 80 a 89 = B
    Si la nota se encuentra entre 70 a 79 = C
    Si la nota se encuentra entre 60 a 69 = D
    Si la nota se inferior a 60 = F

*/

let nota = -10;
let notaLetra = '';

if (nota >= 0 && nota <= 100) {
    if (nota >= 90 && nota <= 100) {
        notaLetra = 'A';
    } else if (nota >= 80 && nota <= 89) {
        notaLetra = 'B';
    } else if (nota >= 70 && nota <= 79) {
        notaLetra = 'C';
    } else if (nota >= 60 && nota <= 69) {
        notaLetra = 'D';
    } else if (nota >= 0 && nota <= 59) {
        notaLetra = 'F';
    }
    console.log(nota + ' es igual a ' + notaLetra );

} else if (nota >= 101 ) {
    console.log('La nota esta fuera de Rango!');
} else {
    console.log('La nota esta fuera de Rango!!');
}





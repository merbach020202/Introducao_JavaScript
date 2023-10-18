// const numero = [1, 2, 200, 10, 7, 12, 15, 8];

// console.log(numero);

// const nMenor10 = numero.filter((n) => {
//     return n < 10;
// });

// console.log(nMenor10);


const comentarios = [
    {comentario: "bla bla bla", exibe: true},
    {comentario: "evento é uma merda", exibe: false},
    {comentario: "ótimo evento", exibe: true}
]

const comentarios0k = comentarios.filter( (c) => {
    return c.exibe === true
})

console.log(comentarios0k);
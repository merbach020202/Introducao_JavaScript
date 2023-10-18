// const numeros = [10, 12, 20]

// const somatorio = numeros.reduce((total, n) => {
//     return total + n
// }, 0)

// console.log(somatorio);



const produtos = [
    {produto: "Camiseta", preco: 129.90},
    {produto: "Tenis", preco: 350.97},
    {produto: "Jaqueta de Couro", preco: 700.01}
]

let toProduto = produtos.reduce((vlInicial, oP) => {
    return vlInicial + oP.preco
},0)

console.log(`Gerente, o total de vendas é: R$${toProduto}`);
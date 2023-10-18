const nome = ["Eduardo", "Carlos", "Lucas", "Gabriel", "Luiza"];
const sobrenome = ["Merbach", "Souza", "Brenn", "Silva", "Barros"];

const nomesCompleto = nome.map((nomes, index) => {
    return console.log(`${nomes} ${sobrenome[index]}`);
});

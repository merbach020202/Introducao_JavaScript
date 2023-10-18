const filmes = { 
    genero: ["terror","Comedia","Ação"], 
    titulo: ["Five nights at freddy","Gente grande"], 
    estudio: "Sei lá",
    duracao: "2hrs"
 };

const {genero, titulo, duracao} = filmes

console.log(`
Filme:
    Genero: ${genero[1]}
    Titulo: ${titulo[1]}
    Duração: ${duracao}
`);

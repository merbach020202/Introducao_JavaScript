const filme = [
{ 
    genero: "terror", 
    titulo: "Five nights at freddy", 
    estudio: "Sei lá",
    duracao: "2hrs"
 },
 { 
    genero: "comedia", 
    titulo: "Gente grande", 
    estudio: "Sei lá",
    duracao: "1hr"
 },
 { 
    genero: "acao", 
    titulo: "Indiana Jones", 
    estudio: "Sei lá",
    duracao: "1:30hr"
 }
]

filme.forEach( ( {titulo, genero}, i ) => {
    console.log(`
    Filme${i+1}: ${titulo.toUpperCase()}
    Gênero: ${genero.toString()}
    `);
})


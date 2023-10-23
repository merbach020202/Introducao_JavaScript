const urlViaCep = "https://viacep.com.br/ws/";
const urlViaCepProfessor = "http://172.16.35.155:3000/myceps";
const urlContato = "http://172.16.35.155:3000/contatos";

async function Cadastrar(e) {
    e.preventDefault();
    //Pega os valores dos camposde formulário
    const nome = document.getElementById("nome").value.trim()
    const email = document.getElementById("email").value.trim()
    const cep = document.getElementById("cep").value
    const endereco = document.getElementById("endereco").value.trim()
    const numero = document.getElementById("numero").value
    const cidade = document.getElementById("cidade").value.trim()
    const estado = document.getElementById("estado").value.trim()

    // if (validacao(nome, email, cep, endereco, numero, cidade, estado)) {
    //     alert("Preencher todos os campos")
    //     return
    // }
    // alert("Tudo ok!")

    objCadastro = {
        nome,
        email,
        cep,
        endereco,
        numero,
        cidade,
        estado
    }

    try {
         const promise = await fetch(urlContato,{
        body: JSON.stringify(objCadastro), //Estou transformando um objet em JSON
        method: "post",
        headers: {"Content-type" : "application/json"}
    })
    const dados = await promise.json()

    console.log(dados);

    } catch (error) {
        console.log("Deu ruim");
        console.log(error);
    }


   




}

// function validacao(nome, endereco, cep) {
//     if (nome.lenght == 0 || nome.lenght === undefined || 
//         endereco.lenght == 0 || endereco.lenght === undefined || 
//         cep.lenght < 8 || cep.lenght === undefined) {
//         return false
//     } 
//     return true
// }






async function buscarEndereco(cep) {
    // complemento do endereco da api
    // const resource = `${cep}/json/`;

    try {
        // const promise = await fetch(urlViaCep + resource);

        const promise = await fetch(`${urlViaCepProfessor}/${cep}`);
        //transformo o json retonado em um objeto ou array
        const endereco = await promise.json();
        console.log(endereco);
        

        //preencher o formulário
        // document.getElementById("endereco").value = endereco.logradouro;
        // document.getElementById("cidade").value = endereco.localidade;
        // document.getElementById("estado").value = endereco.uf;
        preencherCampos({
            logradouro: endereco.logradouro,
            localidade: endereco.localidade,
            uf: endereco.uf,
        });

        //resetar o span do cep inválido
        document.getElementById("not found").innerText = "";
    } catch (error) {
        document.getElementById("not-found").innerHTML = "cep inválido";
    }
}

function preencherCampos(endereco) {
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}

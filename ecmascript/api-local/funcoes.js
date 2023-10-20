const urlViaCep = "https://viacep.com.br/ws/";

function Cadastrar(e) {
    e.preventDefault();
    alert("Cadastrar ...");
}

async function buscarEndereco(cep) {
    // complemento do endereco da api
    const resource = `${cep}/json/`;

    try {
        const promise = await fetch(urlViaCep + resource);

        //transformo o json retonado em um objeto ou array
        const endereco = await promise.json();
        console.log(endereco);

        //preencher o formulário
        // document.getElementById("endereco").value = endereco.logradouro;
        // document.getElementById("cidade").value = endereco.localidade;
        // document.getElementById("estado").value = endereco.uf;
        preencherCampos({
            endereco: endereco.logradouro,
            localidade: endereco.localidade,
            uf: endereco.uf,
        });

        //resetar o span do cep inválido
        document.getElementById("not found").innerText = "";
    } catch (error) {
        document.getElementById("not-found").innerText = "cep inválido";
    }
}

function preencherCampos(endereco) {
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}

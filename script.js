let nomeAluno = document.getElementById("txtNome")
let RAaluno = document.getElementById("txtRA")
let idade = document.getElementById("txtIdade")
let generoMasc = document.getElementById("inputSexoMasc")
let generoFem = document.getElementById("inputSexoFem")
let media = document.getElementById("txtMedia")
const btnCadastrar = document.getElementById("btnCadastrar")
const listadealunos = document.getElementById("listadealunos")
let listaAlunos = []


btnCadastrar.onclick = function(){

     // Verificar qual o genero escolhido
    let genero = ""
    if(generoMasc.checked){

         genero = generoMasc.value
    }else if(generoFem.checked){
         genero = generoFem.value
    }else{
        alert("Selecione um genero")
    }
   
    //Logica para verificar se aprovado ou reprovado
    let resultado
    if(media.value >= 6){
         resultado = "Aprovado"
    }else{
         resultado = "Reprovado" 
    }

    //Tranformar dados do aluno em Objeto
    const AlunoOBJ = {
        nome: nomeAluno.value,
        RA: RAaluno.value,
        idade: idade.value,
        genero: genero,
        media: media.value,
        resultado: resultado
    }

    // Alimentando a lista com os alunos cadastrados
    listaAlunos.push(AlunoOBJ)

    // verificação do sistema
    console.table(AlunoOBJ)
    console.table(listaAlunos)

    renderizarListaAlunos();

}

//função para renderizar na tela os alunos cadastrados
function renderizarListaAlunos(){

     let htmltext = ""

     for (const aluno of listaAlunos){
          htmltext += `<li> ${aluno.nome} - ${aluno.RA} - ${aluno.idade} - ${aluno.genero} - ${aluno.media} - ${aluno.resultado} </li>`
     }

     listadealunos.innerHTML = htmltext

     console.log(listaAlunos.nome)
}







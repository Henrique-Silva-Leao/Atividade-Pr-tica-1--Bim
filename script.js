let nomeAluno = document.getElementById("txtNome")
let RAaluno = document.getElementById("txtRA")
let idade = document.getElementById("txtIdade")
let generoMasc = document.getElementById("inputSexoMasc")
let generoFem = document.getElementById("inputSexoFem")
let media = document.getElementById("txtMedia")
const btnCadastrar = document.getElementById("btnCadastrar")
const btnNomeCrescente = document.getElementById("btnNomeCrescente")
const btnRaDecrescente = document.getElementById("btnRaDecrescente")
const listadealunos = document.getElementById("listadealunos")
const btnAprovados = document.getElementById("btnAprovados")
const btnBuscar = document.getElementById("btnBuscar")
let txtBuscar = document.getElementById("txtBusca")

let AlunoBuscado = ""


let listaAlunos = [{
    nome: "Amanda Nunes",
    RA: "202301589",
    idade: 20,
    genero: "Feminino",
    media: 8.8,
    resultado: "Aprovado"
  },
  {
    nome: "Zélia Duncan",
    RA: "202209123",
    idade: 23,
    genero: "Feminino",
    media: 4.5,
    resultado: "Reprovado"
  },
  {
    nome: "Lucas Pereira",
    RA: "202402331",
    idade: 19,
    genero: "Masculino",
    media: 7.2,
    resultado: "Aprovado"
  },
  {
    nome: "Fernanda Montenegro",
    RA: "202305874",
    idade: 21,
    genero: "Feminino",
    media: 5.9,
    resultado: "Reprovado"
  },
  {
    nome: "Bruno Gagliasso",
    RA: "202210456",
    idade: 24,
    genero: "Masculino",
    media: 9.5,
    resultado: "Aprovado"
  },
  {
    nome: "Vanessa da Mata",
    RA: "202501001",
    idade: 18,
    genero: "Feminino",
    media: 3.1,
    resultado: "Reprovado"
  },
  {
    nome: "Gabriel o Pensador",
    RA: "202309812",
    idade: 22,
    genero: "Masculino",
    media: 6.0,
    resultado: "Aprovado"
  },
  {
    nome: "Priscila Alcantara",
    RA: "202208345",
    idade: 25,
    genero: "Feminino",
    media: 5.5,
    resultado: "Reprovado"
  },
  {
    nome: "Rafael Cardoso",
    RA: "202408998",
    idade: 20,
    genero: "Masculino",
    media: 7.9,
    resultado: "Aprovado"
  },
  {
    nome: "Juliana Paes",
    RA: "202301101",
    idade: 22,
    genero: "Feminino",
    media: 4.9,
    resultado: "Reprovado"
  },
  {
    nome: "Carolina Dieckmann",
    RA: "202207654",
    idade: 21,
    genero: "Feminino",
    media: 8.1,
    resultado: "Aprovado"
  },
  {
    nome: "Marcos Mion",
    RA: "202405555",
    idade: 26,
    genero: "Masculino",
    media: 6.5,
    resultado: "Aprovado"
  }];

    renderizarListaAlunos()

//Função de ordenação Buble Sort - Nome Crescente
function bubbleSort(vetor, fnComp) {
     let trocou;

     do {
          trocou = false;
          for (let i = 0; i < vetor.length - 1; i++) {
               if (fnComp(vetor[i], vetor[i + 1])) {
                    [vetor[i], vetor[i + 1]] = [vetor[i + 1], vetor[i]];
                    trocou = true;
               }
          }
     } while (trocou);
}

//Função para busca Binaria do aluno
function buscaBinaria(vetor, fnComp) {

     bubbleSort(listaAlunos,(elem1, elem2) => elem1.nome.toLowerCase() > elem2.nome.toLowerCase())
     

     let ini = 0
     let fim = vetor.length - 1

     while(fim >= ini) {

          let meio = Math.floor((ini + fim) / 2)

          let htmltext = `<li> ${vetor[meio].nome} - ${vetor[meio].RA} - ${vetor[meio].idade} - ${vetor[meio].genero} - ${vetor[meio].media} - ${vetor[meio].resultado} </li>`

          switch(fnComp(vetor[meio])) {
               case 0:   
                    return htmltext
               case 1:   
                    ini = meio + 1
                    break
               default:   
                    fim = meio - 1
          }
    }
     return `<li> Aluno nao encontrado no sistema </li>`
}

//Função para compararação da busca binaria
function comparar(valorMeio, valorBusca = AlunoBuscado) {
    if(valorBusca === valorMeio.nome) return 0
    else if(valorBusca > valorMeio.nome) return 1
    else return -1
}

//Função para cadastrar aluno
btnCadastrar.onclick = function () {

     // Verificar qual o genero escolhido
     let genero = ""
     if (generoMasc.checked) {

          genero = generoMasc.value
     } else if (generoFem.checked) {
          genero = generoFem.value
     } else {
          alert("Selecione um genero")
          return
     }

     //Logica para verificar se aprovado ou reprovado
     let resultado
     if (media.value >= 6) {
          resultado = "Aprovado"
     } else {
          resultado = "Reprovado"
     }

     //Logica para media entre 0 e 10 
     if (media.value < 0  || media.value > 10 ){
          alert("Insira uma media entre 0 e 10")
          return
     }

     //Logica para verificar idade valida
     if(idade.value > 100 || idade.value < 0){
          alert("Insira uma Idade valida")
          return
     }

     //Logica para RA valido/preenchido 
     if(RAaluno.value < 0){
          alert("Insira um RA Valido")
          return
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

     renderizarListaAlunos();

}

//função para renderizar na tela os alunos cadastrados
function renderizarListaAlunos() {

     let htmltext = ""

     for (const aluno of listaAlunos) {
          htmltext += `<li> ${aluno.nome} - ${aluno.RA} - ${aluno.idade} - ${aluno.genero} - ${aluno.media} - ${aluno.resultado} </li>`
     }

     listadealunos.innerHTML = htmltext

}

// Botão - Função de ordenação Nomes 
btnNomeCrescente.onclick = function () {
     bubbleSort(
          listaAlunos,
          (elem1, elem2) => elem1.nome.toLowerCase() > elem2.nome.toLowerCase()
     )
     renderizarListaAlunos();
}

// Botão - Função ordenação RA Descrescente
btnRaDecrescente.onclick = function () {
    bubbleSort(
        listaAlunos,
        (elem1, elem2) => elem1.RA < elem2.RA 
    )
    renderizarListaAlunos()
}

//Função para renderizar alunos aprovados na tela
function renderizarAlunosProvados() {

     let htmltext = ""

     for (const aluno of listaAlunos) {

          if(aluno.resultado === "Aprovado" ){
               htmltext += `<li> ${aluno.nome} - ${aluno.RA} - ${aluno.idade} - ${aluno.genero} - ${aluno.media} - ${aluno.resultado} </li>`
          }
     }

     listadealunos.innerHTML = htmltext
}

// Botão - Função de ordenação Nomes apenas Aprovados
btnAprovados.onclick = function () {

     bubbleSort(
          listaAlunos,
          (elem1, elem2) => elem1.nome.toLowerCase() > elem2.nome.toLowerCase()
     )
     renderizarAlunosProvados();
}

//Botão para buscar por nome do aluno
btnBuscar.onclick = function(){
     AlunoBuscado = txtBuscar.value
     listadealunos.innerHTML = buscaBinaria(listaAlunos,comparar)

}
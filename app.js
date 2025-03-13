// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo === ''){
alert('Por favor, ingresa un nombre');
    } else {
        listaDeAmigos.push(nombreAmigo);
        document.querySelector('#amigo').value = '';
        console.log(listaDeAmigos);
        mostarListaAmigos();
    }
}

function mostarListaAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";
  
    for (let index = 0; index < listaDeAmigos.length; index++) {
     const element = listaDeAmigos[index];
  
      let listaHTML = document.createElement("li");
      listaHTML.textContent = element;
      listaAmigos.appendChild(listaHTML);
    }
  }
  function sortearAmigo() {
    let cantidadAmigos = listaDeAmigos.length;
    if (cantidadAmigos === 0) {
      alert("Por favor, inserte un nombre antes de sortear");
    } else {
      let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
      let resultadoHTML = document.querySelector("#resultado");
      resultadoHTML.innerHTML = listaDeAmigos[indiceAmigo];
    }
  }
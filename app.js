// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;
    if(nombreAmigo === ''){
alert('Por favor, ingresa un nombre');
    } else {
        listaDeAmigos.push(nombreAmigo);
        document.querySelector('#amigo').value = '';
        //mostrarListaAmigo();
    }

}
//function agregarAmigo() {
    //let nombreAmigo = document.getElementById("amigo").value;
  
    //if (nombreAmigo.trim() === "") {
     // alert("Por favor, inserte un nombre");
   // } else {
    //  amigos.push(nombreAmigo);
    //  document.querySelector("#amigo").value = "";
    //  mostrarListaAmigo();
   // }
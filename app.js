// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Agregando Variables
let listaAmigos = [];
let inputListaAmigos = document.getElementById("amigo");
let listaNombres = document.getElementById("listaAmigos");

//Agregando Funciones
function agregarAmigo() {
    //Agregar amigos a la lista
    listaAmigos.push(inputListaAmigos.value);
    //Agregar amigos a la lista html
    listaNombres.innerHTML = listaNombres.innerHTML + `<li>${inputListaAmigos.value}</li>`;
};
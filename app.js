// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Agregando Variables
let listaAmigos = [];
let inputListaAmigos = document.getElementById("amigo");
let listaNombres = document.getElementById("listaAmigos");
let resultadoAmigo = document.getElementById("resultado");

//Agregando Funciones
function agregarAmigo() {
    if (inputListaAmigos.value == ""){
        alert("Debes ingresar un nombre");
    } else {
    //Agregar amigos a la lista
    listaAmigos.push(inputListaAmigos.value);
    //Agregar amigos a la lista html
    listaNombres.innerHTML = listaNombres.innerHTML + `<li>${inputListaAmigos.value}</li>`;
    inputListaAmigos.value = "";}
};

function sortearAmigo() {
    //Elegir un número random de acuerdo al tamaño de la lista de amigos
    random = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[random]; 
    //Entregar el resultado en pantalla
    resultadoAmigo.innerHTML = `<li>El Amigo Secreto Es: ${amigoSecreto}</li>`;
};
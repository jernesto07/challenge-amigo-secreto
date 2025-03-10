// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//lista o arreglo para almacenar los nombres de los amigos

let amigos = [];


//Funcion para agregar a los amigos

function agregarAmigo() {

    // obtener el campo de entrada con el nombre
    const nombreEntrada = document.getElementById('amigo');    
    
    //obtener el nombre de entrada y eliminar espacios en blanco al principio y al final
    const nombre = nombreEntrada.value.trim();
    
    //validar si se ha ingresado un nombre valido
    if (nombre === "") {
        alert('Por favor ingresar un nombre valido');
        return // salir de la funcion sin agregar el nombre

    }
    // verificar si el nombre esta repetido

    if (amigos.includes(nombre)) {
        alert(`${nombre} ya ha sido incluido con anterioridad. Por favor ingrese otro nombre`);

    }
    // agregar nombre a la lista de amigos
    amigos.push(nombre);
    
    //actualizar la lista de nombres en la interfaz

    //limpiar el campo del input para agregar otro nombre
    nombreEntrada.value = "";
    console.log(amigos); 

    //actualizar la lista en el html
    actualizarLista()
}


function actualizarLista() {
    const listaDeAmigos = document.getElementById("listaAmigos"); //ubicado en el primer ul 

    // limpiar la lista actual en el html li y borra el contenido anterior
    listaDeAmigos.innerHTML = "";

    // para recorrer la lista de amigos y que aparezca en el HTML con un ciclo for
    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaDeAmigos.appendChild(li);
    }
}



//Funcion para hacer la seleccion del amigo en forma aleatoria
    function sortearAmigo(){

        //primero se debe validar si hay nombre en la lista que no este vacia
        if (amigos.length === 0){
            alert('la lista de amigos esta vacia por favor egregar un nombre');
            return;

        }
        // generar el sorteo. Genera un sorteo aleatorio desde la posicion 0 hasta la longitud total de la lista
        const posicionAleatoria = Math.floor(Math.random() * amigos.length);
        console.log(posicionAleatoria);

        //obtener el amigo sorteado
        const amigoSorteado = amigos[posicionAleatoria];
        console.log(amigoSorteado);

        //resultado del sorteo
        const resultado = document.getElementById('resultado');
        resultado.innerHTML = (`<li>El nombre sorteado es: <strong>${amigoSorteado}</strong></li>`);

    }



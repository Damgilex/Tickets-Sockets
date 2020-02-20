//Logica para manejar nuevos tickets

//Establecer conexion
var socket = io();//io viene de la libreria de socket
var label = $('#lblNuevoTicket');

socket.on('connect', function(){//'on' son para escuchar informacion
    console.log('conectado al servidor');
});

// Cuando perdemos comunicacion con el server
socket.on('disconnect',function(){//'on' son para escuchar informacion
    console.log('Perdimos conexión con el servidor');
});

$('button').on('click', function(){

        socket.emit('siguienteTicket', {},function(siguienteTicket){
           label.text(siguienteTicket);
        });
});

socket.on('estadoActual', function(resp){
    label.text(resp.actual);
})

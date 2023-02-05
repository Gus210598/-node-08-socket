// Referencias del HTML

const lblOnline     = document.querySelector('#lblOnline')
const lblOffline    = document.querySelector('#lblOffline')
const txtMensaje    = document.querySelector('#txtMensaje');
const btnEnviar     = document.querySelector('#btnEnviar');


const socket = io();


socket.on('connect', () => {
    // console.log('Conectado // Arriba los cuescos ');
    lblOffline.style.display = 'none'
    lblOnline.style.display = ''
});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor... cago conexión :(( ');
    lblOnline.style.display = 'none'
    lblOffline.style.display = ''
});

socket.on('enviar-mensaje', ( payload ) => {
    console.log(payload)
})

btnEnviar.addEventListener( 'click',() => {

    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: 'id5252422',
        fecha: new Date().getTime()
    }
    // console.log(mensaje);
    socket.emit('enviar-mensaje', payload, ( id ) => {
        console.log('Desde el server', id );
    } );
})

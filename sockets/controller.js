

const socketController = (socket) => {

    console.log('Cliente conectado // Arriba los cuescos ', socket.id );

    socket.on('disconnect', ()=> {
        console.log('Cliente desconectado ( Socket ) // afuera los CUESCOS ', socket.id );
    })

    socket.on('enviar-mensaje', ( payload, callback ) => {
        // console.log('Enviar mensaje desde el server... ', payload);
        
        const id = 2574892;
        callback({ id, fecha: new Date().getTime() });

        socket.broadcast.emit('enviar-mensaje', payload );

    });

}

module.exports = {
    socketController,

}

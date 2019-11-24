var socket = require('socket.io'),
    http = require('http'),
    server = http.createServer(),
    socket = socket.listen(server);


server.listen("80", function () {
    console.log('Server started');
});




socket.on('connection', function (connection) {

    connection.on('onlinejoin', function () {
        socket.emit('feed', 'MESSAGE');
    });


    


});





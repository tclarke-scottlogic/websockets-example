window.onload = function () {
    var socket = io('http://localhost');

    // Get references to elements on the page.
    var form = document.getElementById('message-form');
    var messageField = document.getElementById('message');
    var messagesList = document.getElementById('messages');
    var socketStatus = document.getElementById('status');
    var closeBtn = document.getElementById('close');

    socket.on('news', function (data) {
        console.log(data);
        
        messagesList.innerHTML += '<li class="received"><span>Received:</span>' + data.hello + '</li>'
        messagesList.innerHTML += '<li class="received"><span>Received a thing</span></li>'

        console.log("Shoulda added");
        socket.emit('my other event', { my: 'data' });

    });

};


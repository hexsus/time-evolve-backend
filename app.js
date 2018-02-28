var ws = require("nodejs-websocket")

// WS part
var server = ws.createServer(function (conn) {
    console.log("New connection");
	conn.on("text", function (time) {
        if(Number(time)) setTimer(Number(time), conn);
	})
	conn.on("close", function (code, reason) {
		console.log("Connection closed")
	})
}).listen(8001)

function setTimer(time, connection) {
    const timer = setInterval(() => {
        if(time <= 0) {
            connection.sendText('end');
            clearInterval(timer);
        } else {
            time = time - 1000;
            console.log(time);
        }
    }, 1000)
}

"use strict";
var express = require('express');
var http = require('http');
var path = require('path');
var body_parser_1 = require('body-parser');
var app = express();
exports.app = app;
app.use(express.static(path.join(__dirname, '../../')));
app.use(body_parser_1.json());
//Route Config
app.use('/api/');
app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '../../index.html'));
});
var server = http.createServer(app);
server.listen(3000);
//# sourceMappingURL=server.js.map
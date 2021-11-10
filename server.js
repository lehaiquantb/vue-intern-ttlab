/* eslint-disable */
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const history = require('connect-history-api-fallback');

app = express();

/// / middleware to redirect all URLs to index.html
app.use(history());

// we are configuring dist to serve site files
app.use('/', serveStatic(path.join(__dirname, '/dist')));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
console.log(__dirname + '/dist');

console.log('server started ' + port);

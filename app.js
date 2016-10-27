#!/usr/bin/env node
require('babel-core/register');
var app = require('./src/app');

// 设置端口
var port = process.env.PORT || '3333';
console.log(process.env.URL_PREFIX);
console.log(process.env.API_PREFIX);

app.listen(port, (err) => {
    if (err) {
        console.error(err);
    }
    console.info('Listening on port ' + port);
});

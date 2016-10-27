'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _buildServerIndex = require('../build/server/index');

var _buildServerIndex2 = _interopRequireDefault(_buildServerIndex);

var _buildServerUsers = require('../build/server/users');

var _buildServerUsers2 = _interopRequireDefault(_buildServerUsers);

var app = (0, _express2['default'])();
app.set('views', _path2['default'].join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((0, _morgan2['default'])('dev'));
app.use(_bodyParser2['default'].json());
app.use(_bodyParser2['default'].urlencoded({ extended: false }));
app.use((0, _cookieParser2['default'])());
app.use(_express2['default']['static'](_path2['default'].join(__dirname, 'public')));

app.use('/', _buildServerIndex2['default']);
app.use('/users', _buildServerUsers2['default']);

// catch 404 and forward to error handler
// app.use((req, res, next)=> {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use((err, req, res, next)=> {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// production error handler
// no stacktraces leaked to user
// app.use((err, req, res, next)=> {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });
module.exports = app;
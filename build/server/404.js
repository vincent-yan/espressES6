'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var router = _express2['default'].Router();
_express2['default'].use("*", function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
});
module.exports = router;
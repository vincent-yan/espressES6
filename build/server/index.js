'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var router = _express2['default'].Router();
router.get("/", function (req, res, next) {
    res.render('index', { title: 'hello' });
});

module.exports = router;
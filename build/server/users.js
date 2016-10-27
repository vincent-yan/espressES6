'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var router = _express2['default'].Router();

var Users = (function () {
    function Users() {
        _classCallCheck(this, Users);

        this.init();
    }

    /* GET users listing. */
    // router.get('/', (req, res, next)=> {
    //     res.send('use');
    // });
    //
    // router.get('/good', (req, res, next) => {
    //     let user = {name: "yws"};
    //     res.send(`good ${user.name}`);
    // });

    _createClass(Users, [{
        key: 'good',
        value: function good(req, res, next) {
            var user = { name: "yws" };
            res.send('good ' + user.name);
        }
    }, {
        key: 'uses',
        value: function uses(req, res, next) {
            res.send('use');
        }
    }, {
        key: 'init',
        value: function init() {
            router.get("/", this.uses);
            router.get("/good", this.good);
        }
    }]);

    return Users;
})();

var page = new Users();
exports['default'] = router;
module.exports = exports['default'];
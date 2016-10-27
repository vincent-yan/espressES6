import  base from './base'

class Users extends base {
    constructor() {
        this.init();
    }

    good(req, res, next) {
        let user = {name: "yws"};
        res.send(`good ${user.name}`);
    }

    uses(req, res, next) {
        res.send('use');
    }

    init() {
        router.get("/", this.uses);
        router.get("/good", this.good);
    }
}

/* GET users listing. */
router.get('/', (req, res, next)=> {
    res.send('use');
});
//
// router.get('/good', (req, res, next) => {
//     let user = {name: "yws"};
//     res.send(`good ${user.name}`);
// });
var page = new Users();
export default  router;

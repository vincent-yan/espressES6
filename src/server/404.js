import app from 'express';

let router = app.Router();
app.use("*", (req, res, next)=> {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
module.exports = router;

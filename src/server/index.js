import app from 'express';
const router = app.Router();
router.get("/", (req, res, next) => {
    res.render('index', {title: 'hello'});
});

module.exports = router;

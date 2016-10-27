/**
 * Created by vincentyan on 2016/10/7.
 */
import app from 'express';

const router = app.Router();
class base {
    constructor() {
        init();
    }

    init() {
        console.log("base:init");
    }
}
export  default base;
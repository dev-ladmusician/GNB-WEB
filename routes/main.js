var express = require('express');
var router = express.Router();
var render = require('../_COMMON/render');

/* GET home page. */
router.get('/', function(req, res, next) {
    render.renderView(res, '_MAIN/index', { title: 'Express' });
});

module.exports = router;

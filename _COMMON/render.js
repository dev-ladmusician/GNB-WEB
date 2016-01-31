module.exports = {
    renderView: function (res, view, data) {
        //res.render('_COMMON/header');
        res.render(view, data);
        //res.render('_COMMON/footer');
    }
}
module.exports = {

    user:(app, req, res) => {
        req.assert('_name', 'Name is required.').notEmpty();
        req.assert('_email', 'Email is not valid.').notEmpty().isEmail();

        let errors = req.validationErrors();

        if (errors){
            return app.utils.error.send(errors, req, res);
            return false;
            
        } else {
            return true;
        }
    }
};
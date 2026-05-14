const path = require('path');
const Datastore = require('@seald-io/nedb');

const db = new Datastore({
  filename: path.join(__dirname, '..', 'users.db'),
  autoload: true
});

const DEFAULT_PHOTO = 'dist/img/boxed-bg.jpg';

function normalizeUser(user = {}) {
    const normalized = { ...user };

    if (normalized._name === undefined && normalized.name !== undefined) normalized._name = normalized.name;
    if (normalized._gender === undefined && normalized.gender !== undefined) normalized._gender = normalized.gender;
    if (normalized._birth === undefined && normalized.birth !== undefined) normalized._birth = normalized.birth;
    if (normalized._country === undefined && normalized.country !== undefined) normalized._country = normalized.country;
    if (normalized._email === undefined && normalized.email !== undefined) normalized._email = normalized.email;
    if (normalized._password === undefined && normalized.password !== undefined) normalized._password = normalized.password;
    if (normalized._photo === undefined && normalized.photo !== undefined) normalized._photo = normalized.photo;
    if (normalized._admin === undefined && normalized.admin !== undefined) normalized._admin = normalized.admin;

    if (!normalized._photo) normalized._photo = DEFAULT_PHOTO;
    if (!normalized._register) normalized._register = new Date();

    delete normalized.name;
    delete normalized.gender;
    delete normalized.birth;
    delete normalized.country;
    delete normalized.email;
    delete normalized.password;
    delete normalized.photo;
    delete normalized.admin;
    delete normalized.register;

    return normalized;
}

module.exports = (app) => {
    let route = app.route('/users');

    route.get((req, res) => {
        db.find({}).sort({ name: 1 }).exec((err, users) => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({
                    users
                });
                
            }

        });

    });

    route.post((req, res) => {

        const userData = normalizeUser(req.body);

        db.insert(userData, (err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);

            }

        });

    });

    let routeId = app.route('/users/:id');
    routeId.get((req, res) => {
        db.findOne({ _id: req.params.id }).exec((err, user) => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(user);
            }

        });

    });

    routeId.put((req, res) => {
        db.findOne({ _id: req.params.id }, (findErr, oldUser) => {

            if (findErr) {
                app.utils.error.send(findErr, req, res);
                return;
            }

            if (!oldUser) {
                res.status(404).json({ error: 'Usuário não encontrado' });
                return;
            }

            const userData = normalizeUser(Object.assign({}, oldUser, req.body));
            userData._id = oldUser._id;

            db.update({ _id: req.params.id }, userData, {}, err => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(userData);
            }

            });

        });

    });

    routeId.delete((req, res) => {
        db.remove({ _id: req.params.id }, {}, err => {

            if (err) {
                app.utils.error.send(err, req, res);
            } else {
                res.status(200).json(req.params);
            }

        });

    });

};
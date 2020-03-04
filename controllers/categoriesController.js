var Category = require('../models').categories;

module.exports = {
    getCategories: async (req, res) => {
        await Category.findAll().then(data => {
            res.send({ result: data });
        }).catch(error => {
            res.send({ result: error.message })
        });
    },
    postCategories: async (req, res) => {
        if (req.body.category) {
            await Category.create({
                category: req.body.category
            }).then(data => {
                res.send({ result: data });
            }).catch(error => {
                res.send({ result: error.message })
            });
        }
    },
    updateCategories: async (req, res) => {
        if (req.body.id && req.body.category) {
            await Category.update({ category: req.body.category }, {
                where: {
                    id: req.body.id
                }
            }).then(data => {
                res.send({ result: data });
            }).catch(error => {
                res.send({ result: error.message })
            });
        }
    },
    deleteCategories: async (req, res) => {
        if (req.params.id) {
            await Category.destroy({
                where: {
                    id: req.params.id
                }
            }).then(data => {
                res.send({ result: data });
            }).catch(error => {
                res.send({ result: error.message })
            });
        }
    }
}

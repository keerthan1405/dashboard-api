var subCategory = require('../models').subCategories;

module.exports = {
    getSubCategories: async (req, res) => {
        await subCategory.findAll().then(data => {
            res.send({ result: data });
        }).catch(error => {
            res.send({ result: error.message })
        });
    },
    getSubCategoriesByCategory: async (req, res) => {
        if (req.params.category_id) {
            await subCategory.findAll({
                where: {
                    category_id: req.params.category_id
                }
            }).then(data => {
                res.send({ result: data });
            }).catch(error => {
                res.send({ result: error.message })
            });
        }
    },

    postSubCategories: async (req, res) => {
        if (req.body.subCategory) {
            await subCategory.create({
                category_id: req.body.category_id,
                sub_category_name: req.body.subCategory
            }).then(data => {
                res.send({ result: data });
            }).catch(error => {
                res.send({ result: error.message })
            });
        }
    },
    updateSubCategories: async (req, res) => {
        if (req.body.id && req.body.subCategory) {
            await subCategory.update({ sub_category_name: req.body.subCategory }, {
                where: {
                    id: req.body.id
                }
            }).then(data => {
                res.send({ result: data });
            }).catch(error => {
                res.send({result: error.message})
            })
        }
    },
    deleteSubCategories: async (req, res) => {
        if (req.params.id) {
            await subCategory.destroy({
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

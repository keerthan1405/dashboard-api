var express = require('express');
var router = express.Router();
var categoriesController = require('../controllers/categoriesController');
var subCategoriesController = require('../controllers/subCategoriesController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/categories', categoriesController.getCategories);
router.post('/categories', categoriesController.postCategories);
router.put('/categories', categoriesController.updateCategories);
router.delete('/categories/:id', categoriesController.deleteCategories);

router.get('/subcategories', subCategoriesController.getSubCategories);
router.get('/subcategories/:category_id', subCategoriesController.getSubCategoriesByCategory);
router.post('/subcategories', subCategoriesController.postSubCategories);
router.put('/subcategories', subCategoriesController.updateSubCategories);
router.delete('/subcategories/:id', subCategoriesController.deleteSubCategories);
module.exports = router;

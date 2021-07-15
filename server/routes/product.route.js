const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.get('/api', ProductController.index);
    app.post('/api/create', ProductController.create);
    app.get('/api/show/:id', ProductController.show);
    app.put('/api/update/:id', ProductController.update);
    app.delete('/api/delete/:id', ProductController.delete);
}
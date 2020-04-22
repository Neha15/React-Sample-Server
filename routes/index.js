module.exports = (app) => {
    app.use('/api/users', require('./api/Users'));
    app.use('/api/category', require('./api/Categories'));
    app.use('/api/subcategory', require('./api/SubCategories'));
    app.use('/api/products', require('./api/Products'));
    app.use('/api/favourites', require('./api/Favourites'));
}
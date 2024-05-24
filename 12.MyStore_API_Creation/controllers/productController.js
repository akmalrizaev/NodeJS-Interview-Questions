const Products = require('../models/product');

const products = [
  {
    id: 1,
    productname: 'Apple',
    price: 20,
    img: 'apples.jpg',
  },
  {
    id: 2,
    productname: 'Banana',
    price: 15,
    img: 'bananas.jpg',
  },
  {
    id: 3,
    productname: 'Orange',
    price: 30,
    img: 'orange.jpg',
  },
  {
    id: 4,
    productname: 'Pineapple',
    price: 35,
    img: 'pineapple.jpg',
  },
  {
    id: 5,
    productname: 'Strawberry',
    price: 20,
    img: 'strawberry.jpg',
  },
];

exports.renderProducts = (req, res) => {
  Products.fetchProducts().then(([rows, fieldData]) => {
    res.render('home', { products: rows });
  });
};

exports.renderAddProduct = (req, res) => {
  res.render('add-product');
};

exports.renderEditProduct = (req, res) => {
  res.render('edit-product', {
    product: products[--req.params.id],
  });
};

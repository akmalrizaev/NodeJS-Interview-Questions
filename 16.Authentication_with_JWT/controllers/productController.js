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
  // Reading Cookie
  // const cookie = req.get('Cookie').split(';')[0].split('=')[1];
  // console.log(cookie);

  // const cookie = req.cookies;
  // console.log(cookie);

  // const cookie = req.session.isLoggedIn;
  const cookie = req.session.token;

  Products.fetchProducts().then(([rows, fieldData]) => {
    res.render('home', { products: rows, isLoggedIn: cookie });
  });
};

exports.renderAddProduct = (req, res) => {
  const cookie = req.session.isLoggedIn;
  res.render('add-product', { isLoggedIn: cookie });
};

exports.postAddProduct = (req, res) => {
  const { productname, price, image } = req.body;

  const products = new Products(null, productname, price, image);

  products.postData().then(() => {
    res.redirect('/');
  });
};

exports.renderEditProduct = (req, res) => {
  const cookie = req.session.isLoggedIn;
  Products.fetchProductById(req.params.id).then(
    ([[productData], fieldData]) => {
      res.render('edit-product', {
        product: productData,
        isLoggedIn: cookie,
      });
    }
  );
};

exports.editProduct = (req, res) => {
  const { productname, price, image } = req.body;
  const id = req.params.id;
  const products = new Products(id, productname, price, image);
  products.editData().then(() => {
    res.redirect('/');
  });
};

exports.deleteProduct = (req, res) => {
  Products.deleteProductById(req.params.id).then(() => {
    res.redirect('/');
  });
};

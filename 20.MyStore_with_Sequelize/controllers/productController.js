const Product = require('../models/product');

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

exports.renderProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    res.render('home', { products: products, isLoggedIn: global.isLoggedIn });
  } catch (err) {
    console.error(err);
    res.status(500).redirect('/error');
  }
};

exports.renderAddProduct = (req, res) => {
  const cookie = req.session.isLoggedIn;
  res.render('add-product', { isLoggedIn: global.isLoggedIn });
};

exports.postAddProduct = async (req, res) => {
  try {
    const { productname, price } = req.body;
    const image = req.file.destination + '/' + req.file.filename;

    // const products = new Products(null, productname, price, image);
    const newProduct = await Product.create({
      productname,
      price,
      image,
    });
    console.log('Product added successfully: ', newProduct);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).redirect('/error');
  }

  // products.postData().then(() => {
  //   res.redirect('/');
  // });
};

exports.renderEditProduct = async (req, res) => {
  try {
    const cookie = req.session.isLoggedIn;
    const product = await Product.findByPk(req.params.id);

    if (product) {
      ([[productData], fieldData]) => {
        res.render('edit-product', {
          product: product,
          isLoggedIn: global.isLoggedIn,
        });
      };
    } else {
      res.redirect('/');
    }
  } catch (err) {
    console.error(err);
    res.status(500).redirect('/error');
  }
};

exports.editProduct = async (req, res) => {
  try {
    const { productname, price } = req.body;
    const image = req.file.destination + '/' + req.file.filename;
    const id = req.params.id;
    const product = await Product.findByPk(id);

    if (!product) {
      console.error('Product not found');
      return res.status(404).send('Product not found');
    }

    product.productname = productname;
    product.price = price;
    product.image = image;

    await product.save();
    console.log('Product edited successfully');
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).redirect('/error');
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.destroy({ where: { id: req.params.id } });
    console.log('Product deleted successfully');

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).redirect('/error');
  }
};

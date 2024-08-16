import productModel from "../model/productModel.js";

const getProducts = (req, res) => {};

const addProduct = async (req, res) => {
//   // name,photoURL,description,price,brand,category,rating

//   const { products } = await fetch(
//     "https://dummyjson.com/products/category/mobile-accessories"
//   ).then((res) => res.json());

  

//   const product =products.map(products => ({
//     name: products.title,
//     photoURL: products.thumbnail,
//     description: products.description,
//     price: Math.round(parseFloat(products.price)),
//     brand: products.brand,
//     category: products.category,
//     rating: parseFloat(products.rating),
//   }));

//   console.log(product);

//   try {
//     const result = await productModel.insertMany(product);
//    return res.send(result);
//   } catch (error) {
//     console.log(error.message);
//   }
};

export { getProducts, addProduct };

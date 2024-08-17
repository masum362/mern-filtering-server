import productModel from "../model/productModel.js";

const getProducts = async (req, res) => {
  const { search, brand, category, price_range, sort_order, skip, limit } =
    req.query;

  try {
    let query = {};
    if (search) query.name = new RegExp(search, "i");
    if (brand) query.brand = brand;
    if (category) query.category = category;
    if (price_range) {
      query.price = {
        $gte: 0,
        $lte: Number(price_range),
      };
    }

    let sortBy = {};
    if (sort_order === "low_to_high") {
      sortBy.price = 1;
    } else if (sort_order === "high_to_low") {
      sortBy.price = -1;
    } else if (sort_order === "newest_date") {
      sortBy.date = -1;
    }

    const result = await productModel
      .find(query)
      .skip(parseInt(skip))
      .limit(parseInt(limit))
      .sort(sortBy);
    return res.send(result);
  } catch (error) {
    console.log(error.message);
  }
};

const getNumberOfProducts = async (req, res) => {
  const { search, brand, category, price_range } =
    req.query;

  try {
    // const id = req.params.id;
    let query = {};
    if (search) query.name = new RegExp(search, "i");
    if (brand) query.brand = brand;
    if (category) query.category = category;
    if (price_range) {
      query.price = {
        $gte: 0,
        $lte: Number(price_range),
      };
    }
    const result = await productModel
      .countDocuments(query)
    // const numberOfProducts = await productModel.countDocuments();

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAllCategories = async(req, res) => {
console.log('called category')
  try {
    const categories = await productModel.distinct("category");
    // console.log(categories)
  return res.send(categories)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ message: error.message });

  }
};

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

export { getProducts, addProduct, getNumberOfProducts ,getAllCategories};

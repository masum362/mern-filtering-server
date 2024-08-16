import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photoURL: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const productModel = new mongoose.model("product", productSchema);

export default productModel;

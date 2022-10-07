const { verifyTokenAndAdmin } = require("../middleware/verifyToken");
const Product = require("../models/Product");

const router = require("express").Router();

//CREATE PRODUCTS
router.post("/", verifyTokenAndAdmin, (req, res) => {
  return Product.create(req.body)
    .then((product) => {
      res.status(201).json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// UPDATE PRODUCT
router.put("/:id", verifyTokenAndAdmin, (req, res) => {
  return Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    { new: true }
  )
    .then(() => {
      res.status(200).json("Product Updated Successfuly");
    })
    .catch((err) => {
      res.status(500).json("Product Updated Failed");
    });
});

//DELETE PRODUCT
router.delete("/:id", verifyTokenAndAdmin, (req, res) => {
  return Product.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json("Product Deleted Successfuly");
    })
    .catch((err) => {
      res.status(500).json("Product Deleted Failed");
    });
});

// GET PRODUCT
router.get("/find/:id", (req, res) => {
  return Product.findById(req.params.id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// GET ALL PRODUCTS
router.get("/", (req, res) => {
  const query = req.query.new;
  const product = query
    ? Product.find()
        .sort({ _id: -1 })
        .limit(5)
        .then((products) => {
          res.status(200).json(products);
        })
        .catch((err) => {
          res.status(500).json(err);
        })
    : Product.find()
        .then((products) => {
          res.status(200).json(products);
        })
        .catch((err) => {
          res.status(500).json(err);
        });
});

module.exports = router;

const Category = require("../models/CategoryModel");

exports.get = function (req, res) {
  Category.find({})
    .exec()
    .then((categories) => {
      res.send(categories);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.create = function (req, res) {
  const newCategory = new Category({
    name: req.body.name,
    description: req.body.description,
    rules: req.body.rules,
    image: req.body.image,
  });

  newCategory
    .save()
    .then((category) => {
      res.send(category);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.update = function (req, res) {
  const categoryId = req.params.id;

  Category.findByIdAndUpdate(categoryId, req.body, { new: true })
    .then((updatedCategory) => {
      if (!updatedCategory) {
        return res.status(404).send("Category not found.");
      }
      res.send(updatedCategory);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.deleteById = function (req, res) {
  const categoryId = req.params.id;

  Category.findByIdAndDelete(categoryId)
    .then((deletedCategory) => {
      if (!deletedCategory) {
        return res.status(404).send("Category not found.");
      }
      res.send(deletedCategory);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.updateImg = function (req, res) {
  const categoryId = req.params.id;
  const imageData = req.body.image;

  Category.findByIdAndUpdate(
    categoryId,
    { image: imageData }, // update only the image field
    { new: true }
  )
    .then((updatedCategory) => {
      if (!updatedCategory) {
        return res.status(404).send("Category not found.");
      }
      res.send(updatedCategory);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

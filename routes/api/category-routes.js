const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try{
    const categories = await Product.findAll({
      // be sure to include its associated products
      include: [{model: Product}],
    });
    res.statusCode(200).json(categories);
  }catch (err){
    res.status(500).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const categoryData = await Product.findByPk(req.params.id, {
    // be sure to include its associated Products
    include: [{model: Product}],
    });

    if(!categoryData){
      res.status(404).json({message: 'No Category found with that id'});
      return;
    }

    res.statusCode(200).json(categoryData);
  }catch (err){
    res.status(500).json(err);
  }
  
});

router.post('/', async (req, res) => {
  //FIXME: create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  //FIXME: update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No Category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  //FIXME: delete a category by its `id` value
  try {
    const categoryData = await Category.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No Category with this id!' });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

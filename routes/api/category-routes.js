const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// WORKING! DESCRIPTION: get all categories
router.get('/', async (req, res) => {
  // find all categories
  try{
    const categories = await Category.findAll({
      // be sure to include its associated products
      include: [{model: Product}],
    });
    res.status(200).json(categories);
  }catch (err){
    res.status(500).json(err);
  }
  
});

// WORKING! DESCRIPTION: get one category from id
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try{
    const categoryData = await Category.findByPk(req.params.id, {
    // be sure to include its associated Products
    include: [{model: Product}],
    });

    if(!categoryData){
      res.status(404).json({message: 'No Category found with that id'});
      return;
    }

    res.status(200).json(categoryData);
  }catch (err){
    res.status(500).json(err);
  }
  
});

// WORKING! DESCRIPTION: create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// WORKING! DESCRIPTION: update a category by its `id` value
router.put('/:id', async (req, res) => {
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

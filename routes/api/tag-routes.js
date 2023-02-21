const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  try{
    const tags = await Product.findAll({
      // be sure to include its associated Product data
      include: [{model: Product}, {model: ProductTag}],
    });
    res.statusCode(200).json(tags);
  }catch (err){
    res.status(500).json(err);
  }
  
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  try{
    const tagData = await Product.findByPk(req.params.id, {
    // be sure to include its associated Product data
    include: [{model: Product}, {model: ProductTag}],
    });

    if(!tagData){
      res.status(404).json({message: 'No Tag found with that id'});
      return;
    }

    res.statusCode(200).json(tagData);
  }catch (err){
    res.status(500).json(err);
  }
  
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData[0]) {
      res.status(404).json({ message: 'No Tag with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tagData = await Tag.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!tagData[0]) {
      res.status(404).json({ message: 'No Tag with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

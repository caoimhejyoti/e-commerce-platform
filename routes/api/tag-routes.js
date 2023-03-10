const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// DESCRIPTION: get all tags, including its associated Product data
router.get('/', async (req, res) => {
  try{
    const tags = await Tag.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(tags);
  }catch (err){
    res.status(500).json(err);
  }
  
});

// DESCRIPTION: get one tag by its `id`, including its associated Product data
router.get('/:id', async (req, res) => {

  try{
    const tagData = await Tag.findByPk(req.params.id, {
    include: [{model: Product}],
    });

    if(!tagData){
      res.status(404).json({message: 'No Tag found with that id'});
      return;
    }

    res.status(200).json(tagData);
  }catch (err){
    res.status(500).json(err);
  }
  
});

// DESCRIPTION: create a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DESCRIPTION: update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
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

// DESCRIPTION: delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const chosenId = req.params.id;
    const deletedProductTag = await ProductTag.destroy({
      where: {
        id: chosenId,
      },
    });
    const deletedTag = await Tag.destroy({
      where: {
        id: chosenId,
      },
    });

    if (!deletedTag) {
      res.status(404).json({ message: 'No Tag with this id!' });
      return;
    }

    deletedProductTag;
    deletedTag;
    res.status(200).json({ message: 'Tag successfully deleted.' });

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

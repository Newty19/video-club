const express = require('express');
const router = express.Router();
const controller = require('../controllers/movie')

/* GET users listing. */
router.get('/', controller.list);

router.get('/:id', controller.index);

router.post('/', controller.create);

router.put('/:id', controller.replace);

router.patch('/:id', controller.update);

router.patch('/add/actor', controller.addActor);

router.delete('/:id', controller.destroy);

router.post('/:id',controller.addActor);

module.exports = router;

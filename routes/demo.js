const router = require('express').Router();

const DemoController = require('../controller/demo');

module.exports = router;

router.get('/', DemoController.helloWorld);
router.post('/ninjas', DemoController.helloNinja);

router.post('/dogs', DemoController.addDog);
router.get('/dogs', DemoController.getDogs);
router.get('/dogs/:id', DemoController.getDog);
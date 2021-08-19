const router = require('express').Router();
const db = require('./models/index');

router.get('/population/:count', (req, res) => {
  db.getPopulation(req.params.count)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});
router.get('/capital/:country', (req, res) => {
  db.getCapital(req.params.country)
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});
router.get('/test', (req, res) => {
  db.getTest()
    .then((data) => res.send(data))
    .catch((err) => res.send(err));
});

module.exports = router;
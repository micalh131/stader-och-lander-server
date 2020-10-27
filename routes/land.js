var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res, next) {
  fs.readFile("land.json", (err, data) => {

    if (err) throw err;
    var land = JSON.parse(data);
    res.send(land);
  })
});

router.post('/land', function (req, res) {
  const data = JSON.stringify(req.body, null, 2);
  console.log(data);
  fs.writeFile('./land.json', data, (err) => {
    if (err) throw err;
  })


  res.send("Land sparat!");
});


module.exports = router;
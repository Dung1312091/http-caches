var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
// respond with "hello world" when a GET request is made to the homepage
app.get('/test', function (req, res) {
    const data = {
        a: 1, b:2, c:3
    }
    console.log("vao roi ne");
    res.set('Cache-Control', 'public, max-age=31557600');
  res.status(200).json(data);
})
app.listen(3001, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
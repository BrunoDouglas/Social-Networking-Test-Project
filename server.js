var express     = require('express');
var bodyParser  = reuire('body-parser');

var app         = express()

app.use('/api/posts', function(req,res)
{
  res.json([{
      username: 'brunhox',
      body:     'node roxxx!'
  }]);
})

app.listen(3000, function()
{
    console.log('Server listening on', 3000);
});

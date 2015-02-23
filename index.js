
var Readability = require('./Readability');

var jsdom = require('jsdom');

var parse = require('url').parse;

var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/api/readability/:url', function (req, res) {
  var url = req.params.url;

  // console.log('URL:', parse(url));

  jsdom.env(
    url,
    [],
    function (errors, window) {
      if (errors) {
        console.log('errors', errors);
        res.status(500).json({ errors: errors });
      } else {
        var reader = new Readability(url, window.document);
        // console.log('reader', reader);
        var parsed = reader.parse();
        console.log('parsed', parsed);
        res.json(parsed);
      }
    }
  );
});

app.use(express.static(__dirname + '/public'));

var server = app.listen(app.get('port'), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

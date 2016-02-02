var translate = require('../lib/translate'),
	express = require('express'),
	cors = require('cors');

var app = express();

app.use(cors());

app.get('/translate/:sl/:tl/:text', function (req, res) {
	var text = req.params.text,
		sl = req.params.sl,
		tl = req.params.tl;
	translate({
		text: text,
		source: sl || 'es',
		target: tl || 'en'
	}, function (translation) {
		res.send({
			"translation": translation
		});
	});
});
app.get('/translate/:text', function (req, res) {
	var text = req.params.text;
	translate({
		text: text,
		source: 'es',
		target: 'en'
	}, function (translation) {
		res.send({
			"translation": translation
		});
	});
});
app.listen(8080);

'use strict';

var path = process.cwd();
var TimestampApi = require(path + '/app/controllers/timestampApi.server.js');

module.exports = function (app) {

	var timestampApi = new TimestampApi();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/:timevalue')
		.get(timestampApi.getJson);

};

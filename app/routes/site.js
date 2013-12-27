var siteutils = require('../siteutils');
exports.index = function(req, res){
	res.sendfile(siteutils.appBaseDir + '/index.html' );

};
exports.partials = function(req, res){
	res.sendfile(siteutils.appBaseDir + '/partials/' + req.params.partialname);

};
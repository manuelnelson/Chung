var keystone = require('keystone'),
	_ = require('underscore'),
	galleries = keystone.list('Gallery').model;

exports = module.exports = function(req, res) {
    if(req.query.categoryId){
        galleries.find({category:req.query.categoryId}).exec(function(err, results){
            return res.json({images:results});
        });
    }
    else {
        galleries.find().exec(function(err, results) {
            return res.json({images:results});
        });
    }

}

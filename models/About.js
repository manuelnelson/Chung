var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * =============
 */

var About = new keystone.List('About', {
	autokey: { from: 'name', path: 'key', unique: true },
});

About.add({
	name: { type: String, required: true },
	// largeImage: { type: Types.CloudinaryImage },
	description: {type: Types.Html, wysiwyg: true}
});

About.register();

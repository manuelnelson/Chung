var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Contact Model
 * =============
 */

var Contact = new keystone.List('Contact', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Contact.add({
	name: { type: String, required: true },
	// largeImage: { type: Types.CloudinaryImage },
	description: {type: Types.Html, wysiwyg: true}
});

Contact.register();

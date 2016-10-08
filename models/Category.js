var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Category Model
 * =============
 */

var Category = new keystone.List('Category', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Category.add({
	name: { type: String, required: true },
	largeImage: { type: Types.CloudinaryImage },
	images: { type: Types.CloudinaryImages },
	description: {type: Types.Html, wysiwyg: true}
});

Category.register();

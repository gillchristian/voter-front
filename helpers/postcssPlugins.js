var importer        = require('postcss-import'),
    mixins          = require('postcss-mixins'),
    nested          = require('postcss-nested'),
    variables       = require('postcss-advanced-variables');

var postcssPlugins = {
	preRucksack : 
		[
		    importer,
		    mixins,
		    variables,
		    nested
		]

};

module.exports = postcssPlugins;
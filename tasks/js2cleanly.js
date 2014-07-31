/*
 * grunt-js2cleanly
 * https://github.com/ifedu/grunt-js2cleanly
 *
 * Copyright (c) 2014 Eduardo P�rez-Bermejo
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
    'use strict';

    var js2Cleanly = require('js2cleanly');

    grunt.registerMultiTask('js2cleanly', 'js2cleanly for Grunt', function() {
        this.files.forEach(function (files) {
			files = files.src.filter(function(filepath) {
				return (!grunt.file.exists(filepath)) ? false : true;
			});

			for (var i = 0, length = files.length; i < length; i++) {
				var file = files[i];

				var dataFile = grunt.file.read(file);
				dataFile = js2Cleanly(dataFile);
				grunt.file.write(file + '-cleanly', dataFile);
				grunt.log.writeln('File "' + file + '-cleanly' + '" created.');
			}
		});
    });
};
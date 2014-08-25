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
            var filesDest = files.dest;

            var filesSrc = files.src.filter(function(filepath) {
                return (!grunt.file.exists(filepath)) ? false : true;
            });

            for (var i = 0, length = filesSrc.length; i < length; i++) {
                var fileSrc = filesSrc[i];

                var dataFile = grunt.file.read(fileSrc);
                dataFile = js2Cleanly(dataFile);
                grunt.file.write(filesDest + fileSrc + '-cleanly', dataFile);
                grunt.log.writeln('File "' + filesDest + fileSrc + '-cleanly' + '" created.');
            }
        });
    });
};
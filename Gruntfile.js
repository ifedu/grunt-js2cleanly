/*
 * grunt-js2cleanly
 * https://github.com/ifedu/grunt-js2cleanly
 *
 * Copyright (c) 2014 Eduardo P�rez-Bermejo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    grunt.initConfig({  
        js2cleanly: { 
            files: {
                src: ['file1', 'file2']
            } 
        } 
    });

    grunt.registerTask('default', ['js2cleanly']);
};

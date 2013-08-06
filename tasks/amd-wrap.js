"use strict";

var amdWrap = require("amd-wrap");
var description = require("../package.json").description;

module.exports = function (grunt) {
    grunt.registerMultiTask("amdwrap", description, function () {
        this.files.forEach(function (file) {
            if (file.src.length !== 1) {
                grunt.fail.warn("Cannot have multiple src files for the dest file \"" + file.dest + "\".");
                return;
            }

            var srcText = grunt.file.read(file.src[0]);
            var destText = amdWrap(srcText);

            grunt.file.write(file.dest, destText);
        });
    });
};

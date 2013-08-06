"use strict";

module.exports = function (grunt) {
    grunt.loadTasks("tasks");
    grunt.loadNpmTasks("grunt-simple-mocha");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.initConfig({
        amdwrap: {
            test: {
                expand: true,
                cwd: "test/input/",
                src: ["*.js"],
                dest: "test/output/"
            }
        },
        clean: { test: "test/output/*" },
        simplemocha: { test: "test/test.js" }
    });

    grunt.registerTask("test", ["clean", "amdwrap", "simplemocha", "clean"]);
};

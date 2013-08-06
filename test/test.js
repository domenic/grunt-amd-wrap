"use strict";

var path = require("path");
var fs = require("fs");
var assert = require("assert");

function relative(filePath) {
    return path.resolve(__dirname, filePath);
}

specify("It works", function () {
    var outputs = fs.readdirSync(relative("output"));
    var expected = fs.readdirSync(relative("expected"));

    assert.deepEqual(outputs, expected, "Expected files should exist in output directory.");
    expected.forEach(function (expectedFileName, i) {
        var outputFileName = outputs[i];
        var output = fs.readFileSync(relative("output/" + outputFileName), "utf-8");
        var expected = fs.readFileSync(relative("expected/" + expectedFileName), "utf-8");

        assert.strictEqual(output, expected, "File \"" + expectedFileName + "\" should contain the expected contents.");
    });
});

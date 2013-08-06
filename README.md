# Wrap CommonJS in AMD via Grunt

This is a [Grunt](http://gruntjs.com/) plugin to wrap your CommonJS modules into the
[simplified CommonJS wrapper](https://github.com/amdjs/amdjs-api/wiki/AMD#simplified-commonjs-wrapping-) format, i.e.:

```js
define(function (require, exports, module) {
    // your CommonJS code here
});
```

It's based on [amd-wrap](https://npmjs.org/package/amd-wrap), if you want this functionality outside of a Grunt plugin.

## Usage

It doesn't take any options. You just configure it to map each source file to a destination file, and you end up with
some wrapped-up-as-AMD modules. I'll give a few examples here, each under a different build target:

```js
grunt.loadNpmTasks("grunt-amd-wrap");

grunt.initConfig({
    amdwrap: {
        onlyOneFile: {
            { src: "lib/my-module.js", dest: "artifacts/amd/my-module.js" }
        },
        aFewFilesManually: {
            { src: "lib/my-module.js", dest: "artifacts/amd/my-module.js" },
            { src: "lib/helper-module.js", dest: "artifacts/amd/helper-module.js" }
        },
        usingDynamicExpansion: {
            expand: true,
            cwd: "lib/",
            src: ["*.js"],
            dest: "artifacts/amd/"
        }
    }
});
```

You'll probably want to use the last pattern most of the time. It's based on Grunt's
[dynamic mapping expansion](http://gruntjs.com/configuring-tasks#building-the-files-object-dynamically) feature.

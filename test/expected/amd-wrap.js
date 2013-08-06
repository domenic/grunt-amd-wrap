define(function (require, exports, module) {"use strict";

module.exports = function (commonJSModuleText) {
    return "define(function (require, exports, module) {" + commonJSModuleText + "\n});\n";
};

});

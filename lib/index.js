var util = require('util');
var special = require('special-html');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to sanitize special unicode chars in html
 *
 * @param {Object or String} options (optional)
 * @return {Function}
 */

function plugin(options) {

    return function(files, metalsmith, done) {

        Object.keys(files).forEach(function(file) {
            var data = files[file];
            data.contents = new Buffer(special(data.contents.toString()));
        });
        done();
    }
}

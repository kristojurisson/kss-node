'use strict';

// This optional file is used to load the CLI options and KSS generator needed
// by this template.
//
// The filename should follow standard node.js require() conventions. See
// http://nodejs.org/api/modules.html#modules_folders_as_modules It should
// either be named index.js or have its name set in the "main" property of the
// template's package.json.

var KssHandlebarsGenerator;

try {
  // In order for a template to be "kss-node clone"-able, it must use the
  // require('kss/generator/path') syntax (instead of requiring a relative
  // path).
  KssHandlebarsGenerator = require('kss/generator/handlebars');
} catch (e) {
  // The above require() line will always fail while testing a git clone of this
  // module because this code is not inside a node_modules/kss folder which
  // would allow node.js to find it with require('kss/anything'). So we catch
  // the error and use a relative path.
  KssHandlebarsGenerator = require('../kss_handlebars_generator.js');
}

// Tell kss-node which generator this template uses.
module.exports.generator = KssHandlebarsGenerator;

// Tell kss-node which Yargs options this template has.
// See https://github.com/bcoe/yargs/blob/master/README.md#optionskey-opt
module.exports.options = {
  'title': {
    group: 'Style guide:',
    string: true,
    multiple: false,
    describe: 'Title of the style guide',
    default: 'KSS Style Guide'
  },
  'nav-depth': {
    group: 'Style guide:',
    multiple: false,
    describe: 'Limit the navigation to the depth specified',
    default: 3
  }
};

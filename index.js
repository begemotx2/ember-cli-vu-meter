/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-vu-meter',
    included: function(app, parentAddon) {
        var target = (parentAddon || app);
        target.import('vendor/vu-meter.css');
    },
    isDevelopingAddon: function() {
      return true;
    }
};

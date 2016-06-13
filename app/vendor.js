module.exports = function () {
    console.info('vendor.js loaded');
    /* Styles */
    require('./scss/style1.scss');
    require('./scss/style2.scss');
    require('./scss/lumx.scss');
    require('../node_modules/mdi/scss/materialdesignicons.scss');
    /* JS (node_modules) */
    global.$ = global.jQuery = require('jquery');
    require('velocity-animate');
    require('angular');
    global.moment = require('moment');
    //require('node-lumx');
    require('imports?angular!./../bower_components/lumx/dist/lumx.js');
};
module.exports = function () {
    console.info('vendor.js loaded');
    /* Styles */
    require('./scss/style1.scss');
    require('./scss/style2.scss');
    /* JS (node_modules) */
    require('angular');
};
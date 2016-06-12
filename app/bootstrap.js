(function() {
    
    'use strict';

    // Log
    console.info('bootstrap.js loaded');

    // Load vendor.js
    require('./vendor')();

    // Load index.js
    var appModule = require('./index');

    // Modules
    var module1 = require('./scripts/module1');
    var module2 = require('./scripts/module2');
    var moduleEs6 = require('./scripts/module-es6');

    // DOM ready
    angular.element(document).ready(function () {
        console.info('DOM ready : bootstrap the angular app');
        // Bootstrap the angular app
        angular.bootstrap(document, [appModule.name], {});
        // Call functions
        module1.fModule1();
        module2.fModule2();
        moduleEs6.fModuleEs6();
    });

}());
console.info('module-es6.js loaded');
    
module.exports.fModuleEs6 = function(status='working') {
    console.info('module-es6.js -> fModuleEs6 called');
    let message = 'ES6';                  
    console.info(`Writing in es6 : ${message} is ${status}`);
};

(function(){
    var configObj = {
        baseUrl:"/js",
        paths: {
            // zepto
            zepto: 'lib/zepto/zepto.min',
            touch: 'lib/zepto/touch.min'
        },
        shim: {
            'touch': {
                deps: ['zepto']
            }
        }
    };

    requirejs.config(configObj);

})();

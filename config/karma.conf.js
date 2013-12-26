module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'app/public/lib/angular/angular.js',
      'app/public/lib/angular/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'app/public/js/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [
      'app/public/lib/angular/angular-loader.js',
      'app/public/lib/angular/*.min.js',
      'app/public/lib/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}

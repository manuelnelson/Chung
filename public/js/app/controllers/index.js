'use strict';

var angular = require('angular');

angular.module('mama-chung').controller('HomeController', require('./HomeController.js')).controller('AboutController', require('./AboutController.js'))
    .controller('ContactController', require('./ContactController.js'));

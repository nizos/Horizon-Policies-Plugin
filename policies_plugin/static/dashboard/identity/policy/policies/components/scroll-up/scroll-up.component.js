(function() {
    'use strict';

    angular
        .module('horizon.dashboard.identity.policy.policies.components.scroll-up')
        .component('scrollUp', {
            templateUrl: [
                'horizon.dashboard.identity.policy.policies.components.scroll-up.basePath',
                function(basePath) {
                    return basePath + 'scroll-up.html'
                }
            ],
            controller: 'ScrollUpController',
            controllerAs: '$scrCtrl'
        });
})();

(function() {
    'use strict';

    angular
        .module('horizon.dashboard.identity.policy.policies.components.policies-table')
        .component('policiesTable', {
            templateUrl: [
                'horizon.dashboard.identity.policy.policies.components.policies-table.basePath',
                function(basePath) {
                    return basePath + 'policies-table.html'
                }
            ],
            controller: 'TableController',
            controllerAs: '$tblCtrl'
        });
})();

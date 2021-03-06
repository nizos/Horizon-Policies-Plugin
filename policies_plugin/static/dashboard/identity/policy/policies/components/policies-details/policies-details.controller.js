(function() {
    'use strict';

    angular
        .module('horizon.dashboard.identity.policy.policies.components.policies-details')
        .controller('DetailsController', [
            '$uibModalInstance',
            '$policy',
            function($uibModalInstance, $policy) {

                var $dtlCtrl = this;
                $dtlCtrl.policy = $policy;
                $dtlCtrl.project = $policy['project'];
                $dtlCtrl.target = $policy['target'];
                $dtlCtrl.rule = $policy['rule'];
                $dtlCtrl.defaultRule = $policy['defaultRule'];
                $dtlCtrl.scopes = $policy['scopes'];
                $dtlCtrl.operations = $policy['operations'];
                $dtlCtrl.description = $policy['description'];
                $dtlCtrl.showForm = false;
                $dtlCtrl.showJson = false;
                $dtlCtrl.isButtonVisible = true;
                $dtlCtrl.limit = 3;

                $dtlCtrl.ok = function() {
                    $policy['rule'] = $dtlCtrl.rule;
                    $uibModalInstance.close($policy);
                };

                $dtlCtrl.cancel = function() {
                    $uibModalInstance.dismiss('cancel');
                }

                $dtlCtrl.loadMore = function() {
                    $dtlCtrl.limit = $dtlCtrl.operations.length;
                    $dtlCtrl.isButtonVisible = false;
                 }
            }
        ]);
})();

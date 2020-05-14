/*
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function() {
    'use strict';

    angular
        .module('horizon.dashboard.identity.policy.actions.reload')
        .provider('$actionsReload', [
            function () {
                this.$get = [
                    'horizon.dashboard.identity.policy.model.policies-model',
                    'horizon.framework.widgets.toast.service',
                    'horizon.dashboard.identity.policy.api',
                    '$q',
                    function (PoliciesModel, toastService, Api, $q) {
                        return {
                            loadPolicies: function () {
                                let deferred = $q.defer();
                                deferred.notify("loading policies");
                                let successful;
                                try {
                                    Api.getRules().success(function(response) {
                                        response.forEach(function(policy) {
                                            policy.expanded=false;
                                        });
                                        PoliciesModel.setAllPolicies(response);
                                        PoliciesModel.setFilteredPolicies(response);
                                        PoliciesModel.setCurrentPage(0);
                                        PoliciesModel.setItemsPerPage("20");
                                        PoliciesModel.setNumberOfPages(Math.ceil(PoliciesModel.data.filteredPolicies.length/PoliciesModel.data.itemsPerPage));
                                        deferred.resolve(successful);
                                    })
                                } catch (err) {
                                    deferred.reject(err);
                                    toastService.add('error', gettext('Could not load policies!'));
                                }
                                return deferred.promise;
                            },
                            reloadPolicies: function () {
                                let deferred = $q.defer();
                                deferred.notify("Reloading policies");
                                let successful;
                                try {
                                    Api.getRules().success(function(response) {
                                        response.forEach(function(policy) {
                                            policy.expanded=false;
                                        });
                                        PoliciesModel.setAllPolicies(response);
                                        PoliciesModel.setFilteredPolicies(response);
                                        PoliciesModel.setCurrentPage(0);
                                        PoliciesModel.setItemsPerPage("20");
                                        PoliciesModel.setNumberOfPages(Math.ceil(PoliciesModel.data.filteredPolicies.length/PoliciesModel.data.itemsPerPage));
                                        toastService.add('success', gettext('Policies reloaded successfully'));
                                        deferred.resolve(successful);
                                    })
                                } catch (err) {
                                    deferred.reject(err);
                                    toastService.add('error', gettext('Could not reloaded policies!'));
                                }
                                return deferred.promise;
                            }
                        };
                    }
                ];
            }
        ]);
})();
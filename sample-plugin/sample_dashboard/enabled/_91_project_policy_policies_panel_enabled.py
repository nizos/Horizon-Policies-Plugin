#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.



PANEL = 'policies'
# The slug of the panel group the PANEL is associated with.
PANEL_GROUP = 'policy'
# The slug of the dashboard the PANEL associated with. Required.
PANEL_DASHBOARD = 'project'

# Python panel class of the PANEL to be added.
ADD_PANEL = (
    'sample_dashboard.dashboards.project.policy.panel'
    '.Policies')









# from django.utils.translation import ugettext_lazy as _
# # The slug of the panel to be added to HORIZON_CONFIG. Required.
# PANEL = 'sample'
# # The slug of the dashboard the PANEL is associated with. Required.
# PANEL_DASHBOARD = 'project'
# # The slug of the panel group the PANEL is associated with.
# PANEL_GROUP = 'policy'

# PANEL_GROUP_NAME = _('Policy')

# # Python panel class of the PANEL to be added.
# ADD_PANEL = (
#     'sample_dashboard.dashboards.project.sample.panel'
#     '.Sample')

# ADD_INSTALLED_APPS = ['sample_dashboard']

# ADD_ANGULAR_MODULES = ['horizon.dashboard.project.sample']

# AUTO_DISCOVER_STATIC_FILES = True

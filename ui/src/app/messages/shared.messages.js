// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineMessages } = require('react-intl');

const sharedMessages = defineMessages({
  name: {
    id: 'shared.name',
    defaultMessage: 'Name'
  },
  url: {
    id: 'shared.url',
    defaultMessage: 'Url'
  },
  add: {
    id: 'shared.add',
    defaultMessage: 'Add'
  },
  delete: {
    id: 'shared.delete',
    defaultMessage: 'Delete'
  },
  disable: {
    id: 'shared.disable',
    defaultMessage: 'Disable'
  },
  search: {
    id: 'shared.search',
    defaultMessage: 'Search'
  },
  lastModified: {
    id: 'shared.lastModified',
    defaultMessage: 'Last modified'
  },
  description: {
    id: 'shared.description',
    defaultMessage: 'Description'
  },
  details: {
    id: 'shared.details',
    defaultMessage: 'Details'
  },
  created: {
    id: 'shared.created',
    defaultMessage: 'Created'
  },
  type: {
    id: 'shared.type',
    defaultMessage: 'Type'
  },
  revision: {
    id: 'shared.revision',
    defaultMessage: 'Revision'
  },
  filterByName: {
    id: 'shared.filterByName',
    defaultMessage: 'Filter by {name}'
  },
  noResultsFound: {
    id: 'shared.noResultsFound',
    defaultMessage: 'No results found'
  },
  noResult: {
    id: 'shared.noResult',
    defaultMessage: 'No {results}'
  },
  job: {
    id: 'shared.job',
    defaultMessage: 'Job'
  },
  jobs: {
    id: 'shared.jobs',
    defaultMessage: 'Jobs'
  },
  addJob: {
    id: 'activation.addJob',
    defaultMessage: 'Add job'
  },
  deleteJobTitle: {
    id: 'activation.deleteJob',
    defaultMessage: 'Delete job'
  },
  status: {
    id: 'shared.status',
    defaultMessage: 'Status'
  },
  rule: {
    id: 'shared.rule',
    defaultMessage: 'Rule'
  },
  clearAllFilters: {
    id: 'shared.clearAllFilters',
    defaultMessage: 'Clear all filters'
  },
  clearAllFiltersDescription: {
    id: 'shared.clearAllFiltersDescription',
    defaultMessage:
      'No results match the filter criteria. Remove all filters or clear all filters to show results.'
  },
  ariaLabel: {
    id: 'shared.ariaLabel',
    defaultMessage: '{name} table'
  },
  updatedLabel: {
    id: 'shared.updatedLabel',
    defaultMessage: 'Updated'
  },
  allFieldsRequired: {
    id: 'shared.allFieldsRequired',
    defaultMessage: 'All fields are required'
  },
  output: {
    id: 'shared.output',
    defaultMessage: 'Output'
  },
  rulebookActivations: {
    id: 'shared.rulebookActivations',
    defaultMessage: 'Rulebook Activations'
  },
  namePlaceholder: {
    id: 'shared.namePlaceholder',
    defaultMessage: 'Insert name here'
  },
  descriptionPlaceholder: {
    id: 'shared.descriptionPlaceholder',
    defaultMessage: 'Insert description here'
  },
  rules: {
    id: 'shared.rules',
    defaultMessage: 'Rules'
  },
  sources: {
    id: 'shared.sources',
    defaultMessage: 'Sources'
  },
  project: {
    id: 'project.project',
    defaultMessage: 'Project'
  },
  projects: {
    id: 'project.projects',
    defaultMessage: 'Projects'
  },
  noprojects: {
    id: 'project.noprojects',
    defaultMessage: 'No projects'
  },
  add_new_project: {
    id: 'project.addNewProject',
    defaultMessage: 'Add new project'
  },
  addProject: {
    id: 'project.addProject',
    defaultMessage: 'Add project'
  },
  deleteProjectTitle: {
    id: 'project.deleteProject',
    defaultMessage: 'Delete project'
  },
  backToProjects: {
    id: 'project.backToProjects',
    defaultMessage: 'Back to projects'
  },
  project_link: {
  id: 'project.project_link',
    defaultMessage: 'Project link'
},
  scmUrl: {
    id: 'project.scmUrl',
    defaultMessage: 'SCM URL'
  },
  scmType: {
    id: 'project.scmType',
    defaultMessage: 'SCM Type'
  },
  scmCredentials: {
    id: 'project.scmCredentials',
    defaultMessage: 'SCM Credentials'
  },
  scmUrlPlaceholder: {
    id: 'project.scmUrlPlaceholder',
    defaultMessage: 'Insert SCM URL here'
  },
  scmTypePlaceholder: {
    id: 'project.scmTypePlaceholder',
    defaultMessage: 'SCM Credentials'
  },
  scmCredentialPlaceholder: {
    id: 'project.scmCredentialsPlaceholder',
    defaultMessage: 'Select an SCM Credential'
  },
  activation: {
    id: 'activation.activation',
    defaultMessage: 'Activation'
  },
  activations: {
    id: 'activation.activations',
    defaultMessage: 'Rulebook activations'
  },
  noactivations: {
    id: 'activation.noactivations',
    defaultMessage: 'There are currently no rulebook activations added for your organization.'
  },
  addActivation: {
    id: 'activation.addActivation',
    defaultMessage: 'Add rulebook activation'
  },
  deleteActivationTitle: {
    id: 'activation.deleteActivation',
    defaultMessage: 'Delete activation'
  },
  activation_status: {
    id: 'activations.activation_status',
    defaultMessage: 'Activation status'
  },
  enterRulebookActivationName: {
    id: 'activation.enterRulebookActivationName',
    defaultMessage: 'Enter a rulebook activation name'
  },
  enterRulebookActivationDescription: {
    id: 'activation.enterRulebookActivationDescription',
    defaultMessage: 'Enter a rulebook activation description'
  },
  selectRuleSet: {
    id: 'activation.selectRulebookActivationName',
    defaultMessage: 'Select a rule set'
  },
  selectExecutionEnvironment: {
    id: 'activation.selectExecutionEnvironment',
    defaultMessage: 'Select a execution environment'
  },
  selectRestartPolicy: {
    id: 'activation.selectRestartPolicy',
    defaultMessage: 'Select a restart policy'
  },
  selectPlaybook: {
    id: 'job.selectPlaybookName',
    defaultMessage: 'Select a playbook'
  },
  selectInventory: {
    id: 'activation.selectInventory',
    defaultMessage: 'Select an inventory'
  },
  selectExtraVar: {
    id: 'activation.selectExtraVar',
    defaultMessage: 'Select extra variables'
  },
  ruleset: {
    id: 'rulesets.ruleset',
    defaultMessage: 'Rule set'
  },
  rulesets: {
    id: 'rulesets.rulesets',
    defaultMessage: 'Rule sets'
  },
  norulesets: {
    id: 'rulesets.norulesets',
    defaultMessage: 'No rule sets'
  },
  number_of_rules: {
    id: 'rulesets.number_of_rules',
    defaultMessage: 'Number of rules'
  },
  fire_count: {
    id: 'rulesets.fire_count',
    defaultMessage: 'Fire count'
  },
  deleteRuleSetTitle: {
    id: 'rulesets.deleteRuleSet',
    defaultMessage: 'Delete rule set'
  },
  backToRuleSets: {
    id: 'ruleset.backToRuleSets',
    defaultMessage: 'Back to Rule Sets'
  },
  norulesetrules: {
    id: 'ruleset.norulesetrules',
    defaultMessage: 'No rules for this rule set'
  },
  norulesetsources: {
    id: 'ruleset.norulesetsources',
    defaultMessage: 'No sources for this rule set'
  },
  noactivationjobs: {
    id: 'activation.nojobs',
    defaultMessage: 'There are currently no jobs for this rulebook activation.'
  },
  nojobs: {
    id: 'common.nojobs',
    defaultMessage: 'There are currently no jobs for your organization.'
  },
  lastFiredDate: {
    id: 'activation.lastFiredDate',
    defaultMessage: 'Last fired date'
  },
  executionEnvironmentPlaceholder: {
    id: 'activation.executionEnvironmentPlaceholder',
    defaultMessage: 'Select an execution environments'
  },
  restartPolicyPlaceholder: {
    id: 'activation.restartPolicyPlaceholder',
    defaultMessage: 'Select a restart policy'
  },
  inventoryPlaceholder: {
    id: 'activation.inventoryPlaceholder',
    defaultMessage: 'Select an inventory'
  },
  playbookPlaceholder: {
    id: 'activation.playbookPlaceholder',
    defaultMessage: 'Select a playbook'
  },
  ruleSetPlaceholder: {
    id: 'activation.ruleSetPlaceholder',
    defaultMessage: 'Select a rule set'
  },
  backToRulebookActivations: {
    id: 'activation.backToRulebookActivations',
    defaultMessage: 'Back to rulebook activations'
  },
  extraVarPlaceholder: {
    id: 'project.extraVarPlaceholder',
    defaultMessage: 'Select extra variables'
  },
  action: {
    id: 'rule.action',
    defaultMessage: 'Action'
  },
  condition: {
    id: 'rule.condition',
    defaultMessage: 'Condition'
  },
});

export default sharedMessages;

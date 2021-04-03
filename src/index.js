const http = require("./lib/httpClient");
const JiraDataService = require("./jiraDataService");
const IssueCheckList = require("./issuesCheckList");
const consoleOutputFormatter = require('./consoleOutputFormatter');

(async function main() {

  const jiraDataService = new JiraDataService(http);

  const jiraCheckListIssues = new IssueCheckList(jiraDataService);

  try {
    await jiraCheckListIssues.fetchIssues();
  } catch (error) {
    console.error(error.message)
  }
 
  jiraCheckListIssues.setFormatter(consoleOutputFormatter)
  
})();

const IssuesCheckList= require('../src/issuesCheckList');
const consoleOutputFormatter = require('../src/consoleOutputFormatter');


const jiraIssuesList = [
  {
    self: "https://herocoders.atlassian.net/rest/api/3/component/10105",
    id: "10105",
    name: "Data analysis",
    description: "Insights into customer usage, tracking, analytics, metabase, etc.",
    assigneeType: "PROJECT_DEFAULT",
    realAssigneeType: "PROJECT_DEFAULT",
    isAssigneeTypeValid: false,
    project: "IC",
    projectId: 10400,
    issuesCount: 5
  },
  {
    self: "https://herocoders.atlassian.net/rest/api/3/component/10104",
    id: "10104",
    name: "Infrastructure",
    description: "Heroku, Google Cloud, Sentry, and other tooling related stuff",
    assigneeType: "PROJECT_DEFAULT",
    realAssigneeType: "PROJECT_DEFAULT",
    isAssigneeTypeValid: false,
    project: "IC",
    projectId: 10400,
    issuesCount: 4
  },
]


class MockDataSource {
  
  constructor() {
   this.issuesList = jiraIssuesList
  }

  async getData() {
    return this.issuesList
  }

}

describe('IssuesCheckList Class', () => {

  let mockedIssues

  beforeAll(() => {
    mockedIssues = new IssuesCheckList(new MockDataSource())
  });


  test('Should return a an array of object that contains issuesCount', async () => {

      await mockedIssues.fetchIssues()
     
     expect(mockedIssues.issuesList).toEqual(jiraIssuesList)

  })

  test('Ouput format method should be called', () => {

    const spy = jest.spyOn(consoleOutputFormatter, 'format').mockImplementation(jest.fn())

    mockedIssues.setFormatter(consoleOutputFormatter)

    expect(consoleOutputFormatter.format).toHaveBeenCalledTimes(1)

    spy.mockRestore();

  })

})



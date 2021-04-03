class IssuesCheckList {
  constructor(dataSource) {
    this.dataSource = dataSource;
    this.issuesList = [];
  }

  async fetchIssues() {
    this.issuesList = await this.dataSource.getData();
  }

  setFormatter(formatter) {
    if(!this.issuesList.length) return
    formatter.format(this.issuesList);
  }
}

module.exports = IssuesCheckList;

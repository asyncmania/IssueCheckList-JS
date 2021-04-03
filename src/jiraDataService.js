class JiraDataService {
  constructor(httpClient) {
    this.httpClient = httpClient;
    this.baseUrl = `https://herocoders.atlassian.net/rest/api/3`;
  }

  async getData() {
    const allComponents = await this.getComponents();
    const componentsWithoutLeads = allComponents.filter(
      (component) => component.assigneeType !== "COMPONENT_LEAD"
    )
    const componentsIssues = await Promise.all(
      componentsWithoutLeads.map((component) =>
        this.getComponentIssues(component)
      )
    )
    return componentsIssues.map((component, i) => ({
      ...componentsWithoutLeads[i],
       issuesCount: component.issues.length
    }))
  }

  getComponents() {
    const url = `${this.baseUrl}/project/IC/components`;
    return this.httpClient.get({ url });
  }

  getComponentIssues(component) {
    const url = `${this.baseUrl}/search?jql=component=${component.id}`;
    return this.httpClient.get({ url });
  }
}

module.exports = JiraDataService


class ConsoleOutputFormatter {
  format(data) {
    const issuesArray = data.map(({id, name, description, issuesCount}) => {
       return {id, component: name, description, issuesCount}
    })
    console.table(issuesArray)
  }
}


module.exports = new ConsoleOutputFormatter
const query = `
{
  allWpPage {
    nodes {
      id
      uri
    }
  }
}
`

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(query)

  res.data.allWpPage.nodes.map((node) => {
    createPage({
      path: node.uri,
      component: require.resolve("./src/templates/page.js"),
      context: {
        id: node.id,
      },
    })
  })

}

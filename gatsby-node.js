const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const galleryTemplate = path.resolve(`./src/templates/gallery-page.js`);

  let pages = await
    graphql(`
      {
        allMarkdownRemark(sort: { fields: frontmatter___sort, order: ASC }) {
          edges {
            node {
              frontmatter {
                title
                path
                category
              }
            }
          }
        }
      }
    `);

  // Handle errors
  if (pages.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  pages = pages.data.allMarkdownRemark.edges;
 
  pages.forEach(({ node }, index) => {
    createPage({
      path: node.frontmatter.path,
      component: galleryTemplate,
      context: {
        sort: node.frontmatter.sort,
        category: node.frontmatter.category,
        prev: index === 0 ? null : pages[index - 1].node,
        next: index === pages.length - 1 ? null : pages[index + 1].node
      }
    });
  });
};

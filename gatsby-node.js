const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const galleryTemplate = path.resolve(`./src/templates/gallery-page.js`);

  return new Promise((resolve, reject) => {
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
    `).then(result => {
      const pages = result.data.allMarkdownRemark.edges;

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
      resolve();
    });
  });
};

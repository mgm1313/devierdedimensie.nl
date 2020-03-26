const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const galleryTemplate = path.resolve(`./src/templates/gallery-page.jsx`);

  let pages = await graphql(`
    {
      allMarkdownRemark(sort: { fields: frontmatter___sort, order: ASC }) {
        edges {
          node {
            frontmatter {
              title
              slug
              eventID
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
      path: node.frontmatter.slug,
      component: galleryTemplate,
      context: {
        eventID: node.frontmatter.eventID,
        category: node.frontmatter.category,
        prev: index === 0 ? null : pages[index - 1].node,
        next: index === pages.length - 1 ? null : pages[index + 1].node,
      },
    });
  });
};

const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");
const PAGINATIONVISIBLEITEMS = 9;

const projectPaths = {
  src: path.resolve(__dirname, "src"),
  "@components": path.resolve(__dirname, "src", "components"),
  "@layout": path.resolve(__dirname, "src", "components", "layout"),
  "@general": path.resolve(__dirname, "src", "components", "general"),
  "@home": path.resolve(__dirname, "src", "components", "home"),
  "@portfolio": path.resolve(__dirname, "src", "components", "portfolio"),
  "@sagas": path.resolve(__dirname, "src", "components", "sagas"),
  "@contact": path.resolve(__dirname, "src", "components", "contact"),
  "@images": path.resolve(__dirname, "src", "assets", "images"),
  "@styles": path.resolve(__dirname, "src", "assets", "styles"),
  "@hooks": path.resolve(__dirname, "src", "hooks"),
  "@utils": path.resolve(__dirname, "src", "utils"),
  "@config": path.resolve(__dirname, "src", "config"),
};

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: projectPaths,
    },
  });
};

async function createPortfolioPostPages(graphql, actions) {
  const { createPage } = actions;
  const portfoliosRes = await graphql(`
    {
      portfolio: allSanityPortfolio {
        nodes {
          title
          slug {
            current
          }
          category {
            name
          }
          gallery {
            asset {
              altText
              gatsbyImageData
            }
          }
          summary
          _rawBody
        }
      }
    }
  `);

  const portfolios = portfoliosRes.data.portfolio.nodes;

  portfolios.forEach(({ slug, ...portfolio }) => {
    const portfolioPath = `/portfolio/${slug.current}`;
    createPage({
      path: portfolioPath,
      component: path.resolve("src/templates/portfolioPost.tsx"),
      context: portfolio,
    });
  });
}

async function createSagaPostPages(graphql, actions) {
  const { createPage } = actions;
  const sagaRes = await graphql(`
    {
      saga: allSanitySaga {
        nodes {
          title
          slug {
            current
          }
          gallery {
            asset {
              altText
              gatsbyImageData
            }
          }
          summary
          date
          category {
            name
            slug {
              current
            }
          }
          _rawBody
        }
      }
    }
  `);

  const sagas = sagaRes.data.saga.nodes;

  sagas.forEach(({ slug, ...saga }) => {
    const sagaPath = `/sagas/${slug.current}`;

    createPage({
      path: sagaPath,
      component: path.resolve("src/templates/sagaPost.tsx"),
      context: saga,
    });
  });
}

async function createSagaPages(graphql, actions) {
  const { createPage } = actions;

  const {
    data: {
      sagas: { nodes: sagas },
      categories: { nodes: categories },
    },
  } = await graphql(`
    {
      categories: allSanityCategory(filter: { type: { eq: "saga" } }) {
        nodes {
          name
          slug {
            current
          }
        }
      }
      sagas: allSanitySaga {
        nodes {
          title
          categories: category {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  paginate({
    createPage,
    items: sagas,
    itemsPerPage: PAGINATIONVISIBLEITEMS,
    pathPrefix: "/sagas",
    component: path.resolve("src/templates/sagas.tsx"),
  });

  categories.forEach(({ slug: { current: categorySlug } }) => {
    const categorySaga = sagas.filter(({ categories }) =>
      categories.find((category) => category.slug.current === categorySlug)
    );

    paginate({
      createPage,
      items: categorySaga,
      itemsPerPage: PAGINATIONVISIBLEITEMS,
      pathPrefix: `/sagas/${categorySlug}`,
      component: path.resolve("src/templates/sagas.tsx"),
      context: { categorySlug },
    });
  });
}

async function createPortfolioPages(graphql, actions) {
  const { createPage } = actions;
  const {
    data: {
      portfolio: { nodes: portfolios },
      categories: { nodes: categories },
    },
  } = await graphql(`
    {
      categories: allSanityCategory(filter: { type: { eq: "portfolio" } }) {
        nodes {
          name
          slug {
            current
          }
        }
      }
      portfolio: allSanityPortfolio {
        nodes {
          title
          categories: category {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  paginate({
    createPage,
    items: portfolios,
    itemsPerPage: PAGINATIONVISIBLEITEMS,
    pathPrefix: "/portfolio",
    component: path.resolve("src/templates/portfolio.tsx"),
  });

  categories.forEach(({ slug: { current: categorySlug } }) => {
    const categoryPortfolio = portfolios.filter(({ categories }) =>
      categories.find((category) => category.slug.current === categorySlug)
    );

    paginate({
      createPage,
      items: categoryPortfolio,
      itemsPerPage: PAGINATIONVISIBLEITEMS,
      pathPrefix: `/portfolio/${categorySlug}`,
      component: path.resolve("src/templates/portfolio.tsx"),
      context: { categorySlug },
    });
  });
}
exports.createPages = async ({ graphql, actions }) => {
  await createPortfolioPostPages(graphql, actions);
  await createSagaPostPages(graphql, actions);
  await createPortfolioPages(graphql, actions);
  await createSagaPages(graphql, actions);
};

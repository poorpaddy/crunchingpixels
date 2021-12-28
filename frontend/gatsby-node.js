const path = require("path");
const slugify = require("slugify");
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
  "@sagas-post": path.resolve(__dirname, "src", "components", "sagas-post"),
  "@portfolio-post": path.resolve(
    __dirname,
    "src",
    "components",
    "portfolio-post"
  ),
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
    const portfolioPath = `/portfolio/${
      slug?.current || slugify(portfolio.title, { lower: true })
    }`;
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
          }
          _rawBody
        }
      }
    }
  `);

  const sagas = sagaRes.data.saga.nodes;

  sagas.forEach(({ slug, ...saga }) => {
    const sagaPath = `/sagas/${
      slug?.current || slugify(saga.title, { lower: true })
    }`;

    createPage({
      path: sagaPath,
      component: path.resolve("src/templates/sagaPost.tsx"),
      context: saga,
    });
  });
}

async function createSagaPages(graphql, actions) {
  const { createPage } = actions;
  const sagaRes = await graphql(`
    {
      sagas: allSanitySaga {
        nodes {
          title
        }
      }
    }
  `);

  const sagas = sagaRes.data.sagas.nodes;

  paginate({
    createPage,
    items: sagas,
    itemsPerPage: PAGINATIONVISIBLEITEMS,
    pathPrefix: "/sagas",
    component: path.resolve("src/templates/sagas.tsx"),
  });

  const categorySagaRes = await graphql(`
    query {
      saga: allSanitySaga {
        group(field: category___slug___current) {
          nodes {
            title
          }
          fieldValue
        }
      }
    }
  `);

  categorySagaRes.data.saga.group.forEach((g) => {
    const catSaga = g.nodes;
    const category = g.fieldValue;

    paginate({
      createPage,
      items: catSaga,
      itemsPerPage: PAGINATIONVISIBLEITEMS,
      pathPrefix: `/sagas/${category}`,
      component: path.resolve("src/templates/sagas.tsx"),
      context: { category },
    });
  });
}

async function createPortfolioPages(graphql, actions) {
  const { createPage } = actions;
  const portfoliosRes = await graphql(`
    {
      portfolio: allSanityPortfolio {
        nodes {
          title
        }
      }
    }
  `);

  const portfolios = portfoliosRes.data.portfolio.nodes;

  paginate({
    createPage,
    items: portfolios,
    itemsPerPage: PAGINATIONVISIBLEITEMS,
    pathPrefix: "/portfolio",
    component: path.resolve("src/templates/portfolio.tsx"),
  });

  const categoryPortfolioRes = await graphql(`
    query {
      portfolio: allSanityPortfolio {
        group(field: category___slug___current) {
          nodes {
            title
          }
          fieldValue
        }
      }
    }
  `);

  categoryPortfolioRes.data.portfolio.group.forEach((g) => {
    const catPortfolios = g.nodes;
    const category = g.fieldValue;

    paginate({
      createPage,
      items: catPortfolios,
      itemsPerPage: PAGINATIONVISIBLEITEMS,
      pathPrefix: `/sagas/${category}`,
      component: path.resolve("src/templates/sagas.tsx"),
      context: category,
    });
  });
}
exports.createPages = async ({ graphql, actions }) => {
  await createPortfolioPostPages(graphql, actions);
  await createSagaPostPages(graphql, actions);
  await createPortfolioPages(graphql, actions);
  await createSagaPages(graphql, actions);
};

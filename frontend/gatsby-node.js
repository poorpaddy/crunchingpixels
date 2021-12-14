const path = require("path");

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
        "@components": path.resolve(__dirname, "src", "components"),
        "@layout": path.resolve(__dirname, "src", "components", "layout"),
        "@general": path.resolve(__dirname, "src", "components", "general"),
        "@home": path.resolve(__dirname, "src", "components", "home"),
        "@portfolio": path.resolve(__dirname, "src", "components", "portfolio"),
        "@sagas": path.resolve(__dirname, "src", "components", "sagas"),
        "@sagas-post": path.resolve(
          __dirname,
          "src",
          "components",
          "sagas-post"
        ),
        "@portfolio-post": path.resolve(
          __dirname,
          "src",
          "components",
          "portfolio-post"
        ),
        "@contact": path.resolve(__dirname, "src", "components", "contact"),
        "@images": path.resolve(__dirname, "src", "images"),
        "@hooks": path.resolve(__dirname, "src", "hooks"),
        "@config": path.resolve(__dirname, "src", "config"),
      },
    },
  });
};

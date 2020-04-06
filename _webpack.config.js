// Use this config file when using the filter in WordPress

const defaults = require("@wordpress/scripts/config/webpack.config");

module.exports = {
  ...defaults,
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};

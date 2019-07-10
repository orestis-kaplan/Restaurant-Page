const path = require('path');

module.exports = {
  mode: "none",
  entry: './src/',
  output:{
     path: path.resolve(__dirname, "dist"),
     filename: "bundle.js"
  }
};

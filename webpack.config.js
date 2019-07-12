const path = require('path');

module.exports = {
  mode: "none",
  watch: true,
  entry: './src/js/index.js',
  output:{
     path: path.resolve(__dirname, "dist"),
     filename: "bundle.js",
     publicPath: path.resolve(__dirname, 'src')
  },
  module:{
   rules:[
     {
         test: /\.(jpe?g|png|gif|svg)$/i,
         use: [{
             loader: 'url-loader',
             options: {
               limit: 8000,
               name: '[name].[ext]',
               publicPath: 'src/assets/img/'
             }
         }]
      }
   ]
 }
};

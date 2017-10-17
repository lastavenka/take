module.exports = function() {
    return {
        module: {
          rules: [{
              test: /\.scss$/,
              use: [{
                  loader: "style-loader" 
              },
              {
                  loader: "css-loader"
              },
              {
                  loader: "postcss-loader"
              },
              {
                  loader: "sass-loader"
              }]
          }]
        }
    };
};

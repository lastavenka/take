module.exports = function (paths) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include: paths,
          use: [{
            loader: "style-loader"
            }, {
            loader: "css-loader"
            }]
        }
      ]
    }
  };
};

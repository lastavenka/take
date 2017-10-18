module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
              'img-loader',
              'file-loader?limit=10000&name=./img/[hash].[ext]'
          ]
        }
      ]
    }
  };
};

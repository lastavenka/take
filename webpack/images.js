module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            'file-loader?limit=10000&name=./img/[hash].[ext]',
            {
              loader: 'image-webpack-loader',
              options: {
                bypassOnDebug: true,
              },
            },
          ]
        }
      ]
    }
  };
};

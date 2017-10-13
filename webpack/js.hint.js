
module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.js$/, // include .js files
          enforce: "pre", // preload the jshint loader
          exclude: /node_modules/, // exclude any and all files in the node_modules folder
          use: [
            {
              loader: "jshint-loader"
            }
          ]
        }
      ]
    }
  }

  // more options in the optional jshint object 
  //    jshint: {
  //      // any jshint option http://www.jshint.com/docs/options/ 
  //      // i. e. 
  //      camelcase: true,
  //
  //      // jshint errors are displayed by default as warnings 
  //      // set emitErrors to true to display them as errors 
  //      emitErrors: false,
  //
  //      // jshint to not interrupt the compilation 
  //      // if you want any file with jshint errors to fail 
  //      // set failOnHint to true 
  //      failOnHint: false,
  //
  //      // custom reporter function 
  //      reporter: function (errors) {}
  //    }

}

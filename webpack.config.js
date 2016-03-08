var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './es6/main.ts',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
              /*  loader: 'babel-loader',
                test: path.join(__dirname, 'es6'),
                query: {
                  presets: 'es2015',
                },*/
            // note that babel-loader is not required
             test: /\.ts(x?)$/, loader: 'ts-loader'
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundlea
    devtool: 'source-map',
};

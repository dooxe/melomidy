const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                loader: "babel-loader",

                // Skip any files outside of your project's `src` directory
                include: [
                  path.resolve(__dirname, "src/js"),
                ],

                // Only run `.js` and `.jsx` files through Babel
                test: /\.jsx?$/,

                // Options to configure babel with
                query: {
                  plugins: ['transform-runtime'],
                  presets: ['env'],
                }
            }
        ]
    },
    entry : [
        'babel-polyfill',
        './src/js/index'
    ],
    output: {
        path: __dirname + "/dist/js",
        filename: 'main.js'
    }
};

const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',

    entry: {
        app: path.resolve(__dirname, './app.ts')
    },

    module: {
        rules: [{
            test: /\.ts?$/,
            exclude: /node_modules/,
            use:[{ loader: 'ts-loader'}]
        }]
    },

    resolve: {
        extensions: ['.ts', '.js', '.tsx']
    },

    plugins: [
        new CleanWebpackPlugin({
            verbose: true
        }),
    ],

    output: {
        path: path.resolve(__dirname, '../bundle'),
        filename: '[name].js'
    }

}
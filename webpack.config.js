const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/main/index.tsx',
    output: {
        path: path.join(__dirname, 'public/js'),
        publicPath: '/public/js',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    devServer: {
        static: './public',
        historyApiFallback: true,
        devMiddleware: {
            writeToDisk: true,
        }
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
}
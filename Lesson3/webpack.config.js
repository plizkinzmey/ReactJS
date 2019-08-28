const path = require('path'),
    htmlPlugin = require('html-webpack-plugin'),
    miniCssExtractPlugin = require('mini-css-extract-plugin'),
    uglifyJsPligin = require('uglifyjs-webpack-plugin');

    module.exports = {
        entry: path.resolve(__dirname,'src','App.jsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        },
        devServer: {
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, 'dist')
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader'
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        miniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                    ],
                },
                {
                    test: /\.(.gif|png|jpe?g)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[hash.[ext]'
                            }
                        }
                    ]
                },
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        plugins: [
            new htmlPlugin({
                template: path.resolve(__dirname, 'src', 'index.html'),
                filename: 'index.html'
            }),

            new miniCssExtractPlugin ({
                template: path.resolve(__dirname, 'src', 'style.css'),
                filename: 'style.css'
            })
        ],
    };
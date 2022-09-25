import { resolve as _resolve, join } from 'path';
import { HotModuleReplacementPlugin } from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

export const entry = './src/index.js';
export const mode = 'development';

export const module = {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                presets: ["@babel/env"]
            }
        },
        {
            test: /\.css$/,
            use: [
                "style-loader",
                "css-loader"
            ]
        }
    ]
};

export const resolve = {
    extensions: [
        '*',
        '.js',
        '.jsx'
    ]
};

export const output = {
    path: _resolve(__dirname, 'dist/'),
    publicPath: '/dist',
    filename: 'bundle.js'
};

export const devServer = {
    static: join(__dirname, 'public/'),
    devMiddleware: {
        publicPath: 'http://localhost:3000/dist/'
    },
    port: 3000,
    hot: true
};

export const plugins = [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
];
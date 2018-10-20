const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin'); 
module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: 'ps-pagination',      
        libraryTarget: 'umd',      
        publicPath: '/dist/',      
        umdNamedDefine: true 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: 'node_modules',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    externals: {      
        // Don't bundle react or react-dom      
        react: {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        }  
    },
    resolve: {      
        alias: {          
            'react': path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),      
        }  
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'dist', 'index.html')
        })
    ]
};

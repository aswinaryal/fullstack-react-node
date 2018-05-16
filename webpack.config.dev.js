import path from 'path';
import webpack from 'webpack';

export default {
    mode: "development",
    devtool:"source-map",
    entry: [
        // 'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js'),
    ],
    output: {
        path: '/',
        filename: "bundle.js",
        publicPath: '/'
    },
    // plugins:[
    //     new webpack.NoEmitOnErrorsPlugin(),
    //     new webpack.optimize.OccurrenceOrderPlugin(),   
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    // devServer: {
    //    hot:true
    // },
    module: {
       
        rules: [
            {
              test: /\.js$/,
              include: path.join(__dirname, 'client'),
              exclude: /node_modules/,
              use: 'babel-loader'
              
            }   
          ]

    },
    resolve:{
        extensions:[".js", ".json", ".jsx", ".css"]
    }
}
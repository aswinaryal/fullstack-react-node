import path from 'path';

export default {
    mode: "development",
    devtool:"source-map",
    entry: path.join(__dirname, '/client/index.js'),
    output: {
        path: '/',
        filename: "bundle.js"
    },
    module: {
       
        rules: [
            {
              test: /\.js$/,
              include: path.join(__dirname, 'client'),
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            }   
          ]

    },
    resolve:{
        extensions:[".js", ".json", ".jsx", ".css"]
    }
}
module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist' // __dirname是两个下划线和dirname的组合
  },
  devServer: {
    host: '0.0.0.0',
    port: 8081
  },
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ['style-loader' , 'css-loader']
      }
    ]
  }
}
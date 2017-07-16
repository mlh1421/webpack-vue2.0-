module.exports={
    entry:'./main.js',
    output:{
        path:__dirname,
        filename:'bundle.js'
    },
    module:{
        loaders:[
        {
            test:/\.css$/,
            loader:'style-loader!css-loader'
        },
        {
            test:/\.vue$/,
            loader:'vue-loader'
        },
        {
            test: /\.jsx?$/, // 匹配'js' or 'jsx' 后缀的文件类型
            exclude: /(node_modules|bower_components)/, // 排除某些文件
            loader: 'babel-loader', // 使用'babel-loader'也是一样的
            query: { // 参数
                presets: ['es2015']
            }
        }
        ]
    },
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}

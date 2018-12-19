const webpack = require('webpack');
const path = require('path');
// 打包HTM文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清除目标文件
const CleanWebpackPlugin = require('clean-webpack-plugin');
// 将输出写进硬盘
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
// vue loader
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = (options) => {
    const buildDir = 'build';
    const env = require('./env/' + options.config + '.js');
    const plugin = require('./env/test.js').plugin;
    console.log(plugin);
    const isLocal = options.local;
    const editorKeys = ['vue', 'vuex', 'vueRouter', 'vueColor', 'axios', 'coreJs', 'jquery'];
    const editorLibs = [];
    const subPath = {
        lcoal: __dirname + '/build',
        publicPath: '//localhost:3333/q/myProject' + '/build'
    }

    

    // 如果是本地开发，使用未压缩的插件
    if (isLocal) {
        for (let key in plugin) {
            plugin[key] = plugin[key].replace('.min', '')
        }
    }

    editorKeys.forEach(item => editorLibs.push({
        url: plugin[item],
        isAsync: false
    }))

    const rules = [
        {
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.scss$/,
            use: [
                isLocal ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                {
                    loader: 'sass-loader'
                }
            ]
        }, {
            test: /\.(png|jpeg|jpg|gif|svg|ico)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    name: 'images/[name].[ext]',
                    limit: 1000
                }
            }]
        }
    ]

    const plugins = [
        // 清除目标文件
        new CleanWebpackPlugin(buildDir, {
            root: __dirname
        }),

        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name]-[hash:8].css'
        }),
        new OptimizeCssAssetsPlugin(),

        // 对目标HTML文件进行相关处理
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            // 自定义的参数：js插件地址，便于在目标文件中直接拼入
            libs: editorLibs,
            // 是否将输出写入硬盘
            alwaysWriteToDisk: true
        }),

        // 热更新相关
        new webpack.HotModuleReplacementPlugin(),

        // 将输出写进硬盘：进行相关参数配置
        new HtmlWebpackHarddiskPlugin({
            outputPath: path.resolve(__dirname, buildDir)
        })
    ]
    
    return {
        // 开发模式
        mode: 'development',
        // 入口文件配置项
        entry: {
            root: [
                './src/main.js'
            ]
        },
        // 出口文件配置项
        output: {
            // 静态资源的输出地址(不设置的话热更新会找不到静态资源)
            publicPath: subPath.publicPath,
            path: path.resolve(__dirname, buildDir),
            filename: '[name].js',
            chunkFilename: '[name].js'
        },
        // 模块：例如解读CSS，图片转换压缩等
        module: {
            rules
        },
        // 插件，用于生产模版和各项功能
        plugins: plugins,
        resolve: {
            alias: {
                // 声明文件变量:指明路径，在文件直接require 'env' 即可，实现了不同环境的变量配置
                env: path.resolve(__dirname, 'env/' + options.config + '.js')
            }
        },
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios'
        },
        devtool: options.pro ? false : 'source-map',
        // 配置webpack开发服务功能
        devServer: {
            hot: true,
            port: 3333,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    }
}
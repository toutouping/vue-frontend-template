'use strict' // 采用严格模式
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// 将dev和prod进行合并
module.exports = merge(prodEnv, {
    NODE_ENV: '"development"'
})

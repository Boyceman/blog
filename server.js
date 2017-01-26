const fs from 'fs'
const path from 'path'
const koa from 'koa'

const compression from 'compression'
const serialize from 'serialze-javascript'
const resolve = file => path.resolve(__dirname, file)

const isProd = process.env.NODE_ENV === 'production'
const serverInfo = 
  `koa/${require('koa/package.json').version}
  vue-server-renderer/${require('vue-server-renderer/package.json').version}`  

const app = koa();

console.log(app, process.env)

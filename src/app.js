import Koa from 'koa'
import logger from 'koa-logger'
import vue from 'vue'
const app = new Koa()

if(process.env.NODE_ENV !== 'production'){
  app.use(logger())
}
app.use(async (ctx, next) => {
  try {
    if(ctx.path === '/favicon.ico') return
    await next()
  } catch (err) {
    ctx.body = {message: err.message}
    ctx.status = err.status || 500
  }
})

app.use(async ctx => {
  ctx.body = 'Hello world!'
})

app.listen(3000, () => {
  console.log(new Date(), 'listening 3000')
})

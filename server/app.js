const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const router = new Router();
    const server = new Koa();

    router.get('/home/:id', async (ctx, next) => {
        const id = ctx.params.id;
        await handle(ctx.req, ctx.res, {
            pathname: '/home',
            query: { id }
        })
        ctx.respond = false;
    })
    server.use(router.routes());

    

    server.use(async (ctx, next) => {
        await handle(ctx.req, ctx.res);
        ctx.respond = false;
    });


    server.listen(3000, () => {
        console.log('koa server listen on port 3000...');
    })
})

const Koa = require('koa');
const next = require('next');
const session = require('koa-session');
const Redis = require('ioredis');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const RedisSessionStore = require('./db/session-store');
const router = require('./routers');
const auth = require('./service/auth');


// 创建redisClient
const redisClient = new Redis();

app.prepare().then(() => {
    const server = new Koa();

    server.keys = ['CregskiN github app', '@272473132@qq.com'];
    const SESSION_CONFIG = {
        key: 'cid',
        maxAge: 60 * 10 * 1000, // 60min 
        store: new RedisSessionStore(redisClient)
    }

    server.use(session(SESSION_CONFIG, server)); // 自动获取cookie中的cid，获取redis内对应的数据
    server.use(auth());
    
    router.get('/home/:id', async (ctx, next) => {
        const id = ctx.params.id;
        await handle(ctx.req, ctx.res, {
            pathname: '/home',
            query: { id }
        })
        ctx.respond = false; // 此处设置false，即禁用koa默认的response，因为handle已返回正常response
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

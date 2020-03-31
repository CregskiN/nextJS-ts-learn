const Router = require('koa-router');
const router = new Router();


router.get('/set/user', async (ctx, next) => {
    // console.log(ctx.session)
    ctx.session.user = { // 自动调用set方法
        name: 'CregskinSec',
        age: 200
    }
    ctx.body = 'success';
})

router.get('/delete/user', async (ctx, next) => {
    // console.log(ctx.session)
    ctx.session = null; // 自动调用destroy方法
    ctx.body = 'success';
})

module.exports = router;
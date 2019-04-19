const Koa = require ('koa'),
    Router = require('koa-router');

const app = new Koa(),
    router = new Router();

let users = [
    {
        name: 'Robert',
        email: 'robert@stockx.com',

    },
    {
        name: 'Henry',
        email: 'henry@stockx.com',

    },
    {
        name: 'Brittany',
        email: 'brittany@stockx.com',

    },
    {
        name: 'Sean',
        email: 'sean@stockx.com',

    },
]

//localhost:3000
router.get('/user/:id', ctx =>{
    ctx.body = users[ctx.params.id];
});

router.post('/user/:id', ctx=> {
    console.log('CONTEXT REQUEST BODY ', ctx.request.body);
    ctx.body = Object.assign(users[ctx.params.id], ctx.request.body);
});

app
    .use(require('koa-body')())    
    .use(router.allowedMethods())
    .use(router.routes());

app.listen(9001);
console.log("it's over 9000");
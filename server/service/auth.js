const axios = require('axios');

const { client_id, client_secret, request_token_url } = require('../../config').github;


const auth = () => {
    return async (ctx, next) => {
        if (ctx.path === '/auth') {
            const code = ctx.query.code;
            if (!code) {
                ctx.body = 'code no exit';
                return;
            }

            try {
                const result = await axios({
                    method: 'POST',
                    url: request_token_url,
                    data: {
                        client_id,
                        client_secret,
                        code
                    },
                    header: {
                        Accept: 'application/json'
                    },
                })
                console.log(result.data.data);
                if (result.status === 200) {
                    ctx.session.githubAuth = result.data;
                    ctx.redirect('/');
                } else {
                    ctx.body = `request token failed, msg is \n ${result.message}`
                }
            } catch (err) {
                console.log(err.response);
            }

            

        } else {
            await next();
        }
    }
}


module.exports = auth;
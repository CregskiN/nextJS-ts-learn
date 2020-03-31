
/**
 * 格式化key
 * @param {*} sid 
 */
function getRedisSessionId(sid) {
    return `ssid:${sid}`;
}


class RedisSessionStore {

    constructor(client) {
        this.client = client;
    }


    /**
     * 获取Redis中存储的session数据
     * @param  sid session_id
     */
    async get(sid) {
        console.log('get session ', sid);
        const id = getRedisSessionId(sid);
        const data = await this.client.get(id);
        if (!data) {
            return null;
        }
        try {
            const result = JSON.parse(data);
            return result;
        } catch (err) {
            console.log(err);
        }
    }


    /**
     * 存储
     * @param {*} sid session_id
     * @param {*} sess session_content
     * @param {*} ttl 时限
     */
    async set(sid, sess, ttl) {
        console.log('set session ', sid);
        const id = getRedisSessionId(sid);
        if (typeof ttl === 'number') {
            ttl = Math.ceil(ttl / 1000);
        }
        try {
            const sessStr = JSON.stringify(sess);
            if (ttl) {
                await this.client.setex(id, ttl, sessStr);
            } else {
                await this.client.set(id, sessStr);
            }
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * 删除指定session
     * @param {*} sid 
     */
    async destroy(sid) {
        console.log('destory session ', sid);
        const id = getRedisSessionId(sid);
        try {
            await this.client.del(id);
        } catch (err) {
            console.log(err);
        }

    }
}

module.exports = RedisSessionStore;
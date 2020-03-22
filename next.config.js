const withCss = require('@zeit/next-css');

if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => { }
}

module.exports = withCss({});

// 这个配置保证babel-plugin-import中设置style:"css"时不报错 // @TODO:原理：未知
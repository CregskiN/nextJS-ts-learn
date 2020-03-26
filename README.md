# 基于koa2的nextJS SSR

选型: koa2作为server端服务器, next作为koa的中间件, 负责服务端渲染

# 踩坑  

1. 做router mapping 路由映射,页面获取的router.query字段为空

解决办法: 使用页面的getInitialProps即可解决。  这坑的原因暂时不清楚

`写给自己 - 注释home页面的getInitialProps可复现此坑 [待产出博客]` 

2. next中的组件类型定义不能用React.FC(因为React.FC没有getInitialProps)  

解决办法: 改用next提供的NextComponentType

`写给自己 - 翻找官方提供的类型定义文件浪费很长时间，可以写个教程，为萌新提供模板 [待产出博客]` 

# 几点疑惑

1. react的ComponentClass中如何在class设置属性？

# 内容产出


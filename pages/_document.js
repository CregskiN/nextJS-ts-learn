import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
// HOC
function withLog(Component) {
    console.log('withLog receive ', Component);

    return (props) => {
        console.log('HOC receive ', props);
        return <Component {...props} />
    }
}


/**
 * 完成server端 css-js 中 css添加到head内
 */
class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;
        const sheet = new ServerStyleSheet();

        try {
            ctx.renderPage = () => originalRenderPage({
                enhanceApp: App => (props) => sheet.collectStyles(<App {...props} />), // 返回增强App
                enhanceComponent: Component => Component
            });
            const initialProps = await Document.getInitialProps(ctx);
            // console.log('document initialProps is', initialProps);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles} {/* 原样式 */}
                        {sheet.getStyleElement()} {/* 新注入样式 */}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )

    }
}

export default MyDocument;
export default (Component) => {
    // console.log(Component); // 这里的Component为携带getInitialProps的page组件

    function HOCResult(props) {

        console.log('HOCrender', props);
        return <Component {...props} />
    }

    HOCResult.getInitialProps = Component.getInitialProps; // 完成getInitialProps转移  
    // @TODO:可以探索更优雅的写法，整体转移Component.prototype 到 HOCResult.prototype Object.assign() ??


    return HOCResult;
}
webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ "./node_modules/antd/lib/button/style/css.js");
/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);



var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var events = ['routeChangeStart', 'routeChangeComplete', 'routeChangeError', 'beforeHistoryChange', 'hashChangeStart', 'hashChangeComplete'];

function makeEvent(type) {
  return function () {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    (_console = console).log.apply(_console, [type].concat(args));
  };
}

events.forEach(function (event) {
  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on(event, makeEvent(event));
});

// NextComponentType接收的三种类型分别为： baseContext，InitialProps，Props
var Index = function Index(props) {
  console.log(props.name);

  function goToHome() {
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
      pathname: '/home',
      query: {
        id: 2
      }
    }, '/home/2');
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/home?id=10",
    as: "/home/10"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, null, "\u4F60\u597D")), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: goToHome
  }, "goTo Home"));
};

Index.getInitialProps = function () {
  return {
    name: 'CregskiN'
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.75e5486095b2b3dec63d.hot-update.js.map
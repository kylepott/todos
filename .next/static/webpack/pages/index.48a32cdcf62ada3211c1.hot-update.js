webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_delf_todos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _jsxFileName = \"/home/delf/todos/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar Index = function Index() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([\"hello\", \"world\"]),\n      items = _useState[0],\n      setItems = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      newTodo = _useState2[0],\n      setNewTodo = _useState2[1];\n\n  var addTodo = function addTodo(newTodo) {\n    setItems([].concat(Object(_home_delf_todos_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(items), [newTodo]));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n      className: \"w-full flex items-center justify-center p-4 shadow\",\n      children: \"Do what\\u2019s essential.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        className: \"w-full flex items-center justify-center gap-4 p-4\",\n        onSubmit: function onSubmit(e) {\n          e.preventDefault();\n          addTodo(newTodo);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          className: \"w-full flex items-center border-black shadow h-10 p-2 justify-center\",\n          type: \"text\",\n          value: newTodo,\n          onChange: function onChange(e) {\n            return setNewTodo(e.target.value);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 17\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"bg-green-400 text-white p-4 flex\",\n          children: \"Add\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 17\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: items.map(function (n, i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            className: \"text-xl flex-center\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n              type: \"checkbox\",\n              className: \"m-3 ml-5 h-6 w-6\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 81\n            }, _this), n]\n          }, i, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 37\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Index, \"FjClLC32AUT7DDkKCJAv/fdwY00=\");\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSW5kZXgiLCJ1c2VTdGF0ZSIsIml0ZW1zIiwic2V0SXRlbXMiLCJuZXdUb2RvIiwic2V0TmV3VG9kbyIsImFkZFRvZG8iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcCIsIm4iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyxzREFBUSxDQUFXLENBQUMsT0FBRCxFQUFTLE9BQVQsQ0FBWCxDQURsQjtBQUFBLE1BQ1RDLEtBRFM7QUFBQSxNQUNGQyxRQURFOztBQUFBLG1CQUVjRixzREFBUSxDQUFDLEVBQUQsQ0FGdEI7QUFBQSxNQUVURyxPQUZTO0FBQUEsTUFFQUMsVUFGQTs7QUFLaEIsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0YsT0FBRCxFQUFxQjtBQUNqQ0QsWUFBUSxxSUFBS0QsS0FBTCxJQUFZRSxPQUFaLEdBQVI7QUFFQyxHQUhMOztBQUtBLHNCQUNBO0FBQUEsNEJBQ0k7QUFBUSxlQUFTLEVBQUMsb0RBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFBLDZCQUNJO0FBQU0saUJBQVMsRUFBQyxtREFBaEI7QUFBb0UsZ0JBQVEsRUFBRSxrQkFBQ0csQ0FBRCxFQUFPO0FBQ2pGQSxXQUFDLENBQUNDLGNBQUY7QUFDQUYsaUJBQU8sQ0FBQ0YsT0FBRCxDQUFQO0FBR0ssU0FMVDtBQUFBLGdDQU1JO0FBQU8sbUJBQVMsRUFBQyxzRUFBakI7QUFBd0YsY0FBSSxFQUFDLE1BQTdGO0FBQW9HLGVBQUssRUFBRUEsT0FBM0c7QUFBb0gsa0JBQVEsRUFBRSxrQkFBQUcsQ0FBQztBQUFBLG1CQUFJRixVQUFVLENBQUNFLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQWQ7QUFBQTtBQUEvSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBT0k7QUFBUSxtQkFBUyxFQUFDLGtDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkosZUFhSTtBQUFBLDZCQUNJO0FBQUEsa0JBQ0tSLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQUNDLENBQUQsRUFBR0MsQ0FBSDtBQUFBLDhCQUFTO0FBQUkscUJBQVMsRUFBQyxxQkFBZDtBQUFBLG9DQUE0QztBQUFPLGtCQUFJLEVBQUMsVUFBWjtBQUF1Qix1QkFBUyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQTVDLEVBQWtHRCxDQUFsRztBQUFBLGFBQXlDQyxDQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFUO0FBQUEsU0FBVjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREE7QUFzQmdCLENBaENwQjs7R0FBTWIsSzs7S0FBQUEsSztBQWtDU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXCJoZWxsb1wiLFwid29ybGRcIl0pO1xuICAgIGNvbnN0IFtuZXdUb2RvLCBzZXROZXdUb2RvXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgXG4gICAgY29uc3QgYWRkVG9kbyA9IChuZXdUb2RvOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0SXRlbXMoWy4uLml0ZW1zLCBuZXdUb2RvXSk7XG5cbiAgICAgICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC00IHNoYWRvd1wiPkRvIHdoYXTigJlzIGVzc2VudGlhbC48L2hlYWRlcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNCBwLTRcIiBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYWRkVG9kbyhuZXdUb2RvKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1ibGFjayBzaGFkb3cgaC0xMCBwLTIganVzdGlmeS1jZW50ZXJcIiB0eXBlPVwidGV4dFwiIHZhbHVlPXtuZXdUb2RvfSBvbkNoYW5nZT17ZSA9PiBzZXROZXdUb2RvKGUudGFyZ2V0LnZhbHVlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctZ3JlZW4tNDAwIHRleHQtd2hpdGUgcC00IGZsZXhcIiAgPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgobixpKSA9PiA8bGkgY2xhc3NOYW1lPVwidGV4dC14bCBmbGV4LWNlbnRlclwiIGtleT17aX0+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cIm0tMyBtbC01IGgtNiB3LTZcIi8+e259PC9saT4pfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9tYWluPiBcblxuICAgIDwvZGl2PlxuXG4gICAgICAgICAgICkgICAgICAgfVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})
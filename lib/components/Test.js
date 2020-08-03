"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _print = _interopRequireDefault(require("./print"));

var _giger = _interopRequireDefault(require("../assets/giger.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Test = () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_print.default, null), /*#__PURE__*/_react.default.createElement("h1", null, "this is a text"), /*#__PURE__*/_react.default.createElement("img", {
  src: _giger.default,
  alt: "Giger pic",
  width: 700
}));

var _default = Test;
exports.default = _default;
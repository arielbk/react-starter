"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Print;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Print() {
  console.log('print.js fn call!');
  return /*#__PURE__*/_react.default.createElement("div", null, "and this is some text");
}
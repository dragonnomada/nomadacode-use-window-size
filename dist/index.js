'use strict';

var react = require('react');

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function useWindowSize() {
  var _useState = react.useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = react.useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var _useState5 = react.useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isMobile = _useState6[0],
      setIsMobile = _useState6[1];

  var _useState7 = react.useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isTablet = _useState8[0],
      setIsTablet = _useState8[1];

  var _useState9 = react.useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isDesktop = _useState10[0],
      setIsDesktop = _useState10[1];

  var _useState11 = react.useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isFullDesktop = _useState12[0],
      setIsFullDesktop = _useState12[1];

  var _useState13 = react.useState("unknown"),
      _useState14 = _slicedToArray(_useState13, 2),
      screenType = _useState14[0],
      setScreenType = _useState14[1];

  react.useEffect(function () {
    var screenType = "unknown";
    if (width >= 360 && width < 768) screenType = "mobile";else if (width >= 768 && width < 1024) screenType = "tablet";else if (width >= 1024 && width < 1366) screenType = "desktop";else if (width >= 1366) screenType = "fullDesktop";
    setIsMobile(screenType === "mobile");
    setIsTablet(screenType === "tablet");
    setIsDesktop(screenType === "desktop");
    setIsFullDesktop(screenType === "fullDesktop");
    setScreenType(screenType);
  }, [width]);
  react.useEffect(function () {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);
  react.useEffect(function () {
    var handler = function handler() {
      // console.log("Screen Size", window.innerWidth, window.innerHeight);
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handler);
    return function () {
      window.removeEventListener("resize", handler);
    };
  }, []);
  return [width, height, {
    screenType: screenType,
    isMobile: isMobile,
    isTablet: isTablet,
    isDesktop: isDesktop,
    isFullDesktop: isFullDesktop
  }];
}

module.exports = useWindowSize;
//# sourceMappingURL=index.js.map

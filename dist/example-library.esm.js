import React__default, { useEffect, createElement } from 'react';
import GoogleFontLoader from 'react-google-font-loader';

var darkTheme = {
  brandPrimary: '#5466fd',
  brandHover: '#2d48d6',
  uiMain: '#fbfbfb',
  uiMainBackground: '#4d4c57',
  uiSecondary: '#9a98a9'
};

var lightTheme = {
  brandPrimary: '#5466fd',
  brandHover: '#2d48d6',
  uiMain: '#fbfbfb',
  uiMainBackground: '#ffffff',
  uiSecondary: '#9296ad'
};

var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
      theme = _ref.theme;
  useEffect(function () {
    var themes = {
      light: lightTheme,
      dark: darkTheme
    };
    var colors = themes[theme];
    Object.keys(colors).forEach(function (key) {
      document.documentElement.style.setProperty("--" + key, colors[key]);
    });
  });
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(GoogleFontLoader, {
    fonts: [{
      font: 'Roboto Condensed',
      weights: [400, 700]
    }, {
      font: 'Roboto',
      weights: [400, 700]
    }],
    subsets: ['latin']
  }), children);
};

var Thing = function Thing() {
  return createElement("div", null, "the snozzberries taste like snozzberries");
};

export { ThemeProvider, Thing };
//# sourceMappingURL=example-library.esm.js.map

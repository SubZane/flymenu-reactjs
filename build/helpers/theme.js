"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styledComponents = __importStar(require("styled-components"));
var _a = styledComponents, styled = _a.default, css = _a.css, createGlobalStyle = _a.createGlobalStyle, keyframes = _a.keyframes, ThemeProvider = _a.ThemeProvider;
exports.styled = styled;
exports.css = css;
exports.createGlobalStyle = createGlobalStyle;
exports.keyframes = keyframes;
exports.ThemeProvider = ThemeProvider;
exports.theme = {
    backgroundColor: '#E3DFDA',
    borderRadius: '7px',
    transitionDuration: '0.5s',
    innerPadding: '0px',
    button: {
        backgroundColor: '#8DBFD1',
        color: '#fff',
        position: 'right',
    },
    slidemenu: {
        textColor: '#3D3B39',
    },
};
exports.default = styled;

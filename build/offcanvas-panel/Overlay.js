"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var theme_1 = require("../helpers/theme");
var fadein = theme_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t0% { opacity: 0;}\n\t100% {opacity: 1;}\n"], ["\n\t0% { opacity: 0;}\n\t100% {opacity: 1;}\n"])));
var fadeout = theme_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t100% {opacity: 0;}\n\t0% { opacity: 1;}\n"], ["\n\t100% {opacity: 0;}\n\t0% { opacity: 1;}\n"])));
var Overlay = theme_1.styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\tbackface-visibility: hidden;\n\tposition: fixed;\n\tz-index: 1000;\n\ttop: -5000px;\n\tright: -5000px;\n\tbottom: -5000px;\n\tleft: -5000px;\n\tdisplay: none;\n\tbackground: rgba(43,46,56,.9);\n  ", "\n  ", "\n\t", "\n"], ["\n\tbackface-visibility: hidden;\n\tposition: fixed;\n\tz-index: 1000;\n\ttop: -5000px;\n\tright: -5000px;\n\tbottom: -5000px;\n\tleft: -5000px;\n\tdisplay: none;\n\tbackground: rgba(43,46,56,.9);\n  ",
    "\n  ",
    "\n\t",
    "\n"])), function (props) {
    return props.fade === 'in' && theme_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t\tanimation: ", ";\n\t\t\tanimation-duration: ", ";\n\t\t\tanimation-fill-mode: forwards;\n\t\t\tanimation-timing-function: ease-in;\n\t\t\tanimation-iteration-count: 1;\n\t\t\tdisplay: block;\n\t\t"], ["\n\t\t\tanimation: ", ";\n\t\t\tanimation-duration: ", ";\n\t\t\tanimation-fill-mode: forwards;\n\t\t\tanimation-timing-function: ease-in;\n\t\t\tanimation-iteration-count: 1;\n\t\t\tdisplay: block;\n\t\t"])), fadein, props.theme.transitionDuration);
}, function (props) {
    return props.fade === 'out' && theme_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t\t\tanimation: ", ";\n\t\t\tanimation-duration: ", ";\n\t\t\tanimation-timing-function: ease-out;\n\t\t\tanimation-fill-mode: forwards;\n\t\t\tanimation-iteration-count: 1;\n\t\t\topacity: 1;\n\t\t\tdisplay: block;\n\t\t"], ["\n\t\t\tanimation: ", ";\n\t\t\tanimation-duration: ", ";\n\t\t\tanimation-timing-function: ease-out;\n\t\t\tanimation-fill-mode: forwards;\n\t\t\tanimation-iteration-count: 1;\n\t\t\topacity: 1;\n\t\t\tdisplay: block;\n\t\t"])), fadeout, props.theme.transitionDuration);
}, function (props) {
    return props.fade === '' && theme_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\tdisplay: none;\n\t\t"], ["\n\t\t\tdisplay: none;\n\t\t"])));
});
function OverlayContainer(props) {
    return react_1.default.createElement(Overlay, { fade: props.fade, onClick: props.handleEvent, onAnimationEnd: props.onAnimationEnd });
}
exports.default = OverlayContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

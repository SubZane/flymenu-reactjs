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
var Content = theme_1.styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\tcolor: #fff;\n\tbackground: ", ";\n\tmax-width: 600px;\n\toverflow: hidden;\n\tposition: absolute;\n\tbottom: 0px;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\n\t", "\n\n  ", "\n\n\t", "\n\n\t", "\n\n\t", "\n\n\t", "\n\n\t", "\n\n"], ["\n\tcolor: #fff;\n\tbackground: ", ";\n\tmax-width: 600px;\n\toverflow: hidden;\n\tposition: absolute;\n\tbottom: 0px;\n\ttop: 0;\n\tleft: 0;\n\tright: 0;\n\n\t",
    "\n\n  ",
    "\n\n\t",
    "\n\n\t",
    "\n\n\t",
    "\n\n\t",
    "\n\n\t",
    "\n\n"])), function (props) { return props.theme.backgroundColor; }, function (props) {
    return props.animation === 'flip-top' && theme_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\tborder-bottom-left-radius: ", ";\n\t\t\tborder-bottom-right-radius: ", ";\n\t\t\tborder-top-left-radius: 0;\n\t\t\tborder-top-right-radius: 0;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\n\t\t\ttransform-style: preserve-3d;\n\t\t\ttransform: translateY(-100%) rotateX(90deg);\n\t\t\ttransform-origin: 100% 0;\n\t\t\topacity: 0;\n\t\t\ttransition-timing-function: ease-out;\n\t\t\ttransition: all;\n\t\t\ttransition-duration: ", ";\n\t\t"], ["\n\t\t\tborder-bottom-left-radius: ", ";\n\t\t\tborder-bottom-right-radius: ", ";\n\t\t\tborder-top-left-radius: 0;\n\t\t\tborder-top-right-radius: 0;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\n\t\t\ttransform-style: preserve-3d;\n\t\t\ttransform: translateY(-100%) rotateX(90deg);\n\t\t\ttransform-origin: 100% 0;\n\t\t\topacity: 0;\n\t\t\ttransition-timing-function: ease-out;\n\t\t\ttransition: all;\n\t\t\ttransition-duration: ", ";\n\t\t"])), props.theme.borderRadius, props.theme.borderRadius, props.theme.transitionDuration);
}, function (props) {
    return props.animation === 'door-left' && theme_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\tborder-bottom-left-radius: 0;\n\t\t\tborder-bottom-right-radius: ", ";\n\t\t\tborder-top-left-radius: 0;\n\t\t\tborder-top-right-radius: ", ";\n\n\t\t\ttransform-style: preserve-3d;\n\t\t\ttransform: translateZ(100px) translateX(0%) rotateY(90deg);\n\t\t\ttransform-origin: 0 100%;\n\t\t\topacity: 0;\n\t\t\ttransition: all;\n\t\t\ttransition-duration: ", ";\n\t\t"], ["\n\t\t\tborder-bottom-left-radius: 0;\n\t\t\tborder-bottom-right-radius: ", ";\n\t\t\tborder-top-left-radius: 0;\n\t\t\tborder-top-right-radius: ", ";\n\n\t\t\ttransform-style: preserve-3d;\n\t\t\ttransform: translateZ(100px) translateX(0%) rotateY(90deg);\n\t\t\ttransform-origin: 0 100%;\n\t\t\topacity: 0;\n\t\t\ttransition: all;\n\t\t\ttransition-duration: ", ";\n\t\t"])), props.theme.borderRadius, props.theme.borderRadius, props.theme.transitionDuration);
}, function (props) {
    return props.animation === 'door-right' && theme_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t\tborder-bottom-left-radius: ", ";\n\t\t\tborder-bottom-right-radius: 0;\n\t\t\tborder-top-left-radius: ", ";\n\t\t\tborder-top-right-radius: 0;\n\n\t\t\ttransform-style: preserve-3d;\n\t\t\ttransform: translateZ(100px) translateX(30%) rotateY(-90deg);\n\t\t\ttransform-origin: 100% 0;\n\t\t\topacity: 0;\n\t\t\ttransition: all;\n\t\t\ttransition-duration: ", ";\n\t\t"], ["\n\t\t\tborder-bottom-left-radius: ", ";\n\t\t\tborder-bottom-right-radius: 0;\n\t\t\tborder-top-left-radius: ", ";\n\t\t\tborder-top-right-radius: 0;\n\n\t\t\ttransform-style: preserve-3d;\n\t\t\ttransform: translateZ(100px) translateX(30%) rotateY(-90deg);\n\t\t\ttransform-origin: 100% 0;\n\t\t\topacity: 0;\n\t\t\ttransition: all;\n\t\t\ttransition-duration: ", ";\n\t\t"])), props.theme.borderRadius, props.theme.borderRadius, props.theme.transitionDuration);
}, function (props) {
    return props.animation === 'flip-bottom' && theme_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t\tborder-bottom-left-radius: 0;\n\t\tborder-bottom-right-radius: 0;\n\t\tborder-top-left-radius: ", ";\n\t\tborder-top-right-radius: $props.theme.borderRadius};\n\t\tbottom: 0;\n\n\t\ttransform-style: preserve-3d;\n\t\ttransform: translateY(100%) rotateX(90deg);\n\t\ttransform-origin: 0 100%;\n\t\topacity: 0;\n\t\ttransition-timing-function: ease-out;\n\t\ttransition: all;\n\t\ttransition-duration: ", ";\n\t"], ["\n\t\tborder-bottom-left-radius: 0;\n\t\tborder-bottom-right-radius: 0;\n\t\tborder-top-left-radius: ", ";\n\t\tborder-top-right-radius: $props.theme.borderRadius};\n\t\tbottom: 0;\n\n\t\ttransform-style: preserve-3d;\n\t\ttransform: translateY(100%) rotateX(90deg);\n\t\ttransform-origin: 0 100%;\n\t\topacity: 0;\n\t\ttransition-timing-function: ease-out;\n\t\ttransition: all;\n\t\ttransition-duration: ", ";\n\t"])), props.theme.borderRadius, props.theme.transitionDuration);
}, function (props) {
    return props.visible &&
        (props.animation === 'door-left' || props.animation === 'door-right') && theme_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\ttransform: translateZ(0px) translateX(0%) rotateY(0deg);\n\t\t\topacity: 1;\n\t\t"], ["\n\t\t\ttransform: translateZ(0px) translateX(0%) rotateY(0deg);\n\t\t\topacity: 1;\n\t\t"])));
}, function (props) {
    return props.visible &&
        props.animation === 'flip-top' && theme_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t\t\ttransform: translateY(0%) rotateX(0deg);\n\t\t\topacity: 1;\n\t\t"], ["\n\t\t\ttransform: translateY(0%) rotateX(0deg);\n\t\t\topacity: 1;\n\t\t"])));
}, function (props) {
    return props.visible &&
        props.animation === 'flip-bottom' && theme_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t\t\ttransform: translateY(0%) rotateX(0deg);\n\t\t\topacity: 1;\n\t\t"], ["\n\t\t\ttransform: translateY(0%) rotateX(0deg);\n\t\t\topacity: 1;\n\t\t"])));
});
var Inner = theme_1.styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\toverflow-y: auto;\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tmargin: 0;\n\tfont-weight: 300;\n\tfont-size: 1.15em;\n\tposition: absolute;\n\tbottom: ", ";\n\ttop: ", ";\n\tright: 0;\n\tleft: 0;\n"], ["\n\toverflow-y: auto;\n\tpadding-left: ", ";\n\tpadding-right: ", ";\n\tmargin: 0;\n\tfont-weight: 300;\n\tfont-size: 1.15em;\n\tposition: absolute;\n\tbottom: ", ";\n\ttop: ", ";\n\tright: 0;\n\tleft: 0;\n"])), function (props) { return props.theme.innerPadding; }, function (props) { return props.theme.innerPadding; }, function (props) { return props.theme.innerPadding; }, function (props) { return props.theme.innerPadding; });
function PanelContent(props) {
    return (react_1.default.createElement(Content, { visible: props.visible, animation: props.animation },
        react_1.default.createElement(Inner, null, props.children)));
}
exports.default = PanelContent;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

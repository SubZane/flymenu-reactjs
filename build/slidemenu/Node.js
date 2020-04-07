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
var NodeItem_1 = __importDefault(require("./NodeItem"));
var NodeBackLink_1 = __importDefault(require("./NodeBackLink"));
var SlideLeftOut = theme_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n\t\ttransform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n\t\ttransform: translateX(-100%);\n    opacity: 0;\n  }\n"], ["\n  0% {\n\t\ttransform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n\t\ttransform: translateX(-100%);\n    opacity: 0;\n  }\n"])));
var SlideRightIn = theme_1.keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translateX(-100%);\n\t\topacity: 0;\n\t}\n\t100% {\n\t\ttransform: translateX(0px);\n\t\topacity: 1;\n\t}\n"], ["\n\t0% {\n\t\ttransform: translateX(-100%);\n\t\topacity: 0;\n\t}\n\t100% {\n\t\ttransform: translateX(0px);\n\t\topacity: 1;\n\t}\n"])));
var SlideLeftIn = theme_1.keyframes(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translateX(100%);\n\t\topacity: 0;\n\t}\n\t100% {\n\t\ttransform: translateX(0px);\n\t\topacity: 1;\n\t}\n"], ["\n\t0% {\n\t\ttransform: translateX(100%);\n\t\topacity: 0;\n\t}\n\t100% {\n\t\ttransform: translateX(0px);\n\t\topacity: 1;\n\t}\n"])));
var SlideRightOut = theme_1.keyframes(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translateX(0px);\n\t\topacity: 1;\n\t}\n\t100% {\n\t\ttransform: translateX(100%);\n\t\topacity: 0;\n\t}\n"], ["\n\t0% {\n\t\ttransform: translateX(0px);\n\t\topacity: 1;\n\t}\n\t100% {\n\t\ttransform: translateX(100%);\n\t\topacity: 0;\n\t}\n"])));
var Node = theme_1.styled.ul(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n\tposition: absolute;\n\twidth: 100%;\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbackground: ", ";\n\tfont-family: Arial, Helvetica, sans-serif;\n\tbackface-visibility: hidden;\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n\t", "\n"], ["\n\tposition: absolute;\n\twidth: 100%;\n\tlist-style: none;\n\tmargin: 0;\n\tpadding: 0;\n\tbackground: ", ";\n\tfont-family: Arial, Helvetica, sans-serif;\n\tbackface-visibility: hidden;\n\t",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n\t",
    "\n"])), function (props) { return props.theme.backgroundColor; }, function (props) {
    return props.fade === 'out-left' && theme_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\tanimation: ", ";\n\t\t"], ["\n\t\t\tanimation: ", ";\n\t\t"])), SlideLeftOut);
}, function (props) {
    return props.fade === 'in-right' && theme_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t\t\tanimation: ", ";\n\t\t"], ["\n\t\t\tanimation: ", ";\n\t\t"])), SlideRightIn);
}, function (props) {
    return props.fade === 'in-left' && theme_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t\t\tanimation: ", ";\n\t\t"], ["\n\t\t\tanimation: ", ";\n\t\t"])), SlideLeftIn);
}, function (props) {
    return props.fade === 'out-right' && theme_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t\t\tanimation: ", ";\n\t\t"], ["\n\t\t\tanimation: ", ";\n\t\t"])), SlideRightOut);
}, function (props) {
    return props.fade !== null && theme_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\t\t\tanimation-duration: ", ";\n\t\t\tanimation-timing-function: ease-in-out;\n\t\t\tanimation-fill-mode: forwards;\n\t\t"], ["\n\t\t\tanimation-duration: ", ";\n\t\t\tanimation-timing-function: ease-in-out;\n\t\t\tanimation-fill-mode: forwards;\n\t\t"])), props.theme.transitionDuration);
}, function (props) {
    return !props.visible && theme_1.css(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\t\t\topacity: 0;\n\t\t\tdisplay: none;\n\t\t"], ["\n\t\t\topacity: 0;\n\t\t\tdisplay: none;\n\t\t"])));
});
function NodeElement(props) {
    return (react_1.default.createElement(Node, { visible: props.visible, fade: props.fade, onAnimationEnd: props.onAnimationEnd },
        props.backLink && (react_1.default.createElement(NodeBackLink_1.default, { backButtonText: props.backButtonText, handleClick: props.backLinkClickHandler })),
        props.menuData.map(function (data) { return (react_1.default.createElement(NodeItem_1.default, { key: data.id, id: data.id, hasChildren: data.hasOwnProperty('subnodes') ? true : false, url: data.hasOwnProperty('subnodes') ? '#' : data.url, title: data.Title, handleClick: props.menuClickHandler })); })));
}
exports.default = NodeElement;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;

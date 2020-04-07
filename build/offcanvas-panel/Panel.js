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
var Content_1 = __importDefault(require("./Content"));
var Panel = theme_1.styled.div(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n\tposition: fixed;\n  max-width: 700px;\n\tz-index: 2000;\n\tbackface-visibility: hidden;\n\tvisibility: hidden;\n\ttransform: rotateX(0deg);\n\t", "\n\n\t", "\n\n\t", "\n\n\t", "\n\n\t", "\n\n\t@media (min-width: 768px) {\n\t\t", "\n\t\t", "\n\t\t", "\n    width: 30%;\n\t\tborder-radius: 0 5px;\n\t\t", "\n\t}\n"], ["\n\tposition: fixed;\n  max-width: 700px;\n\tz-index: 2000;\n\tbackface-visibility: hidden;\n\tvisibility: hidden;\n\ttransform: rotateX(0deg);\n\t",
    "\n\n\t",
    "\n\n\t",
    "\n\n\t",
    "\n\n\t",
    "\n\n\t@media (min-width: 768px) {\n\t\t",
    "\n\t\t",
    "\n\t\t",
    "\n    width: 30%;\n\t\tborder-radius: 0 5px;\n\t\t",
    "\n\t}\n"])), function (props) {
    return props.animation === 'flip-top' && theme_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\ttop: 0px;\n\t\t\tright: 10px;\n\t\t\tleft: 50px;\n\t\t\theight: 400px;\n\t\t\tperspective: 1300px;\n\t\t"], ["\n\t\t\ttop: 0px;\n\t\t\tright: 10px;\n\t\t\tleft: 50px;\n\t\t\theight: 400px;\n\t\t\tperspective: 1300px;\n\t\t"])));
}, function (props) {
    return props.animation === 'door-left' && theme_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\ttop: 10px;\n\t\t\tright: 50px;\n\t\t\tleft: 0px;\n\t\t\tbottom: 10px;\n\t\t\tperspective: 1300px;\n\t\t"], ["\n\t\t\ttop: 10px;\n\t\t\tright: 50px;\n\t\t\tleft: 0px;\n\t\t\tbottom: 10px;\n\t\t\tperspective: 1300px;\n\t\t"])));
}, function (props) {
    return props.animation === 'door-right' && theme_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t\ttop: 10px;\n\t\t\tright: 0px;\n\t\t\tleft: 50px;\n\t\t\tbottom: 10px;\n\t\t\tperspective: 1300px;\n\t\t"], ["\n\t\t\ttop: 10px;\n\t\t\tright: 0px;\n\t\t\tleft: 50px;\n\t\t\tbottom: 10px;\n\t\t\tperspective: 1300px;\n\t\t"])));
}, function (props) {
    return props.animation === 'flip-bottom' && theme_1.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\t\t\ttop: 50px;\n\t\t\tright: 20px;\n\t\t\tleft: 20px;\n\t\t\tbottom: 0;\n\t\t\tperspective: 1300px;\n\t\t"], ["\n\t\t\ttop: 50px;\n\t\t\tright: 20px;\n\t\t\tleft: 20px;\n\t\t\tbottom: 0;\n\t\t\tperspective: 1300px;\n\t\t"])));
}, function (props) {
    return props.visible && theme_1.css(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n\t\t\tvisibility: visible;\n\t\t\topacity: 1;\n\t\t"], ["\n\t\t\tvisibility: visible;\n\t\t\topacity: 1;\n\t\t"])));
}, function (props) {
    return props.animation === 'door-left' && theme_1.css(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n\t\t\t\tright: auto;\n\t\t\t"], ["\n\t\t\t\tright: auto;\n\t\t\t"])));
}, function (props) {
    return props.animation === 'door-right' && theme_1.css(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n\t\t\t\tleft: auto;\n\t\t\t"], ["\n\t\t\t\tleft: auto;\n\t\t\t"])));
}, function (props) {
    return props.animation === 'flip-top' && theme_1.css(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n\t\t\t\tleft: auto;\n\t\t\t"], ["\n\t\t\t\tleft: auto;\n\t\t\t"])));
}, function (props) {
    return props.animation === 'flip-bottom' && theme_1.css(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n\t\t\t\twidth: 600px;\n\t\t\t\tleft: 50%;\n\t\t\t\tmargin-left: -300px; /* Half of the width */\n\t\t\t"], ["\n\t\t\t\twidth: 600px;\n\t\t\t\tleft: 50%;\n\t\t\t\tmargin-left: -300px; /* Half of the width */\n\t\t\t"])));
});
function PanelContainer(props) {
    return (react_1.default.createElement(Panel, { animation: props.animation, visible: props.visible, onTransitionEnd: props.onTransitionEnd },
        react_1.default.createElement(Content_1.default, { visible: props.visible, animation: props.animation, children: props.children })));
}
exports.default = PanelContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

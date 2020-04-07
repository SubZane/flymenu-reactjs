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
var FadeInTop = theme_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  0% {\n    transform: translateX(50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    transform: translateX(50px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n"])));
var NodeItem = theme_1.styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tmargin-bottom: 8px;\n\twhite-space: nowrap;\n\t/*\n\tanimation: ", ";\n\tanimation-duration: 0.3s;\n\tanimation-timing-function: ease-in-out;\n\tbackface-visibility: hidden;\n\t*/\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tleft: 12px;\n\t\twidth: 12px;\n\t\theight: 12px;\n\t\tborder-radius: 50%;\n\t\tbackground: #F4F4F1;\n\t\tborder: 2px solid #D2D1CB;\n\t\ttransform: translateY(6px);\n\t}\n\t&:first-child {\n\t\tfont-weight: 600;\n\t\tfont-size: 15px;\n\t\t&:after {\n\t\t\tbackground: #EC7574;\n\t\t\tborder: 2px solid #EC7574;\n\t\t\tborder: none;\n\t\t}\n\t}\n\t&:not(:last-child) {\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tleft: 17px;\n\t\t\tmargin-top: 10px;\n\t\t\twidth: 2px;\n\t\t\theight: 35px;\n\t\t\tbackground: #D2D1CB;\n\t\t}\n\t}\n"], ["\n\tfont-size: 14px;\n\tfont-weight: 400;\n\tmargin-bottom: 8px;\n\twhite-space: nowrap;\n\t/*\n\tanimation: ", ";\n\tanimation-duration: 0.3s;\n\tanimation-timing-function: ease-in-out;\n\tbackface-visibility: hidden;\n\t*/\n\t&:after {\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tleft: 12px;\n\t\twidth: 12px;\n\t\theight: 12px;\n\t\tborder-radius: 50%;\n\t\tbackground: #F4F4F1;\n\t\tborder: 2px solid #D2D1CB;\n\t\ttransform: translateY(6px);\n\t}\n\t&:first-child {\n\t\tfont-weight: 600;\n\t\tfont-size: 15px;\n\t\t&:after {\n\t\t\tbackground: #EC7574;\n\t\t\tborder: 2px solid #EC7574;\n\t\t\tborder: none;\n\t\t}\n\t}\n\t&:not(:last-child) {\n\t\t&:before {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\tleft: 17px;\n\t\t\tmargin-top: 10px;\n\t\t\twidth: 2px;\n\t\t\theight: 35px;\n\t\t\tbackground: #D2D1CB;\n\t\t}\n\t}\n"])), FadeInTop);
var CrumbItem = theme_1.styled.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\tcolor: ", ";\n\tdisplay: inline-block;\n"], ["\n\tcolor: ", ";\n\tdisplay: inline-block;\n"])), function (props) { return props.theme.slidemenu.textColor; });
function BreadcrumbNode(props) {
    return (react_1.default.createElement(NodeItem, { key: props.id },
        react_1.default.createElement(CrumbItem, { key: props.id }, props.title)));
}
exports.default = BreadcrumbNode;
var templateObject_1, templateObject_2, templateObject_3;

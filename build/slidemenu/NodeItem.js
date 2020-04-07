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
var NodeLink = theme_1.styled.a(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\tdisplay: block;\n\tcolor: ", ";\n\ttext-decoration: none;\n\tfont-size: 14px;\n\tpadding: 15px 20px;\n\tline-height: 20px;\n\toutline: none;\n\tcursor: pointer;\n\tposition: relative;\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\n\t&:hover {\n\t\tcolor: ", ";\n\t\tbackground: rgba(0, 0, 0, 0.1);\n\t\ttext-decoration: none;\n\t}\n\t&:not([href]):hover {\n\t\tbackground: rgba(0, 0, 0, 0.1);\n\t\tcolor: ", ";\n\t}\n\t&:not([href]) {\n\t\tcolor: ", ";\n\t}\n\t", "\n"], ["\n\tdisplay: block;\n\tcolor: ", ";\n\ttext-decoration: none;\n\tfont-size: 14px;\n\tpadding: 15px 20px;\n\tline-height: 20px;\n\toutline: none;\n\tcursor: pointer;\n\tposition: relative;\n\tborder-bottom: 1px solid rgba(0, 0, 0, 0.1);\n\t&:hover {\n\t\tcolor: ", ";\n\t\tbackground: rgba(0, 0, 0, 0.1);\n\t\ttext-decoration: none;\n\t}\n\t&:not([href]):hover {\n\t\tbackground: rgba(0, 0, 0, 0.1);\n\t\tcolor: ", ";\n\t}\n\t&:not([href]) {\n\t\tcolor: ", ";\n\t}\n\t",
    "\n"])), function (props) { return props.theme.slidemenu.textColor; }, function (props) { return props.theme.slidemenu.textColor; }, function (props) { return props.theme.slidemenu.textColor; }, function (props) { return props.theme.slidemenu.textColor; }, function (props) {
    return props.hasChildren && theme_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\t&:after {\n\t\t\t\tright: 15px;\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 12px;\n\t\t\t\theight: 12px;\n\t\t\t\ttop: 18px;\n\t\t\t\tcontent: ' ';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tbackground-image: url('img/arrow-right.svg');\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-position: fixed;\n\t\t"], ["\n\t\t\t&:after {\n\t\t\t\tright: 15px;\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 12px;\n\t\t\t\theight: 12px;\n\t\t\t\ttop: 18px;\n\t\t\t\tcontent: ' ';\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tbackground-image: url('img/arrow-right.svg');\n\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\tbackground-position: fixed;\n\t\t"])));
});
var Node = theme_1.styled.li(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""])));
function SlideNodeItem(props) {
    return (react_1.default.createElement(Node, null,
        react_1.default.createElement(NodeLink, { hasChildren: props.hasChildren, href: props.url, onClick: function () { return (props.hasChildren ? props.handleClick(props.id, props.title) : null); } }, props.title)));
}
exports.default = SlideNodeItem;
var templateObject_1, templateObject_2, templateObject_3;

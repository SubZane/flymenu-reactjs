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
var BackLink = theme_1.styled.a(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tdisplay: block;\n\tcolor: ", ";\n\ttext-decoration: none;\n\tfont-size: 14px;\n\tpadding: 15px 20px;\n\tline-height: 20px;\n\toutline: none;\n\tposition: relative;\n\tcursor: pointer;\n\tpadding-left: 35px;\n\tbackground: rgba(220, 221, 215, 1);\n\t&:after {\n\t\tposition: absolute;\n\t\twidth: 12px;\n\t\theight: 12px;\n\t\ttop: 18px;\n\t\tcontent: ' ';\n\t\tleft: 15px;\n\t\tright: 15px;\n\t\tdisplay: inline-block;\n\t\tbackground-image: url('img/arrow-right.svg');\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: fixed;\n\t\tcolor: rgba(104, 104, 104, 0.5);\n\t\ttransform: rotate(180deg);\n\t}\n\t&:hover {\n\t\tbackground: rgba(220, 221, 215, 0.5);\n\t\tcolor: ", ";\n\t}\n\t&:not([href]):hover {\n\t\tbackground: rgba(220, 221, 215, 0.5);\n\t\tcolor: ", ";\n\t}\n\t&:not([href]) {\n\t\tcolor: ", ";\n\t}\n"], ["\n\tdisplay: block;\n\tcolor: ", ";\n\ttext-decoration: none;\n\tfont-size: 14px;\n\tpadding: 15px 20px;\n\tline-height: 20px;\n\toutline: none;\n\tposition: relative;\n\tcursor: pointer;\n\tpadding-left: 35px;\n\tbackground: rgba(220, 221, 215, 1);\n\t&:after {\n\t\tposition: absolute;\n\t\twidth: 12px;\n\t\theight: 12px;\n\t\ttop: 18px;\n\t\tcontent: ' ';\n\t\tleft: 15px;\n\t\tright: 15px;\n\t\tdisplay: inline-block;\n\t\tbackground-image: url('img/arrow-right.svg');\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: fixed;\n\t\tcolor: rgba(104, 104, 104, 0.5);\n\t\ttransform: rotate(180deg);\n\t}\n\t&:hover {\n\t\tbackground: rgba(220, 221, 215, 0.5);\n\t\tcolor: ", ";\n\t}\n\t&:not([href]):hover {\n\t\tbackground: rgba(220, 221, 215, 0.5);\n\t\tcolor: ", ";\n\t}\n\t&:not([href]) {\n\t\tcolor: ", ";\n\t}\n"])), function (props) { return props.theme.slidemenu.textColor; }, function (props) { return props.theme.slidemenu.textColor; }, function (props) { return props.theme.slidemenu.textColor; }, function (props) { return props.theme.slidemenu.textColor; });
var Node = theme_1.styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
function NodeBackLink(props) {
    return (react_1.default.createElement(Node, null,
        react_1.default.createElement(BackLink, { onClick: props.handleClick }, props.backButtonText)));
}
exports.default = NodeBackLink;
var templateObject_1, templateObject_2;

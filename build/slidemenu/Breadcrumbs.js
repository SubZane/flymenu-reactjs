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
var BreadcrumbNode_1 = __importDefault(require("./BreadcrumbNode"));
var Node = theme_1.styled.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground-color: rgba(255, 255, 255, 0.5);\n\tpadding-left: 36px;\n\tpadding-top: 25px;\n\tpointer-events: none;\n\tdisplay: block;\n\tmargin-bottom: 0;\n\tlist-style: none;\n\tpadding-bottom: 20px;\n"], ["\n\tbackground-color: rgba(255, 255, 255, 0.5);\n\tpadding-left: 36px;\n\tpadding-top: 25px;\n\tpointer-events: none;\n\tdisplay: block;\n\tmargin-bottom: 0;\n\tlist-style: none;\n\tpadding-bottom: 20px;\n"])));
function Breadcrumbs(props) {
    if (props.breadcrumbs.length > 0) {
        return (react_1.default.createElement(Node, null, props.breadcrumbs.map(function (data) { return (react_1.default.createElement(BreadcrumbNode_1.default, { key: data.id, id: data.id, title: data.Title })); })));
    }
    else {
        return null;
    }
}
exports.default = Breadcrumbs;
var templateObject_1;

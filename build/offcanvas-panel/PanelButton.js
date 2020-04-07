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
var PanelButton = theme_1.styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n\tposition: fixed;\n\twidth: 50px;\n\tbackground-color: ", ";\n\tcolor: white;\n\tfont-weight: bold;\n\tborder-radius: 50px;\n\theight: 50px;\n\tborder: none;\n\t&:focus {outline:0;}\n\tz-index: 50;\n\tcursor: pointer;\n\t", "\n\t", "\n\t", "\n\t&:after {\n\t\tright: 14px;\n\t\tleft: 13px;\n\t\ttop: 14px;\n    position: absolute;\n\t\tcontent: \" \";\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\tbackground-image: url('img/menubars.svg');\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: fixed;\n\t}\n"], ["\n\tposition: fixed;\n\twidth: 50px;\n\tbackground-color: ", ";\n\tcolor: white;\n\tfont-weight: bold;\n\tborder-radius: 50px;\n\theight: 50px;\n\tborder: none;\n\t&:focus {outline:0;}\n\tz-index: 50;\n\tcursor: pointer;\n\t",
    "\n\t",
    "\n\t",
    "\n\t&:after {\n\t\tright: 14px;\n\t\tleft: 13px;\n\t\ttop: 14px;\n    position: absolute;\n\t\tcontent: \" \";\n\t\twidth: 24px;\n\t\theight: 24px;\n\t\tbackground-image: url('img/menubars.svg');\n\t\tbackground-repeat: no-repeat;\n\t\tbackground-position: fixed;\n\t}\n"])), function (props) { return props.theme.button.backgroundColor || 'coral'; }, function (props) {
    return props.theme.button.position === 'center' && theme_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\tbottom: 20px;\n\t\t\tleft: 50%;\n\t\t\tmargin-left: -25px;\n\t\t"], ["\n\t\t\tbottom: 20px;\n\t\t\tleft: 50%;\n\t\t\tmargin-left: -25px;\n\t\t"])));
}, function (props) {
    return props.theme.button.position === 'left' && theme_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\tbottom: 20px;\n\t\t\tleft: 20px;\n\t\t"], ["\n\t\t\tbottom: 20px;\n\t\t\tleft: 20px;\n\t\t"])));
}, function (props) {
    return props.theme.button.position === 'right' && theme_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n\t\t\tbottom: 20px;\n\t\t\tright: 20px;\n\t\t"], ["\n\t\t\tbottom: 20px;\n\t\t\tright: 20px;\n\t\t"])));
});
function PanelButtonContainer(props) {
    return react_1.default.createElement(PanelButton, { onClick: props.handleEvent });
}
exports.default = PanelButtonContainer;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;

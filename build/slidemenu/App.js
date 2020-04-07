"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var theme_1 = require("../helpers/theme");
var helpers_1 = require("../helpers/helpers");
var Node_1 = __importDefault(require("./Node"));
var Breadcrumbs_1 = __importDefault(require("./Breadcrumbs"));
var MenuWrapper = theme_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\tbackground: ", ";\n\tposition: relative;\n"], ["\n\tbackground: ", ";\n\tposition: relative;\n"])), function (props) { return props.theme.backgroundColor; });
function Slidemenu(props) {
    var _a = react_1.useState(true), isEvenNodeVisible = _a[0], setEvenNodeVisible = _a[1];
    var _b = react_1.useState(false), isOddNodeVisible = _b[0], setOddNodeVisible = _b[1];
    var _c = react_1.useState(false), showEvenBackLink = _c[0], setShowEvenBackLink = _c[1];
    var _d = react_1.useState(false), showOddBackLink = _d[0], setShowOddBackLink = _d[1];
    var _e = react_1.useState([]), menuData = _e[0], loadMenuData = _e[1];
    var _f = react_1.useState([]), evenMenuData = _f[0], setEvenMenuData = _f[1];
    var _g = react_1.useState([]), oddMenuData = _g[0], setOddMenuData = _g[1];
    var _h = react_1.useState(0), nodeLevel = _h[0], setNodeLevel = _h[1];
    var _j = react_1.useState([]), parentKeys = _j[0], setParentKeys = _j[1];
    var _k = react_1.useState(''), condition = _k[0], setCondition = _k[1];
    var _l = react_1.useState(''), oddFade = _l[0], setOddFade = _l[1];
    var _m = react_1.useState(''), evenFade = _m[0], setEvenFade = _m[1];
    var _o = react_1.useState([]), breadcrumbs = _o[0], setBreadcrumbs = _o[1];
    react_1.useEffect(function () {
        loadMenuData(props.menuDataSource);
        setEvenMenuData(props.menuDataSource);
    }, [props.menuDataSource]);
    function resetFadeStates() {
        setOddFade('');
        setEvenFade('');
    }
    react_1.useEffect(function () {
        if (condition === 'open') {
            if (nodeLevel % 2 === 0) {
                setEvenNodeVisible(true);
                setEvenFade('in-left');
                setOddFade('out-left');
            }
            else {
                setOddNodeVisible(true);
                setOddFade('in-left');
                setEvenFade('out-left');
            }
        }
        else if (condition === 'close') {
            if (nodeLevel % 2 === 0) {
                setEvenNodeVisible(true);
                setEvenFade('in-right');
                setOddFade('out-right');
            }
            else {
                setOddNodeVisible(true);
                setOddFade('in-right');
                setEvenFade('out-right');
            }
        }
    }, [nodeLevel, condition]);
    react_1.useEffect(function () {
        if (nodeLevel > 0) {
            if (nodeLevel % 2 === 0) {
                setShowEvenBackLink(true);
            }
            else {
                setShowOddBackLink(true);
            }
        }
    }, [nodeLevel]);
    function OpenNode(id, title) {
        setCondition('open');
        setNodeLevel(nodeLevel + 1);
        var parent = {
            id: id,
            Title: title,
            nodeLevel: nodeLevel + 1,
        };
        setParentKeys(function (prevArray) { return __spreadArrays(prevArray, [parent]); });
        if (nodeLevel % 2 === 0) {
            var obj = evenMenuData.filter(function (p) { return p.id === id; });
            if (obj.length > 0) {
                setOddMenuData(obj.shift().subnodes);
            }
        }
        else {
            var obj = oddMenuData.filter(function (p) { return p.id === id; });
            if (obj.length > 0) {
                setEvenMenuData(obj.shift().subnodes);
            }
        }
    }
    react_1.useEffect(function () {
        setBreadcrumbs(parentKeys);
    }, [parentKeys]);
    function CloseNode() {
        setCondition('close');
        setNodeLevel(nodeLevel - 1);
        setParentKeys(function (prevKeys) { return prevKeys.splice(0, prevKeys.length - 1); });
        if (parentKeys.length > 1) {
            var parentNode = parentKeys[parentKeys.length - 2];
            var obj = helpers_1.findNode(menuData, parentNode.id);
            if (obj !== null) {
                var menuitems = obj[0].subnodes;
                if (nodeLevel % 2 === 0) {
                    setOddMenuData(menuitems);
                }
                else {
                    setEvenMenuData(menuitems);
                }
            }
        }
        else {
            if (nodeLevel % 2 === 0) {
                setOddMenuData(menuData);
            }
            else {
                setEvenMenuData(menuData);
            }
        }
    }
    function onNodeAnimationEnded() {
        resetFadeStates();
        if (nodeLevel % 2 === 0) {
            setOddNodeVisible(false);
            setShowOddBackLink(false);
        }
        else {
            setEvenNodeVisible(false);
            setShowEvenBackLink(false);
        }
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(MenuWrapper, null,
            react_1.default.createElement(Breadcrumbs_1.default, { breadcrumbs: breadcrumbs }),
            react_1.default.createElement(Node_1.default, { visible: isEvenNodeVisible, fade: evenFade, onAnimationEnd: onNodeAnimationEnded, menuData: evenMenuData, menuClickHandler: OpenNode, backLink: showEvenBackLink, backLinkClickHandler: CloseNode, backButtonText: props.backButtonText }),
            react_1.default.createElement(Node_1.default, { visible: isOddNodeVisible, fade: oddFade, onAnimationEnd: onNodeAnimationEnded, menuData: oddMenuData, menuClickHandler: OpenNode, backLink: showOddBackLink, backLinkClickHandler: CloseNode, backButtonText: props.backButtonText }))));
}
exports.default = Slidemenu;
var templateObject_1;

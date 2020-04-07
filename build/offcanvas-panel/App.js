"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
var Overlay_1 = __importDefault(require("./Overlay"));
var PanelButton_1 = __importDefault(require("./PanelButton"));
var Panel_1 = __importDefault(require("./Panel"));
var GlobalStyle = theme_1.createGlobalStyle(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\nbody {\n\t", "\n}\n\nhtml {\n\t", "\n}\n"], ["\nbody {\n\t",
    "\n}\n\nhtml {\n\t",
    "\n}\n"])), function (props) {
    return props.visible && theme_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\toverflow: hidden;\n\t\t\tposition: fixed;\n\t\t"], ["\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\toverflow: hidden;\n\t\t\tposition: fixed;\n\t\t"])));
}, function (props) {
    return props.visible && theme_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\toverflow: hidden;\n\t\t\tposition: fixed;\n\t\t"], ["\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\toverflow: hidden;\n\t\t\tposition: fixed;\n\t\t"])));
});
function OffCanvasPanel(props) {
    var _a = react_1.useState(false), togglePanel = _a[0], setTogglePanel = _a[1];
    var _b = react_1.useState(false), isPanelVisible = _b[0], setPanelVisible = _b[1];
    var _c = react_1.useState(false), hasOverlayAnimationEnded = _c[0], sethasOverlayAnimationEnded = _c[1];
    var _d = react_1.useState(false), hasPanelTransitionEnded = _d[0], sethasPanelTransitionEnded = _d[1];
    var _e = react_1.useState(''), fade = _e[0], setFade = _e[1];
    react_1.useEffect(function () {
        if (props.state === 'open') {
            openPanel();
        }
        else if (props.state === 'close') {
            closePanel();
        }
    }, [props.state]);
    react_1.useEffect(function () {
        if (togglePanel) {
            setPanelVisible(true);
            setFade('in');
            if (hasOverlayAnimationEnded && hasPanelTransitionEnded) {
                sethasOverlayAnimationEnded(false);
                sethasPanelTransitionEnded(false);
            }
        }
        else {
            if (isPanelVisible) {
                setPanelVisible(false);
                setFade('out');
            }
            if (hasOverlayAnimationEnded && fade === 'out') {
                setFade('');
            }
        }
    }, [hasOverlayAnimationEnded, hasPanelTransitionEnded, togglePanel, isPanelVisible, fade]);
    function closePanel() {
        setTogglePanel(false);
    }
    function openPanel() {
        setTogglePanel(true);
    }
    function onOverlayAnimationEnd() {
        sethasOverlayAnimationEnded(true);
    }
    function onPanelTransitionEnd() {
        sethasPanelTransitionEnded(true);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(GlobalStyle, { visible: isPanelVisible }),
        react_1.default.createElement(Overlay_1.default, { fade: fade, handleEvent: closePanel, onAnimationEnd: onOverlayAnimationEnd }),
        react_1.default.createElement(Panel_1.default, { animation: props.animation, visible: isPanelVisible, onTransitionEnd: onPanelTransitionEnd, children: props.children }),
        props.showButton && react_1.default.createElement(PanelButton_1.default, { handleEvent: openPanel })));
}
exports.default = OffCanvasPanel;
var templateObject_1, templateObject_2, templateObject_3;

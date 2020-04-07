"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var App_1 = __importDefault(require("./offcanvas-panel/App"));
var App_2 = __importDefault(require("./slidemenu/App"));
var menudata_json_1 = __importDefault(require("./menudata.json"));
var theme_1 = require("./helpers/theme");
react_dom_1.default.render(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement(theme_1.ThemeProvider, { theme: theme_1.theme },
        react_1.default.createElement(App_1.default, { state: '', showButton: true, animation: 'door-left' },
            react_1.default.createElement(App_2.default, { menuDataSource: menudata_json_1.default.treemenu, backButtonText: 'Go back' })))), document.getElementById('root'));

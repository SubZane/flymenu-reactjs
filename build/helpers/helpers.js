"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function findNode(object, id) {
    var foundObj = object.filter(function (p) { return p.id === id; });
    if (foundObj.length > 0) {
        return __assign({}, foundObj);
    }
    else {
        var oc = object.filter(function (p) { return p.hasOwnProperty('subnodes'); });
        if (oc && typeof oc === 'object' && oc !== null) {
            for (var i = 0; i < oc.length; i++) {
                var retObj = findNode(oc[i].subnodes, id);
                if (retObj != null) {
                    return retObj;
                }
            }
        }
    }
    return null;
}
exports.findNode = findNode;

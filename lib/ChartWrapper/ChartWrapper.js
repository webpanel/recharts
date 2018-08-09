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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import { Spin } from 'antd';
import { observer } from 'mobx-react';
export var chartWrapper = function (ChartComponent) {
    return observer(function (props) {
        var _a = props.resourceCollection, data = _a.data, loading = _a.loading, children = props.children, render = props.render, restProps = __rest(props, ["resourceCollection", "children", "render"]);
        if (loading) {
            return (React.createElement("div", { style: { textAlign: 'center', paddingTop: 32, paddingBottom: 32 } },
                React.createElement(Spin, null)));
        }
        if (render) {
            return React.createElement(ChartComponent, __assign({}, restProps), render(data));
        }
        return (React.createElement(ChartComponent, __assign({ data: data || [] }, restProps), children));
    });
};
//# sourceMappingURL=ChartWrapper.js.map
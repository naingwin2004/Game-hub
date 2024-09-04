"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_service_ts_1 = require("../services/client-service.ts");
var usePlatforms = function () {
    var _a = (0, react_1.useState)([]), platforms = _a[0], setPlatforms = _a[1];
    var _b = (0, react_1.useState)(""), error = _b[0], setError = _b[1];
    var _c = (0, react_1.useState)(false), isLoading = _c[0], setLoading = _c[1];
    (0, react_1.useEffect)(function () {
        setLoading(true);
        var controller = new AbortController();
        client_service_ts_1.default
            .get("/platforms/lists/parents", {
            signal: controller.signal
        })
            .then(function (res) {
            setPlatforms(res.data.results);
            setLoading(false);
        })
            .catch(function (err) {
            if (err instanceof CanceledError)
                return;
            setError(err.message);
            setLoading(false);
        });
        return function () { return controller.abort(); };
    }, []);
    return { platforms: platforms, error: error, isLoading: isLoading };
};
exports.default = usePlatforms;

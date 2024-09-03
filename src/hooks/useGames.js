"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_service_ts_1 = require("../services/client-service.ts");
var useGames = function () {
    var _a = (0, react_1.useState)([]), games = _a[0], setGames = _a[1];
    var _b = (0, react_1.useState)(""), error = _b[0], setError = _b[1];
    var _c = (0, react_1.useState)(false), isLoading = _c[0], setLoading = _c[1];
    (0, react_1.useEffect)(function () {
        setLoading(true);
        var controller = new AbortController();
        client_service_ts_1.default
            .get("/games", { signal: controller.signal })
            .then(function (res) {
            setGames(res.data.results);
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
    return { games: games, error: error, isLoading: isLoading };
};
exports.default = useGames;

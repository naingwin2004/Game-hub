"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_service_ts_1 = require("../services/client-service.ts");
var useGames = function () {
    var _a = (0, react_1.useState)([]), games = _a[0], setGames = _a[1];
    var _b = (0, react_1.useState)(""), error = _b[0], setError = _b[1];
    (0, react_1.useEffect)(function () {
        var controller = new AbortController();
        client_service_ts_1.default
            .get("/games", { signal: controller.signal })
            .then(function (res) { return setGames(res.data.results); })
            .catch(function (err) {
            if (err instanceof CanceledError)
                return;
            setError(err.message);
        });
        return function () { return controller.abort(); };
    }, []);
    return { games: games, error: error };
};
exports.default = useGames;

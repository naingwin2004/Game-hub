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
var react_1 = require("react");
var client_service_ts_1 = require("../services/client-service.ts");
var useGames = function (selectedGenre, selectedPlatform, requestConfig) {
    var _a = (0, react_1.useState)([]), games = _a[0], setGames = _a[1];
    var _b = (0, react_1.useState)(""), error = _b[0], setError = _b[1];
    var _c = (0, react_1.useState)(false), isLoading = _c[0], setLoading = _c[1];
    (0, react_1.useEffect)(function () {
        setLoading(true);
        var controller = new AbortController();
        client_service_ts_1.default
            .get("/games", {
            params: {
                genres: selectedGenre === null || selectedGenre === void 0 ? void 0 : selectedGenre.id,
                platforms: selectedPlatform === null || selectedPlatform === void 0 ? void 0 : selectedPlatform.id
            }
        }, __assign({ signal: controller.signal }, requestConfig))
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
    }, [selectedGenre, selectedPlatform]);
    return { games: games, error: error, isLoading: isLoading };
};
exports.default = useGames;

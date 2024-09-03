"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
//apikey
var apikey = import.meta.env.VITE_API_KEY;
exports.default = axios_1.default.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: apikey
    }
});

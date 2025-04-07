"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.partsCatalogClient = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const https_proxy_agent_1 = require("https-proxy-agent");
;
const proxyAgent = new https_proxy_agent_1.HttpsProxyAgent(process.env.PROXY_URL);
const basePath = 'https://api.parts-catalogs.com/v1';
const partsCatalogClient = {
    // @ts-expect-error 🤷‍♂️🤷‍♂️🤷‍♂️
    GET: async (path, { params } = {}) => {
        if (typeof window !== 'undefined') {
            throw new Error('Cannot make requests in browser');
        }
        // Replace placeholders in the URL path
        let processedPath = path;
        if (params === null || params === void 0 ? void 0 : params.path) {
            Object.keys(params.path).forEach((key) => {
                var _a, _b;
                processedPath = processedPath.replace(`{${key}}`, (_b = (_a = params.path) === null || _a === void 0 ? void 0 : _a[key]) !== null && _b !== void 0 ? _b : '');
            });
        }
        // Construct query string
        const queryString = (params === null || params === void 0 ? void 0 : params.query)
            ? '?' +
                new URLSearchParams(Object.entries(params.query).flatMap(([key, value]) => Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]])).toString()
            : '';
        let response;
        let data;
        let error;
        try {
            // @ts-expect-error 🤷‍♂️🤷‍♂️🤷‍♂️
            response = await (0, node_fetch_1.default)(basePath + processedPath + queryString, {
                agent: proxyAgent,
                headers: {
                    Authorization: process.env.PARTS_CATALOG_API_KEY,
                    'Content-Type': 'application/json'
                }
            });
            const json = await (response === null || response === void 0 ? void 0 : response.json());
            if (json === null || json === void 0 ? void 0 : json.errorCode) {
                error = json;
            }
            else {
                data = json;
            }
        }
        catch (err) {
            error = err;
        }
        const headerData = new Proxy({}, {
            get(target, prop) {
                var _a;
                if (typeof prop !== 'string' || !/^[\w-]+$/.test(prop)) {
                    return undefined;
                }
                return data ? ((_a = response === null || response === void 0 ? void 0 : response.headers.get(prop)) !== null && _a !== void 0 ? _a : undefined) : undefined;
            }
        });
        // Return plain JSON-serializable object
        return { response, error, data, headerData };
    }
};
const client = async () => partsCatalogClient;
exports.partsCatalogClient = client;

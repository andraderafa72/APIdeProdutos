"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
/* eslint-disable import/first */
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var routes_1 = require("./routes");
exports.app = (0, express_1.default)();
var options = {
    allowedHeaders: [
        'Origin',
        'Content-Type',
        'Accept',
        'authorization',
    ],
    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false,
};
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cors_1.default)(options));
exports.app.options('*', (0, cors_1.default)(options));
exports.app.use(express_1.default.json());
exports.app.use(routes_1.router);

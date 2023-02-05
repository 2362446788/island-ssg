"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_HTML_PATH = exports.DEFAULT_CLIENT_ENTRY = exports.PACKAGE_ROOT = void 0;
const path = require("path");
exports.PACKAGE_ROOT = path.join(__dirname, '..', '..', '..');
exports.DEFAULT_CLIENT_ENTRY = path.join(exports.PACKAGE_ROOT, 'src', 'runtime', 'client-entry.tsx');
exports.DEFAULT_HTML_PATH = path.join(exports.PACKAGE_ROOT, 'template.html');

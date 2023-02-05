"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluginIndexHtml = void 0;
const promises_1 = require("fs/promises");
const constants_1 = require("../constants");
function pluginIndexHtml() {
    return {
        name: "island:index-html",
        transformIndexHtml(html) {
            return {
                html,
                tags: [
                    {
                        tag: "script",
                        attrs: {
                            type: "module",
                            src: `/@fs/${constants_1.DEFAULT_CLIENT_ENTRY}`
                        },
                        injectTo: "body"
                    }
                ],
            };
        },
        configureServer(server) {
            return () => {
                server.middlewares.use(async (req, res, next) => {
                    let html = await (0, promises_1.readFile)(constants_1.DEFAULT_HTML_PATH, 'utf-8');
                    html = await server.transformIndexHtml(req.url, html, req.originalUrl);
                    res.setHeader("Content-Type", "text.html");
                    res.end(html);
                });
            };
        }
    };
}
exports.pluginIndexHtml = pluginIndexHtml;

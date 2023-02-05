import { Plugin } from 'vite';
import { readFile } from 'fs/promises';
import { DEFAULT_CLIENT_ENTRY, DEFAULT_HTML_PATH } from '../constants';

export function pluginIndexHtml(): Plugin {
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
              src: `/@fs/${DEFAULT_CLIENT_ENTRY}`
            },
            injectTo: "body"
          }
        ],

      }
    },
    configureServer(server) {
      return () => {
        server.middlewares.use(async (req, res, next) => {
          let html = await readFile(DEFAULT_HTML_PATH, 'utf-8');
          html = await server.transformIndexHtml(
            req.url,
            html,
            req.originalUrl
          );
          res.setHeader("Content-Type", "text.html");
          res.end(html);
        })
      }
    }
  }
}
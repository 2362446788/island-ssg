"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cac_1 = require("cac");
const dev_1 = require("./dev");
const version = require("../../package.json").version;
const cli = (0, cac_1.cac)("island-ssg").version(version).help();
cli
    .command("dev <root>", "dev island ssg")
    .action(async (root) => {
    const server = await (0, dev_1.createDevServer)(root);
    await server.listen();
    server.printUrls();
});
cli
    .command("build [root]", "build island ssg")
    .action(async (root) => {
    console.log(root);
});
cli.parse();

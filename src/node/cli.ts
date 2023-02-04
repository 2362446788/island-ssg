import { cac } from 'cac';
import { createDevServer } from './dev';

const version = require("../../package.json").version;

const cli = cac("island-ssg").version(version).help();

cli
  .command("dev <root>", "dev island ssg")
  .action(async (root: string) => {
    const server = await createDevServer(root);
    await server.listen();
    server.printUrls();
  });

cli
  .command("build [root]", "build island ssg")
  .action(async (root: string) => {
    console.log(root);
  });

cli.parse();
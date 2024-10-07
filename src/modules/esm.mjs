import path from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { createRequire } from "module";

import("./files/c.js");

const META_URL = import.meta.url;

const random = Math.random();
const require = createRequire(META_URL);

let unknownObject;

if (random > 0.5) {
  unknownObject = require("./files/a.json");
} else {
  unknownObject = require("./files/b.json");
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${META_URL}`);
console.log(`Path to current directory is ${path.dirname(META_URL)}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };

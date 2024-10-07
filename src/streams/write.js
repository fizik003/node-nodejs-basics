import { createWriteStream } from "fs";
import { stdin } from "process";

import { getPathByDirname } from "../utils/fs.js";

const META_URL = import.meta.url;

const write = async () => {
  const pathToFile = getPathByDirname(META_URL, "files", "fileToWrite.txt");
  const stream = createWriteStream(pathToFile);
  stdin.on("readable", () => {
    let data;
    while ((data = process.stdin.read()) !== null) {
      stream.write(data);
    }
  });
};

await write();

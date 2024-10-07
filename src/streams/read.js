import { stdout } from "process";
import { getPathByDirname } from "../utils/fs.js";
import { createReadStream } from "fs";

const META_URL = import.meta.url;

const read = async () => {
  const srcFilePath = getPathByDirname(META_URL, "files", "fileToRead.txt");
  const stream = createReadStream(srcFilePath);
  stream.on("data", (data) => {
    stdout.write(data);
  });
};

await read();

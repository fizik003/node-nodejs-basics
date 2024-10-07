import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import stream from "stream";
import { promisify } from "util";

import { getPathByDirname } from "../utils/fs.js";

const META_URL = import.meta.url;

const compress = async () => {
  const srcFilePath = getPathByDirname(META_URL, "files", "fileToCompress.txt");
  const destFilePath = getPathByDirname(META_URL, "files", "archive.gz");
  const gzip = zlib.createGzip();
  const pipeline = promisify(stream.pipeline);

  const readableStream = createReadStream(srcFilePath);
  const writableStream = createWriteStream(destFilePath);

  try {
    await pipeline(readableStream, gzip, writableStream);
    console.log("Compress done");
  } catch (error) {
    console.log(error);
  }
};

await compress();

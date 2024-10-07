import { createReadStream, createWriteStream } from "fs";
import zlib from "zlib";
import stream from "stream";
import { promisify } from "util";

import { getPathByDirname } from "../utils/fs.js";

const META_URL = import.meta.url;

const decompress = async () => {
  const destFilePath = getPathByDirname(
    META_URL,
    "files",
    "fileToCompress1.txt"
  );
  const srcFilePath = getPathByDirname(META_URL, "files", "archive.gz");
  const gunzip = zlib.createGunzip();
  const pipeline = promisify(stream.pipeline);

  const readableStream = createReadStream(srcFilePath);
  const writableStream = createWriteStream(destFilePath);

  try {
    await pipeline(readableStream, gunzip, writableStream);
    console.log("Decompress done");
  } catch (error) {
    console.log(error);
    throw error;
  }
};

await decompress();

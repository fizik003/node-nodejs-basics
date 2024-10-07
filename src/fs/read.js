import * as fs from "fs/promises";
import { getPathByDirname } from "../utils/fs.js";
import { throwNoSuchFileError } from "../utils/error.js";

const read = async () => {
  const META_URL = import.meta.url;
  const src = getPathByDirname(META_URL, "files", "fileToRead.txt");
  try {
    const fileContent = await fs.readFile(src, "utf-8");
    console.log(fileContent);
  } catch (error) {
    throwNoSuchFileError(error);
    throw error;
  }
};

await read();

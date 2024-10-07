import * as fs from "fs/promises";
import { getPathByDirname } from "../utils/fs.js";
import { throwNoSuchFileError } from "../utils/error.js";

const list = async () => {
  const META_URL = import.meta.url;
  const srcPath = getPathByDirname(META_URL, "files");

  try {
    const files = await fs.readdir(srcPath);
    console.log(files);
  } catch (error) {
    throwNoSuchFileError(error);
    throw error;
  }
};

await list();

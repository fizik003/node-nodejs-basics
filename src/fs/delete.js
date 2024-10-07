import * as fs from "fs/promises";
import { getPathByDirname } from "../utils/fs.js";
import { FSFiledError, throwNoSuchFileError } from "../utils/error.js";

const remove = async () => {
  const META_URL = import.meta.url;
  const srcPath = getPathByDirname(META_URL, "files", "fileToRemove.txt");
  try {
    await fs.unlink(srcPath);
  } catch (error) {
    throwNoSuchFileError(error);
    throw error;
  }
};

await remove();

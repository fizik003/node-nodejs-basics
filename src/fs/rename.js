import * as fs from "fs/promises";
import { getPathByDirname } from "../utils/fs.js";
import { throwNoSuchFileError } from "../utils/error.js";

const rename = async () => {
  const META_URL = import.meta.url;
  const srcPath = getPathByDirname(META_URL, "files", "wrongFilename.txt");
  const destPath = getPathByDirname(META_URL, "files", "properFilename.md");
  try {
    await fs.rename(srcPath, destPath);
  } catch (error) {
    throwNoSuchFileError(error);
    throw error;
  }
};

await rename();

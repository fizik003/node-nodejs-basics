import * as fs from "fs/promises";
import { getPathByDirname } from "../utils/fs.js";
import { FSFiledError, throwNoSuchFileError } from "../utils/error.js";

const copy = async () => {
  const META_URL = import.meta.url;
  const SOURCE_FOLDER_NAME = "files";
  const DESTINATION_FOLDER_NAME = "files_copy";
  const srcFolderPath = getPathByDirname(META_URL, SOURCE_FOLDER_NAME);
  const destFolderPath = getPathByDirname(META_URL, DESTINATION_FOLDER_NAME);

  try {
    await fs.access(destFolderPath);
    throw new FSFiledError();
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  try {
    fs.cp(srcFolderPath, destFolderPath, { recursive: true });
  } catch (error) {
    throwNoSuchFileError(error);
    throw error;
  }
};

await copy();

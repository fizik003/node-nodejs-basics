import { writeFile } from "fs/promises";
import { FSFiledError } from "../utils/error.js";
import { getPathByDirname } from "../utils/fs.js";

const create = async () => {
  const EXIST_ERROR_CODE = "EEXIST";
  const content = "I am fresh and young";
  const newFilePath = getPathByDirname(import.meta.url, "files", "fresh.txt");

  try {
    await writeFile(newFilePath, content, { flag: "wx" });
  } catch (error) {
    if (error.code === EXIST_ERROR_CODE) {
      throw new FSFiledError();
    } else {
      throw error;
    }
  }
};

await create();

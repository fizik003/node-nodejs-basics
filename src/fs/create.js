import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const create = async () => {
  const EXIST_ERROR_CODE = "EEXIST";
  const content = "I am fresh and young";
  const EXIST_ERROR_MESSAGE = "FS operation failed";
  const newFilePath = join(__dirname, "files", "fresh.txt");

  try {
    await writeFile(newFilePath, content, { flag: "wx" });
  } catch (error) {
    if (error.code === EXIST_ERROR_CODE) {
      throw new Error(EXIST_ERROR_MESSAGE);
    } else {
      throw error;
    }
  }
};

await create();

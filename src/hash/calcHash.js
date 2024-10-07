import { createReadStream } from "fs";
import { createHash } from "crypto";
import { getPathByDirname } from "../utils/fs.js";

const META_URL = import.meta.url;

const calculateHash = async () => {
  const hash = createHash("sha256");
  const filePath = getPathByDirname(
    META_URL,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const stream = createReadStream(filePath);

  return new Promise((resolve, reject) => {
    stream.on("data", (data) => {
      hash.update(data);
    });

    stream.on("end", () => {
      const resultHash = hash.digest("hex");
      console.log(resultHash);
      resolve(resultHash);
    });

    stream.on("error", (error) => {
      console.error("Error while reading file:", error);
      reject(error);
    });
  });
};

await calculateHash();

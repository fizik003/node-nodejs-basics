import { fileURLToPath } from "url";
import { dirname, join } from "path";

export function getDirname(metaUrl) {
  return dirname(fileURLToPath(metaUrl));
}

export const getPathByDirname = (metaUrl, ...paths) => {
  const dirName = getDirname(metaUrl);
  return join(dirName, ...paths);
};

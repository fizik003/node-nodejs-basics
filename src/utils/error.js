export class FSFiledError extends Error {
  constructor() {
    super("FS operation failed");
  }
}

export const throwNoSuchFileError = (error) => {
  if (error.code === "ENOENT") {
    throw new FSFiledError();
  }
};

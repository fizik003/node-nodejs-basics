import { Transform } from "stream";

const reverseTextTransformStream = new Transform({
  transform(chunk, encoding, callback) {
    const reversedStr = chunk.toString().split("").reverse().join("");
    this.push(reversedStr + "\n");
    callback();
  },
});

const transform = async () => {
  process.stdin.pipe(reverseTextTransformStream).pipe(process.stdout);
};

await transform();

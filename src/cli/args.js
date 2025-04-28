const ARG_PREFIX = "--";

const parseArgs = () => {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i += 1) {
    if (args[i].startsWith(ARG_PREFIX)) {
      const argName = args[i].slice(2);
      const argValue = args[i + 1];
      console.log(`${argName} is ${argValue}`);
    }
  }
};

parseArgs();

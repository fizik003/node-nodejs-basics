const parseEnv = () => {
  const envRSSVariables = Object.entries(process.env)
    .filter(([key]) => key.startsWith("RSS_"))
    .map(([varKey, varValue]) => `${varKey}=${varValue}`);
  console.log(envRSSVariables.join("; "));
};

parseEnv();

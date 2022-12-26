module.exports = {
  platform: "azure",
  endpoint: "https://dev.azure.com/recommendoo/",
  token: process.env.TOKEN,
  hostRules: [
    {
      hostType: "npm",
      matchHost: "pkgs.dev.azure.com",
      username: "apikey",
      password: process.env.TOKEN,
    },
  ],
  repositories: ["UI/UI"],
};

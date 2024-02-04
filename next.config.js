// const { withContentlayer } = require("next-contentlayer");

const withPWA = require("next-pwa")({
  dest: "public",
  // disable: process.env.NODE_ENV === "development",
  // register: true,
  // scope: '/app',
  // sw: "service-worker.js",
});

const nextconfig = {
  // reactStrictMode: true,
  //   disableImportAliasWarning: true,
};

// module.exports = withContentlayer(nextconfig);

module.exports = withPWA(nextconfig);

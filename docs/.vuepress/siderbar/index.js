const travisSiderbar = require("./travis");
const dockerSiderbar = require("./docker");
const githubSiderbar = require("./github");
const linuxSiderbar = require("./linux");
module.exports = {
  "/travis/": travisSiderbar,
  "/docker/": dockerSiderbar,
  "/github/": githubSiderbar,
  "/linux/": linuxSiderbar
};

const architectSiderbar = require("./architect");
const travisSiderbar = require("./travis");
const dockerSiderbar = require("./docker");
const gitSiderbar = require("./git");
const linuxSiderbar = require("./linux");
module.exports = {
  "/architect/": architectSiderbar,
  "/travis/": travisSiderbar,
  "/docker/": dockerSiderbar,
  "/git/": gitSiderbar,
  "/linux/": linuxSiderbar
};

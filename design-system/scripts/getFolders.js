const fs = require("fs");
const path = require("path");

const getFolders = (entry) => {
  const dirs = fs
    .readdirSync(entry)
    .filter((file) => fs.statSync(path.join(entry, file)).isDirectory());
  return dirs;
};

module.exports = {
  getFolders,
};

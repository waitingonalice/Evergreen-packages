const fs = require("fs");
const path = require("path");

const targetPath = (dir) => path.join(__dirname, dir);
export const getFolders = (entry) => {
  const dirs = fs
    .readdirSync(targetPath(entry))
    .filter((file) =>
      fs.statSync(path.join(targetPath(entry), file)).isDirectory()
    );
  return dirs;
};

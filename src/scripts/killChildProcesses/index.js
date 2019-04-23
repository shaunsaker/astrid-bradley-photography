const childProcess = require('child_process');

exports.onPostBuild = () => {
  childProcess.execSync("ps aux | grep jest | grep -v grep | awk '{print $2}' | xargs kill");
};

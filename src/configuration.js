'use strict';

function getUserHome() {
  return process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
}

const nconf = require('nconf').file({
  file: `${getUserHome()}/.config/electronic-wechat/config.json`,
});

function saveSettings(settingKey, settingValue) {
  nconf.set(settingKey, settingValue);
  nconf.save();
}

function readSettings(settingKey) {
  nconf.load();
  return nconf.get(settingKey);
}

module.exports = {
  saveSettings,
  readSettings,
};

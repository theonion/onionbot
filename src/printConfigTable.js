/* eslint no-console: ["error", { allow: ["log"] }] */

const config = require('./config');
const Table = require('cli-table');

function printConfigTable() {
  const configTable = new Table({
    head: ['CONFIG_VAR', 'Value'],
    colWidhs: [100, 200],
  });

  Object.keys(config).forEach((key) => {
    configTable.push([key, String(config[key])]);
  });

  console.log(configTable.toString());
}

module.exports = printConfigTable;

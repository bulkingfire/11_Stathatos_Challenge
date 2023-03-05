const fs = require('fs');
const para2 = require('util');

const readFromFile = para2.promisify(fs.readFile);
/**
 * Wrting data to JSON
 * 
 *  @param {string} destination wrting path
 *  @param {object} content content
 *  @returns {void} void
 */


const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );


/**
 * This function is meant to read the data that is given and update some items
 * 
 *  @param {object} content update the material
 *  @param {string} file path of saving 
 *  @returns {void} void
 */

const update = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend: update };

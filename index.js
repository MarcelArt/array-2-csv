/**
 * Function that convert your array of object to csv formatted string
 * @param {Array<object>} data Array of object that will be converted to csv
 * @param {object} options Option to set up the conversion behaviour
 * @param {';' | ',' | 'tab'} options.delimiter Set delimiter to seperate each column (";", ",", "tab")
 * @param {boolean} options.useDoubleQuotes Whether to use double quotes on each cells useful if on one cell can have multiple line or have character that can be mistaken as delimiter
 * @returns {string} Formatted csv string
 */
const array2CSV = (data, { 
  delimiter =  ';',
  useDoubleQuotes = false,
 }) => {
  let finalString = '';
  if (!data || !data.length) finalString;

  delimiter = delimiter === 'tab' ? '\t' : delimiter;
  
  let headers = [];
  for (const header in data[0]) {
    headers.push(useDoubleQuotes ? `"${header}"` : header);
  }
  
  let headerString = headers.join(`${delimiter}`);
  finalString = `${headerString}\n`;

  for (const elem of data) {
    for (const header of headers) {
      const realHeader = header.replace(/"/gi, '');
      finalString += useDoubleQuotes ? `"${elem[realHeader]}"${delimiter}` : `${elem[header]}${delimiter}`;
    }
    finalString += '\n';
  }

  return finalString;
}

const data = [
  {
    _id: 1,
    last_name: 'Aritonang',
    first_name: 'Marcel',
  },
  {
    _id: 2,
    last_name: 'Aritonang',
    first_name: 'Nicola',
  },
]

const finalString = array2CSV(data, { 
  delimiter: "tab", 
  useDoubleQuotes: true,
});
console.log(finalString);

module.exports = {
  array2CSV,
}
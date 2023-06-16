# array-2-csv
 
A small package that can convert your array of object into csv string that you can easily write to file

## Installing

`npm i @weekend_dev/array-2-csv`

## Usage

1. Import package

```js
const { array2CSV } = require('@weekend_dev/array-2-csv');
```

2. Call the array2CSV function

```js
const data = [
  {
    id: 1,
    last_name: 'Doe',
    first_name: 'John',
  },
  {
    id: 2,
    last_name: 'Dee',
    first_name: 'Jane',
  },
]

const finalString = array2CSV(data, { 
  delimiter: ';', 
  useDoubleQuotes: true,
});
console.log(finalString);
```
This function receive two parameters/arguments first is data which your array of object that will be processed, second parameter is options which contain additional setting for csv string generation, more detail below

## Options
Parameter | Value | Description
--------- | ----- | -----------
delimiter | String (accept: ";", ",", "tab") | Set delimiter to seperate each column
useDoubleQuotes | Boolean | Whether to use double quotes on each cells useful if on one cell can have multiple line or have character that can be mistaken as delimiter

## Example results
```csv
"id";"last_name";"first_name"
"1";"Doe";"John";
"2";"Dee";"Jane";
```
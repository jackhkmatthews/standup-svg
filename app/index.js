const fs        = require('fs');
const jsdom     = require('jsdom');
const d3        = require('d3');
require('d3-selection-multi');
const D3SvgDrawer = require('./drawer/d3-svg-drawer.js').D3SvgDrawer;
var rimraf = require('rimraf');

const data      = require('./temp/march-2017.json');

const { JSDOM } = jsdom;

clearOutput();

// data.forEach((day, index) => {
//   const d3SvgDrawer = new D3SvgDrawer(day);

//   JSDOM.fromFile(`${__dirname}/html/index.html`, { 
//     beforeParse(window) {
//       window.d3 = d3;
//     } 
//   }).then(dom => {
//     fs.writeFileSync(`${__dirname}/../output/svg/${index}.svg`, d3SvgDrawer.getSvgHtml(dom));
//   });
// });

function clearOutput() {
  rimraf(`${__dirname}/../output/svg`, () => {
    const dir = `${__dirname}/../output/svg`;

    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }
    console.log('done');
  });
}
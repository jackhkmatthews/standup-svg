const fs        = require('fs');
const jsdom     = require('jsdom');
const d3        = require('d3');
require('d3-selection-multi');
const SvgDrawer = require('./svgDrawer.js').SvgDrawer;

const data      = require('../data/march-2017.json');

const { JSDOM } = jsdom;

data.forEach((day, index) => {
  const svgDrawer = new SvgDrawer(day);

  JSDOM.fromFile(`${__dirname}/index.html`, { 
    beforeParse(window) {
      window.d3 = d3;
    } 
  }).then(dom => {
    fs.writeFileSync(`${__dirname}/../output/output_${index}.svg`, svgDrawer.getSvgHtml(dom));
  });
});

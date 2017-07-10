const fs        = require('fs');
const jsdom     = require('jsdom');
const d3        = require('d3');
require('d3-selection-multi');
const D3SvgDrawer = require('./drawers/lines.js').D3SvgDrawer;
const clearFolder = require('./utility/utility-methods.js').clearFolder;

const data      = require('./temp/march-2017.json');

const { JSDOM } = jsdom;

clearFolder(`${__dirname}/../output/svg`)
  .then(() => {
    data.forEach(day => {
      const d3SvgDrawer = new D3SvgDrawer(day);
      const date = day.date.replace(/\//g, '-');

      JSDOM.fromFile(`${__dirname}/html/index.html`, { 
        beforeParse(window) {
          window.d3 = d3;
        } 
      }).then(dom => {
        fs.writeFileSync(`${__dirname}/../output/svg/${date}.svg`, d3SvgDrawer.getSvgHtml(dom));
      });
    });
  });
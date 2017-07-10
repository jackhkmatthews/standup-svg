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
      const yyyymmdd = day.date.split('T')[0];
      const weekday = new Date(day.date).toString().split(' ')[0];
      JSDOM.fromFile(`${__dirname}/html/index.html`, { 
        beforeParse(window) {
          window.d3 = d3;
        } 
      }).then(dom => {
        const d3SvgDrawer = new D3SvgDrawer(day);
        fs.writeFileSync(`${__dirname}/../output/svg/${yyyymmdd}-${weekday}.svg`, d3SvgDrawer.getSvgHtml(dom));
      });
    });
  });
const svg = d3.select(window.document).select('svg')
  .attr('version', 1.1)
  .attr('xmlns', 'http://www.w3.org/2000/svg')
  .attr('height', 200)
  .attr('width', 200 );

const originX = 100;
const originY = 100;
const outerCircleRadius = 100;

const formation = day.formation.map((name, index, array) => {
  const coodX = originX + ((outerCircleRadius) * Math.sin(((2*Math.PI)/array.length)*index));
  const coodY = originY - ((outerCircleRadius) * Math.cos(((2*Math.PI)/array.length)*index));
  const coordinate = [coodX, coodY];
  const person = {
    name,
    coordinate
  };
  return person;
});

let order = day.passes.reduce((acc, pass, index) => {
  acc.push(pass.from);
  if (index === day.passes.length -1) {
    acc.push(pass.to);
  }
  return acc;
}, []);

order = order.map(element => {
  return formation.filter(person => {
    return person.name === element;
  })[0];
});


let lineGenerator = d3.line()
  .x(person => person.coordinate[0])
  .y(person => person.coordinate[1]);

let pathData = lineGenerator(order);

let line = svg.append('path')
  .attr('d', pathData)
  .attr('stroke', 'black')
  .attr('fill', 'transparent');
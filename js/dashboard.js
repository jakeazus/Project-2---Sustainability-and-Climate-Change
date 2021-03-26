function d3PieChart(dataset){

  var margin = {top: 30, right: 5, bottom: 20, left: 50};
  var width  = 400 - margin.left - margin.right ,
          height  = 400 - margin.top - margin.bottom,
          outerRadius  = Math.min(width, height) / 2,
          innerRadius  = outerRadius * .999,  
              // for animation
          innerRadiusFinal =  outerRadius * .5,
          innerRadiusFinal3 = outerRadius *  .45,
          color  = d3.scaleOrdinal(d3.schemeCategory10);

   var vis = d3.select("#pieChart")
            .append("svg:svg")           
            .data([dataset])  
            .attr("width", width) 
            .attr("height", height)
            .append("svg:g")    
            .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
    
    var arc = d3.arc()    
            .outerRadius(outerRadius).innerRadius(0);
    
        // for animation
    var arcFinal =  d3.arc().innerRadius(innerRadiusFinal).outerRadius(outerRadius);
    var arcFinal3 =  d3.arc().innerRadius(innerRadiusFinal3).outerRadius(outerRadius);  
    
    var pie = d3.pie()          
        .value(function(d) { return d.measure; });
    
    var arcs = vis.selectAll("g.slice")    
        .data(pie)                         
        .enter()                           
        .append("svg:g")
        .attr("class", "slice")   
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
        .on("click", up);
        
    arcs.append("svg:path")
            .attr("fill", function(d, i) { return color(i); } )
            .attr("d", arc)
            .append("svg:title")
            .text(function(d) { return d.data.category + ": " + formatAsInteger(d.data.measure)+"%"; });
    
        d3.selectAll("g.slice").selectAll("path").transition()
            .duration(750)
            .delay(10)
            .attr("d", arcFinal );

    // Add a label to the larger arcs, translated to the arc centroid and rotated.
    arcs.filter(function(d) { return d.endAngle - d.startAngle  > .2; })
    .append("svg:text")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .attr("transform", function(d) { return "translate(" +  arcFinal.centroid(d) + ")"; })
    .text(function(d) { return d.data.category; });

    // Pie chart title          
    vis.append("svg:text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle")
        .text("Survivors of Titanic")
        .attr("class","title");

    function mouseover() {
            d3.select(this).select("path").transition()
            .duration(750)
            .attr("d", arcFinal3);
        }

    function mouseout() {
            d3.select(this).select("path").transition()
            .duration(750)
            .attr("d", arcFinal);
        }

    function up(d, i) {
            updateBarChart(d.data.category, color(i), datasetBarChart);
        }

}

queue()
    .defer(d3.json, piechartDataUrl)
    .await(ready);
    
function ready(dataset) {
    d3PieChart(dataset);
    //d3BarChart(datasetBarChart);
    }















// set the color scale
//var color = d3.scaleOrdinal()
//  .domain(["a", "b", "c", "d", "e", "f"])
//  .range(d3.schemeDark2);

// A function that create / update the plot for a given variable:
// function update(data) {

//   // Compute the position of each group on the pie:
//   var pie = d3.pie()
//     .value(function(d) {return d.value; })
//     .sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
//   var data_ready = pie(d3.entries(data))

//   // map to data
//   var u = svg.selectAll("path")
//     .data(data_ready)

//   // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
//   u
//     .enter()
//     .append('path')
//     .merge(u)
//     .transition()
//     .duration(1000)
//     .attr('d', d3.arc()
//       .innerRadius(0)
//       .outerRadius(radius)
//     )
//     .attr('fill', function(d){ return(color(d.data.key)) })
//     .attr("stroke", "white")
//     .style("stroke-width", "2px")
//     .style("opacity", 1)
// EXAMPLE: Bubble chart code with user input: https://www.d3-graph-gallery.com/graph/bubble_tooltip.html

// EXAMPLE: Bargraph code with user input: https://blog.risingstack.com/d3-js-tutorial-bar-charts-with-javascript/




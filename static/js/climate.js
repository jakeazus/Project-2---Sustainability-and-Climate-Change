// // PIE CHART FOR CO2 data 

function d3PieChart(){
  url = "/top20CO2"
  d3.json(url, function(data) {
      
      console.log(data);

      // set the dimensions and margins of the graph
      var width = 950;
      var height = 700;
      var margin = 40;

      // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
      var radius = Math.min(width, height) / 2 - margin;
      console.log("here");
      // append the svg object to the div called 'pieChart'
      var svg = d3.select(".pieChart")
      .append("svg")
        .attr("width", width)
        .attr("height", height)
      .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

      // Create dummy data
      var pie_data = {}
      data
      // .slice(0,4)
      .map(obj=>{
          pie_data[obj.country_code] = obj["2015"]
      });

      // set the color scale
      var color = d3.scaleOrdinal()
      .domain(pie_data)
      .range(data.map(obj=>obj.color))
      // .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])


      // Compute the position of each group on the pie:
      var pie = d3.pie()
      .value(function(d) {return d.value; })
      var data_ready = pie(d3.entries(pie_data))

      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      svg.selectAll('.pieChart')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', d3.arc()
      .innerRadius(0)
      .outerRadius(radius)
      )
      .attr('fill', function(d){ return(color(d.data.key)) })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)

      // svg.selectAll('.pieChart')
      // .data(data_ready)
      // .enter()
      // .append('text')
      // .text(function(d){ return d.data.key})
      // .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
      // .style("text-anchor", "middle")
      // .style("font-size", 17)


      
  })
}


d3PieChart();
      
// BAR CHART -- https://www.d3-graph-gallery.com/graph/barplot_horizontal.html
function d3GDPbar() {
url = "/top20GDP"
d3.json(url, function (data) {
  console.log(data);
  // set the dimensions and margins of the graph
  var margin = { top: 20, right: 30, bottom: 40, left: 90 },
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
  // append the svg object to the body of the page
  var svg = d3.select(".GDPBar")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");
  // // Parse the Data
  // d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv", function(data) 
  // Create dummy data
  var gdpbar_data = {}
  data
    // .slice(0,4)
    .map(obj => {
      gdpbar_data[obj.country_code] = obj["2015"]
    });
  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 10])
    .range([0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end");
  // Y axis
  var y = d3.scaleBand()
    .range([0, height])
    .domain(data.map(function (d) { return d.Country; }))
    .padding(.1);
  svg.append("g")
    .call(d3.axisLeft(y))
  //Bars
  svg.selectAll("myRect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", x(0))
    .attr("y", function (d) { return y(d.Country); })
    .attr("width", function (d) { return x(d.Value); })
    .attr("height", y.bandwidth())
    .attr("fill", "#69b3a2")
})
};
d3GDPbar();


// // PIE CHART FOR CO2 data 

function d3PieChart(){
  url = "/top20CO2"
  d3.json(url, function(data) {
      
      console.log(data);

      // set the dimensions and margins of the graph
      var width = 2800;
      var height = 800;
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

      svg.selectAll('.pieChart')
      .data(data_ready)
      .enter()
      .append('text')
      .text(function(d){ return (d.data.country_code)})
      // .attr("x",300)
      // .attr("y",300)
      .attr("fill", "white")
      .attr("transform", function(d) { return "translate(" + arcGenerator.centroid(d) + ")";  })
      .style("text-anchor", "middle")
      .style("font-size", 17)


      
  })
}


d3PieChart();
      
// BAR CHART -- https://www.d3-graph-gallery.com/graph/barplot_horizontal.html
function d3GDPbar() {
url = "/top20GDP"
d3.json(url, function (data) {
  console.log(data);
  // set the dimensions and margins of the graph
  var margin = { top: 30, right: 30, bottom: 55, left: 90 },
    width = 1000 - margin.left - margin.right,
    height = 700 - margin.top - margin.bottom;
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
    // .map(obj => {
    //   gdpbar_data[obj.country_code] = obj["2015"]
    // });
  // Add X axis
  var x = d3.scaleLinear()
    .domain([-6, 8])
    .range([0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "translate(-10,0)rotate(-45)")
    .style("text-anchor", "end")

    svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .style("font-size", "22px")
      .attr("fill", "white")  
      .text("GDP");
  // Y axis
  var y = d3.scaleBand()
    .range([0, height])
    .domain(data.map(function (d) { return d.country_code; }))
    .padding(.1);
  svg.append("g")
    .call(d3.axisLeft(y))
    svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "22px")
    .attr("fill", "white")  
    .text("Country Code");
    svg.append("text")
    .attr("x", (width / 2))             
    .attr("y", 0 - (margin.top / 2))
    .attr("text-anchor", "middle")  
    .style("font-size", "20px") 
    .style("text-decoration", "underline")
    .attr("fill", "white")  
    .text("GDP PER COUNTRY");     
  


  //Bars
  svg.selectAll(".GDPBar")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function (d) { return y(d.country_gdp)})
    .attr("y", function (d) { return y(d.country_code); })
    .attr("width", function (d) { return x(d.country_gdp); })
    .attr("height", y.bandwidth())
    .attr("fill", "#69b3a2")
})
};
d3GDPbar();

function d3EnergyBar() {
  url = "/top20Energy"
  d3.json(url, function (data) {
    console.log(data);
    // set the dimensions and margins of the graph
    var margin = { top: 30, right: 30, bottom: 55, left: 90 },
      width = 1000 - margin.left - margin.right,
      height = 700 - margin.top - margin.bottom;
    // append the svg object to the body of the page
    var svg = d3.select(".RenewableBar")
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
      // .map(obj => {
      //   gdpbar_data[obj.country_code] = obj["2015"]
      // });
    // Add X axis
    var x = d3.scaleLinear()
      .domain([-2, 50])
      .range([0, width]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end")
  
      svg.append("text")             
        .attr("transform",
              "translate(" + (width/2) + " ," + 
                             (height + margin.top + 20) + ")")
        .style("text-anchor", "middle")
        .style("font-size", "22px")
        .attr("fill", "white")  
        .text("Renewable Energy Consumption");
    // Y axis
    var y = d3.scaleBand()
      .range([0, height])
      .domain(data.map(function (d) { return d.country_code; }))
      .padding(.1);
    svg.append("g")
      .call(d3.axisLeft(y))
      svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size", "22px")
      .attr("fill", "white")  
      .text("Country Code"); 
    
      svg.append("text")
      .attr("x", (width / 2))             
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")  
      .style("font-size", "20px") 
      .attr("fill", "white")
      .style("text-decoration", "underline")  
      .text("RENEWABLE ENERGY CONSUMPTION PER COUNTRY");     
    
  
  
    //Bars
    svg.selectAll(".RenewableBar")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", function (d) { return y(d.country_energy)})
      .attr("y", function (d) { return y(d.country_code); })
      .attr("width", function (d) { return x(d.country_energy); })
      .attr("height", y.bandwidth())
      .attr("fill", "#69b3a2")
  })
  };
  d3EnergyBar();
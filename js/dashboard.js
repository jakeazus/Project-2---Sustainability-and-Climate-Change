function d3PieChart(dataset){
    url = "http://127.0.0.1:5000/Top 20 Countries by CO2 Emission".concat(dataset)
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
        var data = data['2015'];

        // set the color scale
        var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

        // Compute the position of each group on the pie:
        var pie = d3.pie()
        .value(function(d) {return d.value; })
        var data_ready = pie(d3.entries(data))

        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg.selectAll('#pieChart')
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
        
    })
}


d3PieChart('#pieChart');
        
        
        
        
        
        
        
        
        
        
        
        
        
        // var formatAsInteger = d3.format(",");
        // var margin = {top: 30, right: 5, bottom: 20, left: 50};
        // var width  = 400 - margin.left - margin.right ,
        //         height  = 400 - margin.top - margin.bottom,
        //         outerRadius  = Math.min(width, height) / 2,
        //         innerRadius  = outerRadius * .999,  
        //             // for animation
        //         innerRadiusFinal =  outerRadius * .5,
        //         innerRadiusFinal3 = outerRadius *  .45,
        //         color  = d3.scaleOrdinal(d3.schemeCategory10);

        // var vis = d3.select("#pieChart")
        //             .append("svg:svg")           
        //             .data([data])  
        //             .attr("width", width) 
        //             .attr("height", height)
        //             .append("svg:g")    
        //             .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
            
        // var arc = d3.arc()    
        //         .outerRadius(outerRadius).innerRadius(0);
        
        //     // for animation
        // var arcFinal =  d3.arc().innerRadius(innerRadiusFinal).outerRadius(outerRadius);
        // var arcFinal3 =  d3.arc().innerRadius(innerRadiusFinal3).outerRadius(outerRadius);  
        
        // var pie = d3.pie()          
        //     .value(function(d) { return d.measure; });
        
        // var arcs = vis.selectAll("g.slice")    
        //     .data(pie)                          
        //     .enter()                           
        //     .append("svg:g")
        //     .attr("class", "slice")   
        //     .on("mouseover", mouseover)
        //     .on("mouseout", mouseout)
            
        // arcs.append("svg:path")
        //         .attr("fill", function(d, i) { return color(i); } )
        //         .attr("d", arc)
        //         .append("svg:title")
        //         .text(function(d) { return d.data.category + ": " + formatAsInteger(d.data.measure)+"%"; });
        
        //     d3.selectAll("g.slice").selectAll("path").transition()
        //         .duration(750)
        //         .delay(10)
        //         .attr("d", arcFinal );

        // // // Add a label to the larger arcs, translated to the arc centroid and rotated.
        // // arcs.filter(function(d) { return d.endAngle - d.startAngle  > .2; })
        // // .append("svg:text")
        // // .attr("dy", ".35em")
        // // .attr("text-anchor", "middle")
        // // .attr("transform", function(d) { return "translate(" +  arcFinal.centroid(d) + ")"; })
        // // .text(function(d) { return d.data.category; });

        // // // Pie chart title          
        // // vis.append("svg:text")
        // //     .attr("dy", ".35em")
        // //     .attr("text-anchor", "middle")
        // //     .text("Top 20 Countries by CO2 Emission")
        // //     .attr("class","title");

        // // function mouseover() {
        // //         d3.select(this).select("path").transition()
        // //         .duration(750)
        // //         .attr("d", arcFinal3);
        // //     }

        // // function mouseout() {
        // //         d3.select(this).select("path").transition()
        // //         .duration(750)
        // //         .attr("d", arcFinal);
        // //     }



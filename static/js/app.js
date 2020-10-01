// Two main asks:
  // Initialize
    // hydrate (populate) the dropdown menu
    // Filter samples.json to get data associated with default
        // Render the bar chart with data from the selected name (default value) 
        // Render bubble chart
        // render metadata (key value pair)
  // Respond to user input
      // rerender bar chart (15.2 Activity 8), bubble chart, and metadata based on user selection


// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // Top 10: if (bar_ids.length <= 10) {
        // loop through OTU Data: for ...
        // Append data: bar.push(values)
        // }
    // Use sample_values as the values for the bar chart
    // Use otu_ids as the labels for the bar chart
    // Use otu_labels as the hovertext for the chart.


// 1. Use the D3 library to read in samples.json.
// reference: http://learnjsdata.com/read_data.html
// d3.json("../samples.json").then(function (data) {
//   console.log(data);
//   data.names.forEach(function (name) {
//       console.log(name);
//   });
//   // populate the dropdown menu
//   var sampleNames = data.names;
//   sampleNames.forEach((name) => {
//       selector
//           .append("option")
//           .text(name)
//           .property("value", name);
//   });
// });

// Initialize the page with a default plot
function init() {
    var selector = d3.select("#selDataset");
    d3.json("../samples.json").then(function(data) {
        console.log(data);
        data.names.forEach(function (name) {
            console.log(name);
        });
        // populate the dropdown menu
        var sampleNames = data.names;
        sampleNames.forEach((name) => {
            selector
                .append("option")
                .text(name)
                .property("value", name);
        });
        // build the initial plots with the first sample by calling both functions you define
        var firstSample = sampleNames[0];
        buildCharts(firstSample);
        // buildMetadata(firstSample);   
    });
  }

function buildCharts(id) {
    d3.json("../samples.json").then(function(data) {
        // this returns array of objects
        var samples = data.samples
        // filter for id that matches sample
        var filteredData = samples.filter(sample => sample.id == id);
        // console.log(filteredData[0].sample_values);
        barChart(filteredData[0]);
        // bubbleChart(sample);
    });
}

function barChart(sample) {
    var slicedData = sample.sample_values.slice(0, 10);
    console.log("sliced data", slicedData);
    // const map1 = array1.map(x => x * 2);
    var labels = sample.otu_ids.slice(0,10).map(label => `${label}`);
    console.log("labels", labels);
    var hoverText = sample.otu_labels.slice(0,10);
    console.log("hover text", hoverText);
// // // // Reverse the array to accommodate Plotly's defaults - IS THIS NECESSARY?
// // // reversedData = slicedData.reverse();

    // Trace1 
    var trace1 = [{
        x: slicedData,
        y: labels,
        text: hoverText,
        // name: "Top 10 OTUs",
        type: "bar",
        orientation: "h"
    }];
    // Define the plot layout
    var layout = {
        title: "Top Ten OTUs per Individual",
        yaxis: { type: "category" },
        // xaxis: { title: "Frequency" },
        // yaxis: { title: "OTU" },
        margin: { t:30, l:150 }
    };
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("bar", trace1, layout);
}



// // data
// var data = [trace1];


// // Define x and y axis but the info is in the json file we aren't typing it??
// // var Frequency = ??
// // var OTU = ??

// // // Create the Trace
// // var trace1 = {
// //     x: Frequency,
// //     y: OTU,
// //     type: "bar"
// //   };
  
// //   // Create the data array for the plot
// //   var data = [trace1];

// //   // Plot the chart to a div tag with id "bar-plot"
// //   Plotly.newPlot("bar-plot", data, layout);
  

// // 3. Create a bubble chart that displays each sample.
//   // Use otu_ids for the x values
//   // Use sample_values for the y values
//   // Use sample_values for the marker size
//   // Use otu_ids for the marker colors
//   // Use otu_labels for the text values.
//   // DOCUMENTATION: https://plotly.com/javascript/bubble-charts/

//   var trace1 = {
//     x: [1, 2, 3, 4],
//     y: [10, 11, 12, 13],
//     mode: 'markers',
//     marker: {
//       size: [40, 60, 80, 100]
//     }
//   };
  
//   var data = [trace1];
  
//   var layout = {
//     title: 'Marker Size',
//     showlegend: false,
//     height: 600,
//     width: 600
//   };
  
//   Plotly.newPlot('myDiv', data, layout);
  
// // 4. (WHAT)Display the sample metadata, i.e., an individual's demographic information.

// // 5. (HOW to do 4) Display each key-value pair from the metadata JSON object somewhere on the page.
  
// // 6. Update all of the plots any time that a new sample is selected.
//   // 15.2 Activity 9


init();
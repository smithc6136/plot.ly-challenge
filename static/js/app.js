// 1. Use the D3 library to read in samples.json.
// reference: http://learnjsdata.com/read_data.html
d3.json("../samples.json").then(function(data) {
    console.log(data);
    data.names.forEach(function (name) {
        console.log(name);
    });
    // populate the dropdown menu
    var sampleNames = data.names;
    sampleNames.forEach((name) => {
      .select("selector")
      .append("option")
      .text(names)
      .property("value", names);
});
});


// Initialize the page with a default plot
function init() {
    d3.select("#selDataset")
    d3.json("../samples.json").then(function(data) {
        console.log(data);
        data.names.forEach(function (name) {
            console.log(name);
        });
    });
    // build the initial plots with the first sample by calling both functions you define
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  }


// Two main asks:
  // Initialize
    // hydrate (populate) the dropdown menu
        // <option value="dog">Dog</option>
          // var option = document.createElement("option");
          // option.text = "Text";
          // option.value = "myvalue";
          // var select = document.getElementById("daySelect");
          // select.appendChild(option);
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
        // for loop to iterate through all "names" (data.names) to populate select options
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
// Reference: 15.1 Activity 2 AND 15.2 Activity 6 Part 2 (Horiz bar chart) BELOW

// // // Sort the data (how does it know to do this for each person??)
// var sortedData = data.sort((a, b) => a.otu_ds - b.otu_ids);
// console.log(sortedData);
// // // Slice the first 10 objects for plotting
// // slicedData = sortedData.slice(0, 10);
// console.log(slicedData);

// // // Reverse the array to accommodate Plotly's defaults - IS THIS NECESSARY?
// // reversedData = slicedData.reverse();

// // Trace1 
// var trace1 = {
//   x: slicedData.map(object => object.otu_ids),
//   y: slicedData.map(object => object.otu_ids),
//   text: slicedData.map(object => object.names),
//   name: "Greek",
//   type: "bar",
//   orientation: "h"
// };

// // data
// var data = [trace1];


// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("plot", data, layout);



// Define x and y axis but the info is in the json file we aren't typing it??
// var Frequency = ??
// var OTU = ??

// // Create the Trace
// var trace1 = {
//     x: Frequency,
//     y: OTU,
//     type: "bar"
//   };
  
//   // Create the data array for the plot
//   var data = [trace1];
  
//   // Define the plot layout
//   var layout = {
//     title: "Top Ten OTUs per Individual",
//     xaxis: { title: "Frequency" },
//     yaxis: { title: "OTU" }
//   };
  
//   // Plot the chart to a div tag with id "bar-plot"
//   Plotly.newPlot("bar-plot", data, layout);
  

// 3. Create a bubble chart that displays each sample.
  // Use otu_ids for the x values
  // Use sample_values for the y values
  // Use sample_values for the marker size
  // Use otu_ids for the marker colors
  // Use otu_labels for the text values.
  // DOCUMENTATION: https://plotly.com/javascript/bubble-charts/
  
// 4. (WHAT)Display the sample metadata, i.e., an individual's demographic information.

// 5. (HOW to do 4) Display each key-value pair from the metadata JSON object somewhere on the page.
  
// 6. Update all of the plots any time that a new sample is selected.
  // 15.2 Activity 9
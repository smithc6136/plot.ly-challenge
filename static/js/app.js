// 1. Use the D3 library to read in samples.json.
// reference: http://learnjsdata.com/read_data.html
d3.json("../samples.json").then(function(data) {
    console.log(data);
  });


// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
    // Use sample_values as the values for the bar chart
    // Use otu_ids as the labels for the bar chart
    // Use otu_labels as the hovertext for the chart.
// Reference: 15.1 Activity 2 AND 15.2 Activity 6 Part 2 (Horiz bar chart)
 // Organize and slice to get top 10 (from 15.2 06 sliceSort.js):
    // // Sort the array in ascending order using an arrow function
    // var sortedAscending = numArray.sort((a, b) => a - b);
    // console.log(sortedAscending);
    // // Slice the first five elements of the sortedAscending array, assign to a variable
    // var sliced = sortedAscending.slice(0, 5);
    // console.log(sliced);


// Define x and y axis but the info is in the json file we aren't typing it??
// var Frequency = ??
// var OTU = ??

// Create the Trace
var trace1 = {
    x: Frequency,
    y: OTU,
    type: "bar"
  };
  
  // Create the data array for the plot
  var data = [trace1];
  
  // Define the plot layout
  var layout = {
    title: "Top Ten OTUs per Individual",
    xaxis: { title: "Frequency" },
    yaxis: { title: "OTU" }
  };
  
  // Plot the chart to a div tag with id "bar-plot"
  Plotly.newPlot("bar-plot", data, layout);
  

// 3. Create a bubble chart that displays each sample.
  // Use otu_ids for the x values
  // Use sample_values for the y values
  // Use sample_values for the marker size
  // Use otu_ids for the marker colors
  // Use otu_labels for the text values.

// 4. Display the sample metadata, i.e., an individual's demographic information.

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.
  
// 6. Update all of the plots any time that a new sample is selected.
  // 15.2 Activity 9
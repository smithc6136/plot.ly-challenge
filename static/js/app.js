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
        var metaData = data.metadata
        // filter for id that matches sample
        var filteredData = samples.filter(sample => sample.id == id);
        var filteredMetadata = metaData.filter(metadatum => metadatum.id == id);
        // console.log(filteredData[0].sample_values);
        barChart(filteredData[0]);
        bubbleChart(filteredData[0]);
        metadata(filteredMetadata[0]);
    });
}

function barChart(sample) {
    var slicedData = sample.sample_values.slice(0, 10).reverse();
    console.log("sliced data", slicedData);
    // const map1 = array1.map(x => x * 2);
    var labels = sample.otu_ids.slice(0,10).reverse().map(label => `${label}`);
    console.log("labels", labels);
    var hoverText = sample.otu_labels.slice(0,10).reverse();
    console.log("hover text", hoverText);

    // Trace1 
    var trace1 = [{
        x: slicedData,
        y: labels,
        text: hoverText,
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

// Bubble Chart Documentation: https://plotly.com/javascript/bubble-charts

function bubbleChart(sample) {
    var trace1 = {
        x: sample.otu_ids,
        y: sample.sample_values,
        mode: 'markers',
        marker: {
            size: sample.sample_values
        }
    }

    var data = [trace1];
  
    var layout = {
        title: 'Marker Size',
        showlegend: false
        // height: 600,
        // width: 600
    };
  
  Plotly.newPlot('bubble', data, layout);
}; 

function metadata(sample) {
    var selector = d3.select("#sample-metadata");
    // d3.json("../samples.json").then(function(data) {
        console.log(sample);
        // populate the menu
        d3.selectAll(".metadata").remove();
        for (const [key, value] of Object.entries(sample)) {
            console.log(`${key}: ${value}`);
            selector
                .append("p")
                .attr("class", "metadata")
                .text(key+": "+value);
        };
};

// Function called by DOM changes
function optionChanged(id) {
  buildCharts(id);
}

init();
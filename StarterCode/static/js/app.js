// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use D3 to select the table body
function dataDisplay(tableData) {
    // Use D3 to select the table
    var table = d3.select("table");
    // Use d3 to create a bootstrap striped table
    // http://getbootstrap.com/docs/3.3/css/#tables-striped
    table.attr("class", "table table-striped");
    var tbody = d3.select("tbody").remove();
    tbody = table.append("tbody");
    tbody = d3.select("tbody");
    tableData.forEach(function (UFOdata) {
        // Append one table row `tr` to the table body
        var row = tbody.append("tr");
        Object.entries(UFOdata).forEach(function ([key, value]) {
            var cell = row.append("td");
            var cell1 = cell.text(value);
            // console.log(cell1);
        });
    });
}

function newFilter(input, data, id){
     var filteredData = data.filter(UFOelement => UFOelement[id] === input);
     if (filteredData == ""){
     console.log("Record not found")
     var tbody = d3.select("tbody").remove();
     var table = d3.select("table");
     tbody = table.append("tbody");
     tbody = d3.select("tbody");
     var row = tbody.append("tr");
     var cell1 = row.text("Record not found");
    }
    else{          
     dataDisplay(filteredData)
     tableData = filteredData;    
}
}
// Select the submit button
var submit = d3.selectAll("button");
// var submit1 = d3.select("#filter-state");
// submit.on("click",InputDate)   
submit.on("click", function () {
console.dir(this.previousElementSibling.children[0].children[0].children[1].id);
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // Select the input element and get the raw HTML node
    // var inputElement = d3.select("#datetime");
    var inputElement = this.previousElementSibling.children[0].children[0].children[1].id;
    // Get the value property of the input element
    // var inputValue = inputElement.property("value");
    var inputValue = this.previousElementSibling.children[0].children[0].children[1].value;
    // console.log(inputValue);
    newFilter(inputValue, tableData, inputElement);
});
// inialize the page
dataDisplay(tableData);

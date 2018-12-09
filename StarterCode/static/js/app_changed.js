// from data.js
var tableData = data;

// YOUR CODE HERE!
// Use D3 to select the table
var table = d3.select("table");
// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
function dataDisplay() {
    var tbody = d3.select("tbody");
    tableData.forEach(function(UFOdata) {
    // Append one table row `tr` to the table body
        var row = tbody.append("tr");
        Object.entries(UFOdata).forEach(function([key, value]) {
            var cell = row.append("td");
            var cell1 = cell.text(value);
            console.log(cell1);
    });    
 });
}

function searchClick() {
// Select the submit button
var submit = d3.select("#filter-btn");
// submit.on("click",InputDate)   
    submit.on("click", searchData)
}

function searchData() {
    
      // Prevent the page from refreshing
    d3.event.preventDefault();
    
      // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    
      // Get the value property of the input element
    var inputValue = inputElement.property("value");
    
    console.log(inputValue);
    //   console.log(tableData); 
    var filteredData = tableData.filter(UFOelement => UFOelement.datetime === inputValue);
    console.log(dataDisplay(filteredData));
    dataDisplay(filteredData);

}    
dataDisplay();



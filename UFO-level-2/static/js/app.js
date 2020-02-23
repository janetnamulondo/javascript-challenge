// Assigning Data from data.js a more descriptive name
var Aliens = data;

// YOUR CODE HERE!
// Get reference to the table body 
var tbody = d3.select("tbody");

//Print the UFO data from the data file 
console.log(Aliens); 

// Create function to load table 
function loadtable(data) {
    // clear the table of any existing data
    tbody.html("");
    // Loop through the data to collect all the values and insert them to the table in Html
    data.forEach(datarow => {
        var row = tbody.append("tr");
        Object.entries(datarow).forEach(function([key,value]){
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

// Creating Event Handlers and filters for the data
// Use a date form in your HTML document and write JavaScript code that will listen for events
// Select the button 
var button = d3.select("#filter-btn");

function handleClick() {
    // clear the table of any existing data
    tbody.html("");

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Locate the inputElement 
    var inputElement = d3.select("#datetime");

    // Add the value property that you will enter into the input element 
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // The value will then go into the span division
    d3.select("span").text(inputValue);

    //search through the date/time column to find rows that match user input.
    // Create filter to get information by date 
    var selectedDate = Aliens.filter(date => new Date(date.datetime).getTime() === new Date(inputValue).getTime());
    console.log(selectedDate);
}
// Call the handleClick function when you select the button. 
button.on("click", handleClick);

// // Build a new table once a specific date entered. 
loadtable(Aliens)
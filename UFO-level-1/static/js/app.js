
// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get reference to the table body 
var tbody = d3.select("tbody");

//Print the UFO data from the data file 
console.log(data); 

//Loop through the data to collect all the values and map them to the table in Html 
data.forEach(function(ufoReport){
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key,value]){
        console.log(key,value);
        var cell = row.append("td");
        cell.text(value);

    });

    

})


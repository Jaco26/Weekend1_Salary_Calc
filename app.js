var employees = []; // current employees on the DOM
var removedEmployees = []; // employees that have been removed from the DOM
var employeesPastAndPresent = []; // all employees ever to have exisited

function Employee(first, last, title, id, salary){ // constructor for Employee object
  this.firstName = first;
  this.lastName = last;
  this.jobTitle = title;
  this.employeeId = id;
  this.annualSalary = salary;
}

$(document).ready(function(){

  $('.inputDiv').on('click', function(e){
    if(e.target && !e.target.matches('.inputel')){
      $('#firstNameIn').focus();
    }
  }); // end focus div
  // push input info to employees as Employee object instance
  $('#submitBtn').on('click', function(){
    getFormInfo(); // create an Employee instane and push it to the appropriate arrays
    displayInfoOnTable(employees); // pass the emploees array to displayInfoOnTable...could display another array if desired
  });
}); // end document.ready

function getFormInfo(){ // is called when #submitBtn is clicked
  $employee = new Employee($('#firstNameIn').val(), $('#lastNameIn').val(), $('#jobTitle').val(), $('#employeeId').val(), $('#salary').val()); // store a new instance of an Employee object inside $employee. Use the .inputel's .val()'s as the new Employee's property values
  employees.push($employee); // push the new $emploee to the emploees array
  employeesPastAndPresent.push($employee); // also push it to the employeesPastAndPresent array which will hold a record of deleted and current employees
  $('.inputel').val(''); // clear any text inside the .inputel's
} // end getFormInfo

function displayInfoOnTable(arr){
  $('.outputDiv tbody').empty(); // each time the function is called (by the #submitBtn onclick), empty the table body that's in the .outputDiv
  for(row = 0; row < arr.length; row++){ // iterate a loop once for each table row desired
    $tr = $('<tr>'); // create a new table row
    var keys = Object.keys(arr[row]); // get the keys for the properties of the object in arr at the current index
    for (var col = 0; col < keys.length; col++) { // iterate a loop once for each table column desired
      $tr.append($('<td>').text(employees[row][keys[col]])[0]); // for each property in arr[row], append a new table cell with text corrosponding to the current property key to newly created table row.
    } // end column for loop
    $('.outputDiv tbody').append($tr.data('id', this.employeeId)); // append the newly filled out <tr> to the table body that's inside the .outputDiv
  } // end row for loop

} // end displayInfoOnTable

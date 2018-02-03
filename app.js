var employees = []; // current employees on the DOM
var removedEmployees = []; // employees that have been removed from the DOM
var employeesPastAndPresent = []; // all employees ever to have exisited

employees.push(new Employee('Jacob', 'Albright', 'Phone', 13322, 50000));
employees.push(new Employee('Caroline', 'Cruys', 'Social Worker', 44932, 70000));
employees.push(new Employee('Jacob', 'Allers', 'Artist', 44998, 55000));


function Employee(first, last, title, id, salary){ // constructor for Employee object
  this.firstName = first;
  this.lastName = last;
  this.jobTitle = title;
  this.employeeId = id;
  this.annualSalary = salary;
}

$(document).ready(function(){
  displayInfoOnTable(employees);
  $('.inputDiv').on('click', function(e){
    if(e.target && !e.target.matches('.inputel')){
      $('#firstNameIn').focus();
    }
  }); // end focus div

  $('#submitBtn').on('click', function(){
    getFormInfo(); // create an Employee instane and push it to the appropriate arrays
    displayInfoOnTable(employees); // pass the emploees array to displayInfoOnTable...could display another array if desired
    console.log(employees);
  }); // end #submitBtn click

  $('#infoTable').on('click', '.removeBtn', function(){
    for (var i = 0; i < employees.length; i++) {
      if($(this).data('id') === employees[i].employeeId){
        console.log($(this).data('id') + ' and ' + employees[i].employeeId + ' = a match!');
        removedEmployees.push(employees.splice(i, 1));
        displayInfoOnTable(employees);
      }
    }
  });

}); // end document.ready

function getFormInfo(){ // is called when #submitBtn is clicked
  $employee = new Employee($('#firstNameIn').val(), $('#lastNameIn').val(), $('#jobTitle').val(), Number($('#employeeId').val()), Number($('#salary').val())); // store a new instance of an Employee object inside $employee. Use the .inputel's .val()'s as the new Employee's property values
  employees.push($employee); // push the new $emploee to the emploees array
  employeesPastAndPresent.push($employee); // also push it to the employeesPastAndPresent array which will hold a record of deleted and current employees
  $('.inputel').val(''); // clear any text inside the .inputel's
} // end getFormInfo

function displayInfoOnTable(arr){
  var totalCost = 0;
  $('#infoTable tbody').empty(); // each time the function is called (by the #submitBtn onclick), empty the table body that's in the .outputDiv
  $('#totalsTable tbody').empty();
  for(row = 0; row < arr.length; row++){ // iterate a loop once for each table row desired
    $tr = $('<tr>'); // create a new table row
    var keys = Object.keys(arr[row]); // get the keys for the properties of the object in arr at the current index
    for (var col = 0; col < keys.length; col++) { // iterate a loop once for each table column desired...the + 1 is to make room for a button that will hold .data() and remove the row from the DOM
      $tr.append($('<td>').text(employees[row][keys[col]])[0]); // for each property in arr[row], append a new table cell with text corrosponding to the current property key to newly created table row.
    } // end column for loop
    $tr.append($('<button data-id="'+employees[row].employeeId+'">').addClass('removeBtn').text('x')); // append button with data attribute
    $('.outputDiv tbody').append($tr); // append the newly filled out <tr> to the table body that's inside the .outputDiv
    totalCost += employees[row].annualSalary; // add the current employee's anual salary to total cost
    $('#totalCost').html('Total Spent on Salaries/Month: <strong>$'+Math.round((totalCost / 12) * 100) / 100+'</strong>'); // display monthly cost on table
  } // end row for loop

} // end displayInfoOnTable




/*



*/

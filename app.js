var employees = []; // current employees on the DOM
var removedEmployees = []; // employees that have been removed from the DOM
var allEmployees = []; // all employees ever to have exisited

function Employee(first, last, title, id, salary){ // constructor for Employee object
  this.firstName = first;
  this.lastName = last;
  this.jobTitle = title;
  this.employeeId = id;
  this.annualSalary = salary;
}

$(document).ready(function(){
  $('#submitBtn').on('click', getFormInfo); // push input info to employees as Employee object instance
  $('.inputDiv').on('click', function(e){
    if(e.target && !e.target.matches('.inputel')){
      $('#firstNameIn').focus();
    }
  });
});

function getFormInfo(){ // is called when #submitBtn is clicked
  $employee = new Employee($('#firstNameIn').val(), $('#lastNameIn').val(), $('#jobTitle').val(), $('#employeeId').val(), $('#salary').val());
  employees.push($employee);
  $('.inputel').val('');
}

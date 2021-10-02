$(readyNow);
let employeeInfoArray = [];
let totalMonthly = 0;


function readyNow() {
    $(`#submitButton`).on(`click`, addEmployeeInformation)
    $(`#informationList`).on(`click`, `.deleteButton`, deleteEmployee)

} //end readyNow


// add salaries to total monthly
function addSalaries() {
    let totalSalary = 0;
    //loop through employee salaries in employeeInfoArray
    for (let i = 0; i < employeeInfoArray.length; i++) {
        totalSalary += Number(employeeInfoArray[i].Salary)
    } //end for loop
    console.log('in addSalaries', totalSalary);
    //divide total salaries by 12 for monthly output
    let totalMonthly = totalSalary / 12;
    //print to DOM
    $(`#totalMonthly`).text(formatCurrency(totalMonthly));

}
//format numbers to currency
function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    }).format(number);
  }

//delete employee row with button
function deleteEmployee() {
    console.log('in deleteEmployee');
     let removeEmployee = $(this).closest(`tr`).index();
     console.log('Remove employee:', removeEmployee);
     
     employeeInfoArray.splice(removeEmployee, 1);
    
     
    
     render();
}

//clear inputs
function clearInputs() {
    employeeIn = {
        firstName: $(`#firstNameIn`).val(''),
        lastName: $(`#lastNameIn`).val(''),
        id: $(`#idNumberIn`).val(''),
        Title: $(`#jobTitleIn`).val(''),
        Salary: $(`#salaryIn`).val('')
    }
}


//add employees to array and DOM;
function addEmployeeInformation() {
    console.log('in addEmployeeInformation');


    let employeeIn = {
        firstName: $(`#firstNameIn`).val(),
        lastName: $(`#lastNameIn`).val(),
        id: $(`#idNumberIn`).val(),
        Title: $(`#jobTitleIn`).val(),
        Salary: $(`#salaryIn`).val()
    }

    //push employee input into array
    employeeInfoArray.push(employeeIn);
    console.log(employeeInfoArray);


    
    render();
    clearInputs();
}



function render() {

    $(`#informationList`).empty();
    
    for (let employee of employeeInfoArray) {
        console.log(employee);

        const rows = `<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.id}</td>
    <td>${employee.Title}</td>
    <td>${formatCurrency(employee.Salary)}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>`;
        $(`#informationList`).append(rows);

    }
    addSalaries();
    // calculateEmployeeSalary();
    

}

// function calculateEmployeeSalary() {
//     // employeeInfoArray.reduce((sum, employee) => sum + employee.Salary, 0);
//     let totalMonthlyExpense = employeeInfoArray.reduce((sum, Salary) => sum += Salary)
//     return totalMonthlyExpense 
// }

// let prime = [ 'p', 'r', 'i', 'm', 'e'].reduce((word, letter) => word + letter)
// console.log(prime);


//look up .index();
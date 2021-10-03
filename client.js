$(readyNow);
let employeeInfoArray = [];
let totalMonthly = 0;


function readyNow() {
    $(`#submitButton`).on(`click`, addEmployeeInformation)
    $(`#informationList`).on(`click`, `.deleteButton`, deleteEmployee)

} //end readyNow

// render new information to DOM
function render() {
    //empty #information list to stop whole array from being added to DOM with every render
    $(`#informationList`).empty();

    //loop through array
    for (let employee of employeeInfoArray) {
        console.log(employee);

        //add in array info to DOM table
        const rows = `<tr>
    <td class="td">${employee.firstName}</td>
    <td class="td">${employee.lastName}</td>
    <td class="td">${employee.id}</td>
    <td class="td">${employee.Title}</td>
    <td class="td">${formatCurrency(employee.Salary)}</td>
    <td><button class="deleteButton btn btn-outline-danger">Delete</button></td>
    </tr>`;
        $(`#informationList`).append(rows);
    }
    //calculate employee salaries with every render
    addSalaries();
} //end render

//add employees to array and DOM;
function addEmployeeInformation() {
    console.log('in addEmployeeInformation');

    //employee intake object
    let employeeIn = {
        firstName: $(`#firstNameIn`).val(),
        lastName: $(`#lastNameIn`).val(),
        id: $(`#idNumberIn`).val(),
        Title: $(`#jobTitleIn`).val(),
        Salary: $(`#salaryIn`).val()
    } 
    //condition to make sure all input fields filled in
    if (employeeIn.firstName === '' ||
        employeeIn.lastName === '' ||
        employeeIn.id === '' ||
        employeeIn.Title === null ||
        employeeIn.Salary === '') {
        return alert('Please fill in all fields!')
    } else {
        //push employee input into array
        employeeInfoArray.push(employeeIn);
        console.log(employeeInfoArray)
    }

    //call function when submit button is clicked
    render();
    clearInputs();
}//end addEmployeeInformation

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

} //end addSalaries

//format integers to currency
function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
    }).format(number);
}//end formatCurrency

//delete employee row with button
function deleteEmployee() {
    console.log('in deleteEmployee');
    //create variable to hold array[i] when delete button pressed
    let removeEmployee = $(this).closest(`tr`).index();
    console.log('Remove employee:', removeEmployee);

    //remove array[i] 
    employeeInfoArray.splice(removeEmployee, 1);

    //re-render page
    render();
} //end deleteEmployee

//clear inputs
function clearInputs() {
    employeeIn = {
        firstName: $(`#firstNameIn`).val(''),
        lastName: $(`#lastNameIn`).val(''),
        id: $(`#idNumberIn`).val(''),
        Title: $(`#jobTitleIn`).val(''),
        Salary: $(`#salaryIn`).val('')
    }
} // end clearInputs

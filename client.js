$(readyNow);
let employeeInfoArray = [];
let totalMonthly = 0;


function readyNow() {
    $(`#submitButton`).on(`click`, addEmployeeInformation)
    $(`#informationList`).on(`click`, `.deleteButton`, deleteEmployee)

} //end readyNow


//add salaries to total monthly
function addSalaries() {
    let employeeSalary = employeeInformation.Salary;
    console.log('in addSalaries', employeeSalary);

}


//delete employee row with button
function deleteEmployee() {
    console.log('in deleteEmployee');
    $(this).closest(`tr`).remove();
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


    // addSalaries();
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
    <td>${employee.Salary}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>`;
        $(`#informationList`).append(rows);
    }

}
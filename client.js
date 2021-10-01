$(readyNow);

function readyNow() {
    $(`#submitButton`).on(`click`, addEmployeeInformation)
    $(`#informationList`).on(`click`, `.deleteButton`, deleteEmployee)

} //end readyNow

function deleteEmployee() {
    console.log('in deleteEmployee');
    $(this).closest(`tr`).remove();
}

function addEmployeeInformation() {
    console.log('in addEmployeeInformation');

    const employeeIn = {
        firstName: $(`#firstNameIn`).val(),
        lastName: $(`#lastNameIn`).val(),
        id: $(`#idNumberIn`).val(),
        Title: $(`#jobTitleIn`).val(),
        Salary: $(`#salaryIn`).val()
    }
    console.log(employeeIn);

    const row = `<tr>
    <td>${employeeIn.firstName}</td>
    <td>${employeeIn.lastName}</td>
    <td>${employeeIn.id}</td>
    <td>${employeeIn.Title}</td>
    <td>${employeeIn.Salary}</td>
    <td><button class="deleteButton">Delete</button></td>
    </tr>`;

    $(`#informationList`).append(row);
}
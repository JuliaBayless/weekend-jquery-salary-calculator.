$(readyNow);

function readyNow() {
    console.log('JQ is Loaded!');

    $(`#submitButton`).on(`click`, addEmployeeInformation)

} //end readyNow

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
    </tr>`

    $(`#informationList`).append(row);
}
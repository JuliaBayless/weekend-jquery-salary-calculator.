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
        Salary: $(`salaryIn`).val()
    }
    console.log(employeeIn);


}
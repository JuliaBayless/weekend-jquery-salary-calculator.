$(readyNow);

function readyNow(){
    console.log('JQ is Loaded!');
    
    $(`#submitButton`).on(`click`, addEmployeeInformation)

} //end readyNow

function addEmployeeInformation(){
    console.log('in addEmployeeInformation');
    
    const employeeIn = {
        
    }
}
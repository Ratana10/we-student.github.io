var selectedRow = -1

var studentArray = []
function init(){
    if(localStorage.studentRecords){
        studentArray = JSON.parse(localStorage.studentRecords);

        for(var i = 0; i<studentArray.length; i++ ){
            var data = {};
            data["firstName"] = studentArray[i].firstName;
            data["lastName"] = studentArray[i].lastName;
            data["rollNO"] = studentArray[i].rollNO;

            insertNewRecord(data)
        }
    }
}

function onFormSubmit(){

    var formData = readFormData();
    
    if (selectedRow == -1){
        
        insertNewRecord(formData)
    }
    else{

        updateRecord(formData)
    }
    
    resetForm()
    
}


function readFormData(){
    var formData = {};
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["rollNO"] = document.getElementById("rollNO").value;
    
    if(selectedRow == -1){
        studentArray.push(formData)
    }
    else{
        
        studentArray.splice(selectedRow, 1, formData)   //dete one row and replace the new data
    }
    localStorage.studentRecords = JSON.stringify(studentArray);
    return formData;
}
function resetForm(){
    selectedRow = -1
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("rollNO").value = "";
    document.getElementById("submit").innerHTML = "Submit"
}
function insertNewRecord(data){
    var table = document.getElementById("student-list").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
 
    cel1 = newRow.insertCell(0);
    cel1.innerHTML = data.firstName;

    cel2 = newRow.insertCell(1);
    cel2.innerHTML = data.lastName;

    cel3 = newRow.insertCell(2);
    cel3.innerHTML = data.rollNO;

    
    cel4 = newRow.insertCell(3);
    cel4.innerHTML = `<a onClick="onEdit(this)" type="button" class="btn btn-primary">Edit</a>
                      <a onClick="onDelete(this)" type="button" class="btn btn-danger">Delete</a>`

    
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;

    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("rollNO").value = selectedRow.cells[2].innerHTML;

    document.getElementById("submit").innerHTML = "Update"
}   
function onDelete(td){
    if(confirm("Are you sure to delete this record ?")){
        row = td.parentElement.parentElement;
        // clear all data
        //localStorage.studentRecordudentArray.push(formData)
        los = localStorage.clear()
        
    
        document.getElementById("student-list").deleteRow(row.rowIndex);
        studentArray.splice(td, 1);
        localStorage.studentRecords = JSON.stringify(studentArray);
        //init();
    }
}
function updateRecord(formData){

    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.rollNO;

}

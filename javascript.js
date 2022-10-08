var selectedRow = null
function onFormSubmit(){
    var formData = readFormData();
    
    if (selectedRow == null){

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
 
    return formData;
}
function resetForm(){
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("rollNO").value = "";
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
                      <a onClick="innerTextonDelete(this)" type="button" class="btn btn-danger">Delete</a>`

    
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("rollNO").value = selectedRow.cells[2].innerHTML;
}   
function onDelete(td){
    if(confirm("Are you sure to delete this record ?")){
        row = td.parentElement.parentElement;
        document.getElementById("student-list").deleteRow(row.rowIndex);
    }
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.rollNO;

}
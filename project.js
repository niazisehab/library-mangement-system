// multi dimentional array to store the current status of table
var state = [];



// variable to store the id of row which is to be edited
var edit;


// function to open form popup
function openForm() {
    document.getElementById("myForm_edit").style.display = "none"
    document.getElementById("myForm").style.display = "block";
}



//function to close form popup 
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


var i = 0;

// function to delete data from table
function deletefunction(n) {

    var tab = document.getElementById("mytable");

    //function to delte nth row 
    tab.deleteRow(n);


    // for loop to re-arrange ID of all rows.
    for (var i = 1; i <= tab.rows.length; i++) {
        var r = tab.rows[i];
        r.cells[0].innerHTML = i;
        r.cells[5].innerHTML = `<button type="button" style="background-color:white ,border-color:red"  class="btn" onclick="edit_function(${i});">Edit</input> <button type="button" style="background-color:red" class="btn" onclick="deletefunction(${i});">Delete</input>`;
    }



}


function addHtmlTableRow(e) {

    //my table will be stored in tab
    var tab = document.getElementById("mytable")

    //tab.row.length is used to store the new row at the end.
    var row = tab.insertRow(tab.rows.length);
    i = tab.rows.length - 1;
    // insertCell function will give the required coloumn
    row.id = i;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    // innerHTML will insert the text in the required coloumn

    var sr = i
    var name = document.getElementById("name").value;
    var genre = document.getElementById("genre").value;
    var author = document.getElementById("author").value;
    var edition = document.getElementById("edition").value;
    cell1.innerHTML = i;
    cell2.innerHTML = name
    cell3.innerHTML = author
    cell4.innerHTML = genre
    cell5.innerHTML = edition
    cell6.innerHTML = `<button type="button"   class="editbtn" onclick="edit_function(${i});">Edit</input> <button type="button"  class="deletebtn" onclick="deletefunction(${i});">Delete</input>`;
    // inserting all table values in the two dimentional array
    state.push([]);
    state[i - 1].push(sr);
    state[i - 1].push(name);
    state[i - 1].push(genre);
    state[i - 1].push(author);
    state[i - 1].push(edition);


}


//function for edit popup and filling previous data in the edit popup
function edit_function(data) {
    edit = data;
    document.getElementById("myForm").style.display = "none";
    document.getElementById("myForm_edit").style.display = "block";
    var tab = document.getElementById("mytable");
    var r = tab.rows[edit];
    document.getElementById("name_edit").value = r.cells[1].innerHTML;
    document.getElementById("genre_edit").value = r.cells[3].innerHTML;
    document.getElementById("author_edit").value = r.cells[2].innerHTML;
    document.getElementById("edition_edit").value = r.cells[4].innerHTML;
}




// function to edit text in the required row of the table by accessing the row through the edit variable
function edit_text() {

    var name = document.getElementById("name_edit").value;
    var genre = document.getElementById("genre_edit").value;
    var author = document.getElementById("author_edit").value;
    var edition = document.getElementById("edition_edit").value;

    var tab = document.getElementById("mytable");
    var r = tab.rows[edit];
    r.cells[1].innerHTML = name;
    r.cells[2].innerHTML = genre;
    r.cells[3].innerHTML = author;
    r.cells[4].innerHTML = edition;

}

// function to close edit popup
function closeEdit() {

    document.getElementById("myForm_edit").style.display = "none"
}
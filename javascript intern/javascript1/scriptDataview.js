let editIndex = null; 
let selectrow 

document.getElementById("add").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const gender = document.getElementById("gender").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const province = document.getElementById("province").value;
    // Check for duplicate name and email
    function isDuplicate(email) {
        const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
        for (let i = 0; i < table.rows.length; i++) {
            const rowEmail = table.rows[i].cells[4].textContent;
            if (rowEmail.toLowerCase() === email.toLowerCase()) {
                return true;
            }
        }
        return false;
    }
    
    // Validate inputs
    if (!name || !gender || !age || !email || !province) {
        alert("Please fill in all the fields.");
        return;
    }

    if (/\d/.test(name)) {
        alert("Name cannot contain numbers.");
        return;
    }
    // const namePattern = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    // if (!namePattern.test(name)) {
    //     alert("Name can only contain letters and single spaces between words. No double spaces or special characters allowed.");
    //     return;
    // }

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid number for age.");
        return;
    }
    if (/\d/.test(province)) {
        alert(" Province cannot contain numbers.");
        return;
        
      }
      //=== compare value and date type 
    if (editIndex === null && isDuplicate(email)) {
        alert("This Email student already exists in the table!");
        return;
    }
    if(!email.includes("@") || !email.includes(".")) {
        alert("Email must have @.");
        return;
    }

    if (name && gender && age && email && province) {
        const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

        if (editIndex == null) {
            // Add a new row
            const newRow = table.insertRow(table.rows.length);
            newRow.innerHTML = `
                <th>${table.rows.length -1}</th>
                <th>${name}</th>
                <th>${gender}</th>
                <th>${age}</th>
                <th>${email}</th>
                <th>${province}</th>
                <th>
                    <button class="editLink">Edit</button> | 
                    <button class="deleteLink">Delete</button>
                </th>
            `;
        } else {
            const row = table.rows[editIndex -1]; // Adjust index for header row
            row.cells[1].textContent = name;
            row.cells[2].textContent = gender;
            row.cells[3].textContent = age;
            row.cells[4].textContent = email;
            row.cells[5].textContent = province;

            editIndex = null;
            document.getElementById("add").textContent = "Add";
            const cancelBtn = document.getElementById("cancel");
            if (cancelBtn) {
                cancelBtn.remove();
            }
        }
        
     
        document.getElementById("name").value= '';
        document.getElementById("gender").value = '';
        document.getElementById("age").value = '';
        document.getElementById("email").value= '';
        document.getElementById("province").value = '';
    }
     else{
        alert("Please fill all the fields");
    }
});
function clearInputs() {
    document.getElementById("name").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("age").value = '';
    document.getElementById("email").value = '';
    document.getElementById("province").value = '';
     // Reset the selected row
}

document.getElementById("studentTable").addEventListener("click", function(event) {
    const target = event.target;
    const table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

if (event.target.classList.contains("deleteLink")) {
        const row = target.closest("tr");
        const confirmDelete =confirm("Are you sure you want to delete?");
        if (confirmDelete) {

            row.remove();  // Delete the row
            updateRowNumbers();
            clearInputs();
            return;  // Update row numbers
        }
    }

    if (target.classList.contains("editLink")) {
        const row = target.closest("tr");
        // const confirmEdit = confirm("Do you want to edit this record?");

        document.getElementById("name").value = row.cells[1].textContent;
        document.getElementById("gender").value = row.cells[2].textContent;
        document.getElementById("age").value = row.cells[3].textContent;
        document.getElementById("email").value = row.cells[4].textContent;
        document.getElementById("province").value = row.cells[5].textContent;

        // Set the index for editing
        editIndex = row.rowIndex;
        document.getElementById("add").textContent.className = "Update";
    }
    if (!document.getElementById("cancel")) {
        const cancelBtn = document.createElement("button");
        cancelBtn.id = "cancel";
        cancelBtn.className = "cancel";
        cancelBtn.textContent = "Cancel";
        cancelBtn.onclick = function() {
            clearInputs();
            editIndex = null;
            document.getElementById("add").textContent = "Add";
            this.remove();
            
        };
        document.getElementById("add").after(cancelBtn);
    }
    
});
function updateRowNumbers() {
    const rows = document.querySelectorAll("#studentTable tbody tr ");
    rows.forEach((row, index) => {
        row.cells[0].textContent = index  ;  // Update row number
    });
}
document.getElementById("name").addEventListener("input", function(e) {
    const input = e.target.value;
    const hasSpecialChars = /[^a-zA-Z\s]/.test(input);
    const hasDoubleSpace = /\s\s/.test(input);
    
    if (hasSpecialChars) {
        alert("Special characters or Number  are not allowed in name");
        e.target.value = input.replace(/[^a-zA-Z\s]/g, '');
        return;
    }
    
    if (hasDoubleSpace) {
        alert("Double spaces are not allowed in name");
        e.target.value = input.replace(/\s\s+/g, ' ');
        return;
    }
});
document.getElementById("email").addEventListener("input", function(e) {
    const input = e.target.value;
    const hasDoubleSpace = /\s\s/.test(input);
    
    if (hasDoubleSpace) {
        alert("Double spaces are not allowed in name");
        e.target.value = input.replace(/\s\s+/g, ' ');
        return;
    }
});
document.getElementById("age").addEventListener("input", function(e) {
    const input = e.target.value;
    
    // Remove commas, spaces and other invalid characters
    if (/[,\s]/.test(input)) {
        alert("Age cannot contain commas or spaces");
        e.target.value = input.replace(/[,\s]/g, '');
        return;
    }
    
    // Ensure only positive numbers
    if (input < 0 || input >100) {
        alert("Age cannot be negative or above 100");
        e.target.value = '';
        return;
    }
    
    // Allow only numbers
    if (!/^\d*$/.test(input)) {
        alert("Please enter only numbers for age");
        e.target.value = input.replace(/[^\d]/g, '');
        return;
    }
    // Remove 'e', '-' and other invalid characters
    
});
document.getElementById("age").addEventListener('keypress', function (e) {
    if (!/^[0-9]+$/.test(e.key)) {
        alert("Age can not below  zero or contain letters");
        e.preventDefault();
    }});

    
// function letteronly(input){
//     var regex = /[^a-z]/gi;
//     input.value = input.value.replace(regex, "");
// }
// function numberonly(input){
//     var regex = /[^0-9]/g;
//     input.value = input.value.replace(regex, "");
// }
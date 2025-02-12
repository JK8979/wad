$(document).ready(function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let userList = $("#userList"); //Use jQuery selector

    if (users.length === 0) {
        userList.html(`<li>No users registered yet</li>`);
    } else {
        users.forEach(user => {
            userList.append(`<li>Name: ${user.name}, Email: ${user.email}, Mobile: ${user.mobile}</li>`);
        });
    }

    $("#del").click(function (){

        if(users.length >0){

            users.pop();

            localStorage.setItem("users",JSON.stringify(users));
        }
        else{

            alert("No register to delete to yet..");
        }
    })
})

// $(document).ready(function () {
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     let userList = $("#userList");

//     if (users.length === 0) {
//         userList.html(`<li>No users registered yet</li>`);
//     } else {
//         users.forEach((user, index) => {
//             userList.append(`
//                 <li>
//                     Name: ${user.name}, Email: ${user.email}, Mobile: ${user.mobile} 
//                     <button class="delete" data-index="${index}">Delete</button>
//                 </li>
//             `);
//         });
//     }

//     // Delete user functionality
//     $(document).on("click", ".delete", function() {
//         const index = $(this).data("index");

//         // Remove the user from the array
//         users.splice(index, 1);

//         // Update localStorage
//         localStorage.setItem("users", JSON.stringify(users));

//         // Remove the user from the list in the DOM
//         $(this).parent().remove();

//         if (users.length === 0) {
//             userList.html(`<li>No users registered yet</li>`);
//         }
//     });
// });

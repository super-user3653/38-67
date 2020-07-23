
//   //  Chapter 49-52
//  //
// //


// // 1. Create a signup form and display form data in your web
// //    page on submission.


// function submitfunc() {
//   var emailiinp = document.getElementById("emailinput").value;
//   var passwordinp = document.getElementById("passwordinput").value;
//   var repeatpassinp = document.getElementById("repeatpassinput").value;
//   var firstname = document.getElementById("firstnameinput").value;
//   var lastname = document.getElementById("lastnameinput").value;
  
//   if (passwordinp !== repeatpassinp) {
//     alert("Your Passwords Do Not Match.");
//   }else{
//     document.write("First Name: " + firstname + "<br><br>");
//     document.write("Last Name: " + lastname + "<br><br>");
//     document.write("Fullname: " + firstname + " " + lastname + "<br><br>");
//     document.write("Email: " + emailiinp + "<br><br>")
//     document.write("Password: " + passwordinp + "<br><br>")
//   }

// }


// 2. Suppose in your webpage there is content area in which
//    you have entered your item details, but user can only see
//    some details on first look. When user clicks on “Read
//    more” button, full detail of that particular item will be
//    displayed.


function parg(e){
    var edittext = "Lorem ipsum dolor sit amet dolor ilet lorime aop hos hyteo sjaloe";
    document.getElementById("parg").innerHTML = edittext;
}


// 3. In previous assignment you have created a tabular data
//    using javascript. Let’s modify that. Create a form which
//    takes student’s details and show each student detail in
//    table. Each row of table must contain a delete button and
//    an edit button. On click on delete button entire row should
//    be deleted. On click on edit button, a hidden form will
//    appear with the values of that row.


// function del(a){
//     var row = a.parentNode.parentNode;
//     row.parentNode.removeChild(row)
 
//  }
 


//  // var name1 = prompt("name1");
//  // var name2 = prompt("name2");
//  // var name3 = prompt("name3");
//  // var name4 = prompt("name4");
 
 function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var edittexter = prompt("Enter value", val);
    e.getElementsByTagName("p").nodeValue = edittexter;
    
}



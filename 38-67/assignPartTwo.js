
//   //  Chapter 43-48
//  //
// //


//  //  1. Show an alert box on click on a link



// document.getElementById("btn").addEventListener("click", alertbutton);
// function alertbutton() {
// alert("You Prssed the Button!!");
// }


// // 2. Display some Mobile images in browser. On click on an
// //    image Show the message in alert to user


// function alertclick() {
//   alert("Thanks For Purchasing a Phone From Us");

  
// }


// // 3. Display 10 student records in table and each row should contain a delete
// //    button. If you click on a button to delete a record, entire row should be
// //    deleted


//   //  Before delete


//   //  After click on delete button on “Mark ” row


// function deleteStudentRow(o) {
//   var p=o.parentNode.parentNode;
//       p.parentNode.removeChild(p);
//  }


// // 4. Display an image in browser. Change the picture on mouseover and set the
// //    first picture on mouseout.


// function changePictureOne() {
//   document.getElementById("image").src = "data:image/png;base64,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";
  
// }
// function changePictureTwo() {
//   document.getElementById("image").src = "/images/others/html5.png";
  
// }


// // 5. Show a counter in browser. Counter should increase on click on increase
// //    button and decrease on click on decrease button. And show updated counter
// //    value in browser.


// var i = 0;

// function increasefunc() {
//   i++;
//   document.getElementById("counterhead").innerHTML = i;
  
// }
// function decreasefunc() {
//   i -=1;
//   document.getElementById("counterhead").innerHTML = i;
  
// }





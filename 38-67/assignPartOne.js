  
  //Chapter 38-42
 //
//


// 1. Write a custom function power ( a, b ), to calculate the value of
//    a raised to b.


function powerFunc(a, b) {

    var ab = a**b;
    alert("The Value Of a " + a + " Raised To b " + b + " Is Equal To " + ab);
}
powerFunc(6, 3);


// 2. Any year is entered through the keyboard. Write a function to
//    determine whether the year is a leap year or not.


function leapyear() {
  var textyear = document.getElementById("textboxyear").value;

  if( (0 == textyear % 4) && (0 != textyear % 100) || (0 == textyear % 400) )
  {
    alert(textyear + " is a leap year");  
  }
  else
  {
    alert(textyear + " is not a leap year");  
  }
}


// 3. If the lengths of the sides of a triangle are denoted by a, b, and
//    c, then area of triangle is given by
//       area = S(S − a)(S − b)(S − c)
//       where, S = ( a + b + c ) / 2
//
// Calculate area of triangle using 2 functions


function calcarea(a, b, c) {
 
  function calcs(a, b, c) {
    var s = (a + b + c)/2;
    return s;
    
  }
  
  var s = calcs(a, b, c);

 
   
    var area = s*(s-a)*(s-b)*(s-c);

 return area;
}
alert(calcarea(3, 3, 3))


// 4. Write a function that receives marks received by a student in 3
//    subjects and returns the average and percentage of these
//    marks. there should be 3 functions one is the mainFunction
//    and other are for average and percentage. Call those functions
//    from mainFunction and display result in mainFunction.


function main(sub1, sub2, sub3) {

  function average(sub1, sub2, sub3) {
    var result = (sub1 + sub2 + sub3)/3;
    return result;
    
  }
  function percentage(sub1, sub2, sub3) {

      var p =(sub1/100*100) + " ";

      var d =(sub2/100*100) + " ";

      var g =(sub3/100*100) + " ";
      return p;
      return d;
      return g;
            
  }
  alert(average(sub1, sub2, sub3));
  alert(percentage(sub1, sub2, sub3));
  
}
main();



// 5. You have learned the function indexOf. Code your own custom
//    function that will perform the same functionality. You can code
//    for single character as of now.


var inputer = prompt("Please Enter A String");
var inputers = prompt("Enter a Charcter");
var inputerss = input.split("");

function findindex(instring, char){
    var indexoff;
    for(var i = 0; i < instring.length; i ++ ) {
       if(instring[i] === char){
          indexoff = i;
        }
        return index;
    }
}

console.log(findindex(inputer, inputers));


// 6. Write a function to delete all vowels from a sentence. Assume
//    that the sentence is not more than 25 characters long.



function removevowel(string) {

    let vowels = {
      'a': true,
      'e': true,
      'i': true,
      'o': true,
      'u': true
    };
  
    let result = "";
  
    for (let i = 0; i < string.length; i++) {
      let letter = string[i].toLowerCase();
      if (!vowels[letter]) {
        result += string[i];
      }
    };
    alert(result);

  };
  removevowel(prompt("Enter A String To Remove Vowels"));




// 7. Write a function with switch statement to count the number of
//    occurrences of any two vowels in succession in a line of text.
//    For example, in the sentence
//
//    “Pleases read this application and give me gratuity”
//    Such occurrences are ea, ea, ui.


function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  alert(findOccurrences());


// 8. The distance between two cities (in km.) is input through the
//    keyboard. Write four functions to convert and print this
//    distance in meters, feet, inches and centimeters.


function calculateDistance(distance){
    function kmToMeters(distance) {
       var result = distance * 1000;
       document.write("<br><br> KM To Meters = " + result + "<br>");
    }
    function kmToFeet(distance) {
        var result = distance * 3280.84;
        document.write("<br> KM To Feet = " + result + "<br>");

    }
    function kmToInches(distance) {
        var result = distance * 139370.08;
        document.write("<br> KM To Inches = " + result + "<br>");

    }
    function kmToCentimeters(distance) {
        var result = distance * 100000;
        document.write("<br> KM To Centimeters = " + result + "<br>");

    }
    kmToMeters(distance);
    kmToFeet(distance);
    kmToInches(distance);
    kmToCentimeters(distance);


}
calculateDistance(prompt("Enter Distance Between Two Cities In KM To Calculate Distance"));

// 9. Write a program to calculate overtime pay of employees.
//    Overtime is paid at the rate of Rs. 12.00 per hour for every hour
//    worked above 40 hours. Assume that employees do not work
//    for fractional part of an hour

var overtime = prompt("Enter Hours To Calculate ."); 
overtime = parseInt(overtime); 
function overtimecalc(valueinp){ 
if (valueinp > 40){ 
  var result = overtime * 12; 
  document.write("<br><br>Overtime Pay Is " + result);
  console.log(result) 
  } 
  else{ 
  alert("There Is No Overtime"); 
  } 
  }
overtimecalc(overtime)


// 10. A cashier has currency notes of denominations 10, 50 and
//     100. If the amount to be withdrawn is input through the
//     keyboard in hundreds, find the total number of currency notes
//     of each denomination the cashier will have to give to the
//     withdrawer.


    var hundreds = 0; 
    var fiftys = 0; 
    var tens = 0; 
var amount = prompt("Enter the amount ."); 
amount = parseInt(amount); 
function currency(input){ 

    hundreds =Math.floor( input/100); 
    fiftys = Math.floor((input%100)/50); 
    tens = Math.floor(((input % 100) % 50 ) /10); 
    document.write("<br><br>Number Of 100 Rupee Note Is " + hundreds + ", Number Of 50 Rupee Note Is " + fiftys + ", Number Of 10 Rupee Note Is " + tens); 
} 
currency(amount);




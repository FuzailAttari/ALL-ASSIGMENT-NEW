//             ARRAYS
// Assignment # 13-15 JAVASCRIPT

// ================  Q-1 ===================

// let studentNames = [];
// console.log ( studentNames)

// ================  Q-2 ===================

// let futureStudents = {
//     studentNames: []
//   };
//   console.log ( futureStudents)

// ================  Q-3 ===================
// var Name  =[ "Fuzail","Raza","Attari" ];
//     console.log( Name)

// ================  Q-4 ===================

// var Num  =[ 1,2,3,4,5 ];
//     console.log( Num)

// ================  Q-5 ===================


// var booleanValues = [true, false, true, false];
// console.log( booleanValues);

// ================  Q-6 ===================

// var arr = ["Fuzail" , "Raza" , 32 , true]
// console.log( arr);

// ================  Q-7 ===================
// var educationQualifications = [
//    'SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'
//   ];
  
//   document.write("<h2>Education Qualifications in Pakistan:</h2>");
//   document.write("<ul>");
  
//   for (let i = 0; i < educationQualifications.length; i++) {
//     document.write("<li>" + educationQualifications[i] + "</li>");
//   }
  
//   document.write("</ul>");

// ================  Q-8 ===================


//  var students = ["Fuzail", "Hunail", "Memon"]; 
//  var score = [300, 450, 250]; 
//  var totalMarks = 500; 
 
//  document.write("<h2>Student Scores and Percentages:</h2>");
//  document.write( 
//    "Score of " + students[0] + " is " + score[0] + 
//    ". Percentage: " + (score[0] / totalMarks) * 100 + "%" 
//  ); 
//  document.write( 
//    "<br/> Score of " + students[1] + " is " + score[1] + 
//      ". Percentage: " + (score[1] / totalMarks) * 100 + "%" 
//  ); 
//  document.write( 
//   "<br/>Score of " + students[2] + 
//      " is " + score[2] + ". Percentage: " + 
//      (score[2] / totalMarks) * 100 + "%" )




// ================  Q-10 ===================

// var arr =[320,230,480,120 ];

// document.write("Score of Student:" + arr)
//  document.write ("</br> Ordered Scores Of Student:"+ arr.sort())


// // ================  Q-10 ===================
// this is chatgpt answer

// // Array to store student scores
// let studentScores = [85, 92, 78, 95, 88];

// // Sort the array in ascending order
// studentScores.sort(function( a, b) {
//   return a - b;
// });

// // Display the sorted scores
// document.write("<h2>Sorted Student Scores:</h2>");
// document.write("<p>" + studentScores.join(", ") + "</p>");


// // ================  Q-11 ===================

// // Array of city names
// var cities = ['New York', 'London', 'Tokyo', 'Paris', 'Los Angeles'];

// // Initialize an empty array for selected cities
// var selectedCities = [];

// // Copy the first three elements from cities to selectedCities
// selectedCities = cities.slice(0, 3);

// // Display the selected cities
// document.write("<h2>Selected Cities:</h2>");
// document.write("<p>" + selectedCities.join(", ") + "</p>");


// // ================  Q-12 ===================


// var arr = ["This", "is", "my", "cat"];
// var resultString = arr.join(" ");
// document.write("<p>" + resultString + "</p>");


// // // ================  Q-13 ===================

// var fifoValues = [];
// document.write("<h3>Add values using .push() Mehtod </h3>");

// fifoValues.push('Karachi');
// document.write(fifoValues + "<br>");

// fifoValues.push('Lahore');
// document.write(fifoValues + "<br>");

// fifoValues.push('Islamabad');
// document.write(fifoValues + "<br>");

// fifoValues.push('Faisalabad');
// document.write(fifoValues + "<br>");

// fifoValues.push('Hyderabad');

// document.write(fifoValues);

// document.write("<h3>remove values using .shift() Mehtod </h3>");

// document.write(fifoValues + "<br>");
// fifoValues.shift();
// document.write(fifoValues + "<br>");

// fifoValues.shift();
// document.write(fifoValues + "<br>");

// fifoValues.shift();
// document.write(fifoValues + "<br>");

// fifoValues.shift();
// document.write(fifoValues + "<br>");

// // // ================  Q-14


// var lifoValues = [];
// document.write("<h3>Add values using .push() Mehtod </h3>");

// lifoValues.push('Karachi');
// document.write(lifoValues + "<br>");

// lifoValues.push('Lahore');
// document.write(lifoValues + "<br>");

// lifoValues.push('Islamabad');
// document.write(lifoValues + "<br>");

// lifoValues.push('Faisalabad');
// document.write(lifoValues + "<br>");

// lifoValues.push('Hyderabad');

// document.write(lifoValues);

// document.write("<h3>remove values using .pop() Mehtod </h3>");

// document.write(lifoValues + "<br>");
// lifoValues.pop();
// document.write(lifoValues + "<br>");

// lifoValues.pop();
// document.write(lifoValues + "<br>");

// lifoValues.pop();
// document.write(lifoValues + "<br>");

// lifoValues.pop();
// document.write(lifoValues + "<br>");

// // // ================  Q-15 ===================

// var phoneManufacaturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];

// document.write("<h3>Phone Manufactureres</h3>")
// document.write("<label> Select you favourite Mobile Brand <br>")
// document.write("<select>")
// document.write("<option>" + phoneManufacaturers[0] + "</option> ")
// document.write("<option selected >" + phoneManufacaturers[1] + "</option>")
// document.write("<option>" + phoneManufacaturers[2] + "</option>")
// document.write("<option>" + phoneManufacaturers[3] + "</option>")
// document.write("<option>" + phoneManufacaturers[4] + "</option>")
// document.write("<option>" + phoneManufacaturers[5] + "</option>")
// document.write("</select>")
// document.write("</label>")





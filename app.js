let age ;
age=14
alert("I am" +age+" years old")
// Q2
    let visits = localStorage.getItem("visitCount");
    if (visits === null) {
      visits = 0;
    }
    visits++;
    localStorage.setItem("visitCount", visits);
    alert("You have visited this site " + visits + " times.");
    // Q3
let birthyear = 2011
   document.write("My birth year is " + birthyear + "<br>");
     document.write("Data type of my declared variable is number" );
    //    Q4
    var visitorName = "John Doe";
    var productTitle = "T-shirt";
    var quantity = 5;
    document.write(visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.");
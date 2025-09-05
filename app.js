 // Age alert
    let age = 14;
    alert("I am " + age + " years old");

    // Visits counter
    let visits = localStorage.getItem("visitCount");
    if (visits === null) {
      visits = 0;
    }
    visits++;
    localStorage.setItem("visitCount", visits);
    alert("You have visited this site " + visits + " times.");

    // Birth year
    let birthyear = 2011;
    document.getElementById("birth").innerHTML =
      "My birth year is " + birthyear + "<br>Data type of my declared variable is number";

    // Clothing store
    var visitorName = "John Doe";
    var productTitle = "T-shirt";
    var quantity = 5;
    document.getElementById("store").innerHTML =
      visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
  
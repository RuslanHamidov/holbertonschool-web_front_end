function welcome (firstName, lastName) {
   var fullname = firstName + " " + lastName;
   function displayFullName(){
    alert("Welcome " + fullname);
   }
   displayFullName();
}
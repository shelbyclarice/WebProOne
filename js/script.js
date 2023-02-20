/*Inches to Centimeters Formula Converter*/
function converter(valNum) {
  document.getElementById("outputCm").innerHTML = valNum / 0.3937;
}

/* User inputs data. Declaration of two or more variables and demonstrate variable assignment. */
var my_variable_1, my_variable_2;

/* Convert Inches + to Centimeters */
my_variable_1 = "Convert Inches";
my_variable_2 = " to Centimeters";

my_variable_2 = my_variable_1 + my_variable_2;

alert(
  "my_variable_2 is " +
    my_variable_2 +
    ". You now have access to the converter."
);

document.write("<br><h3> my_variable_2 is " + my_variable_2 + "</h3>");

/*Use if and else conditional operators meaningfully*/
var user_input;

//find out if they like the color blue.
user_input = prompt("Do you like the color blue?");

if (user_input == "yes") {
  /*if the user likes the color blue. so the background color will be changed to blue*/
  alert(
    "You like the color blue, so the background color will be changed to blue."
  );
  document.write("<body bgcolor='#3388ff'>");
} else {
  /*User does not like the color blue, so the background color will be grey. */
  alert(
    "You do not like the color blue. You will get a grey background color."
  );
  document.write("<body bgcolor='#808080'>");
}

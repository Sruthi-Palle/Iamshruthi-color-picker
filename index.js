let x = 0;
let y = 25;
console.log(++x); //it will increment by 1
console.log(--y); //it will decrease by 1

/*|| imples or  logical operator
&& implies and logicaloperator
! implies not logical operator*/
console.log(!false);
//   + is a string concatenation operator*/
let iseven = 10 % 2 === 0 ? true : false; //   ternery operator-if the codition is true it assogns the leftside value of semicolon
// ternery operator- if the condition is false it assigns the right side value of semicolon
console.log(iseven);
let iseven_ = 10 % 2 === 0 ? "it is even" : "it is odd";
console.log(iseven_);

// type conversions
//implicit conversation-
console.log(2 + "3"); //here javascript converts number 2 into string bewfore concatenation
console.log(true + "3");
console.log("2" + "3"); // javascript concate both strings
console.log("2" - "4"); //javascript converts both strings into numbers to perform the  substraction operation
console.log("2" * "3"); //avascript converts both strings into numbers to perform the  multiplication operation
console.log("6" % "2"); //javascript converts both strings into numbers to perform the  modulus operation
console.log("6" / "2"); //javascript converts both strings into numbers to perform the  division operation
console.log("hello" - "world"); // if you use non-numeric strings  for substration-result wille be 'Nan' which means "not a number"
console.log("2" - true); // if you use boolean values with numeric strings with substraction operator -'true' will be considered as value 1 and 'false' will be consodered as value 0
console.log("2" - false); //if you use boolean values with numeric strings with substraction operator -'false' will be consodered as value 0
console.log("4" - null); //if you use boolean values with numeric strings with substraction operator- 'null' will be treated as "0"
//explicit conversion - using inbuilt functions of javascript
//to convert string/boolean types into numeric types we use 'Number' or 'parseInt'
console.log(Number("5"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number("")); //empty string will return zero
// to convert string types into float we use 'parseFloat'
console.log(parseFloat("3.03"));
//we have 'String' / '(value).toString()' global method to convert various data types into string
console.log(String(0));
console.log(String(true));
console.log(String(null)); // here '(value).toString()' method dont work
console.log(String(undefined)); //' here (value).toString()' method dont work
//we use 'Boolean' global method to convert datatypes into boolean data type
//  except null,undefined,"",0,NaN - all other values return true
console.log(Boolean(10)); //true
console.log(Boolean("hello")); // true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("")); //false
console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false

// Equality
//hello world

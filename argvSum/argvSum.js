// argv is a property of the process module 
  // that lets us pass arguments to our programs in command line.
// argv holds an array of all the arguments passed to our program
// The argv property will always contain two default values in the array:

// [0] 'C:\\Program Files\\nodejs\\node.exe' 
  // The first is the location that node is running from

// [1] 'C:\\Users\\DavidPollock\\projects\\education\\command.js'
  // The second is always the path to where the program we are running is stored

// So it's important whenever we are passing values to process.argv
  // that we should slice our values in starting at the index of [2].
  const arguments = process.argv.slice(2);

// Here we are writing a program that performs a simple function (sum)
// that stores all numbers passed to it using argv
// and returns the total sum of those values.

// You might think to write the function like this:
//  const sum = arguments.reduce((accum, value) => 
//    accum + value)

// but unless specified, all values passed into argv are strings

// So we need to pass value to parseInt, 
  // and give the accumulator a starting value of 0:
  const sum = arguments.reduce((accum, value) => 
    accum + parseInt(value), 0);

  console.log(sum);

// This also doesn't account for a user passing strings into the program
// but that's beyond the scope of this example.

// Basically we can pass arguments to argv from the command line
// have a function process the argmuents of that argv array
// and return the processed data to the command line.

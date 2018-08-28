/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

/*var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
// var concepts = joinList(conceptList);

  function joinList(conceptList){
      var result = "";
      for(var i = 0; i < conceptList.length; i++){
        result += conceptList[i] + ", "
      }
      return (result.slice(0, -2))
  } 

  console.log("Today I learned about " + concepts + ".")
;


*/

/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

function joinList(conceptList){
  var result = "";
  for(var i = 0; i < conceptList.length; i++){
    result += conceptList[i] + ", "
  }
  return (result.slice(0, -2))
} 
// Write your code here...

console.log("Today I learned about " + concepts + ".");

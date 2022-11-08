/*
How are you function 
go throw the array and choose the value randomly 
by calling getRandomNumber function between the 0 to 5 
witch is the range of the array size

*/
function HRU() {
  var textsArray = ['So_Bad', 'Bad', 'Good', 'Very_Good', 'Excellent']
  var number = getRandomNumberBetween(0, textsArray.length)
  //output the value to the web console.
  console.log('Index: ', number)
  // assign the value from the array to the element with id heading "innerHtml" value.
  document.getElementById('heading').innerHTML = textsArray[number]
  //changing the class name will help us to target the element, adding styles using css.
  let className = 'center-align ' + textsArray[number]

  document.getElementById('heading').className = className
  //output the value to the web console.
  console.log(className)
}
/* choose random number between one to five and return the 
value as integer number without decimals by calling the math floor function. */
function getRandomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

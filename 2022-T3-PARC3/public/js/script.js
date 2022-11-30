/* Array List contain cats objects such as title, picture 
link , and description.
*/
const catList = [
  {
    title: 'Kitten 2',
    image: 'images/images-2.jpg',
    link: 'About Kitten 2',
    description: 'Demo description about kitten 2',
  },
  {
    title: 'Kitten 3',
    image: './images/images-3.jpg',
    link: 'About Kitten 3',
    description: 'Demo description about kitten 3',
  },
]
/*
Create a addCards Function will take items as an inputs
will go through the items for each item will sign the 
item objects such as image, title, link, and description into
a variable itemToAppend with html code.

*/
const addCards = (items) => {
  items.forEach((item) => {
    let itemToAppend =
      '<div class="col s4 center-align">' +
      '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' +
      item.image +
      '">' +
      '</div><div class="card-content">' +
      '<span class="card-title activator grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">more_vert</i></span><p><a href="#">' +
      item.link +
      '</a></p></div>' +
      '<div class="card-reveal">' +
      '<span class="card-title grey-text text-darken-4">' +
      item.title +
      '<i class="material-icons right">close</i></span>' +
      '<p class="card-text">' +
      item.description +
      '</p>' +
      '</div></div></div>'
    $('#card-section').append(itemToAppend)
  })
}
/*
submitForm
is a function that collect the inputs form popup window
model firstName, lastName, password, and email.
signing the value into the object fromData
and show the data in the console log.

*/
const submitForm = () => {
  let formData = {}
  formData.first_name = $('#first_name').val()
  formData.last_name = $('#last_name').val()
  formData.password = $('#password').val()
  formData.email = $('#email').val()

  console.log('Form Data Submitted: ', formData)
}
/* after the page load will sign and call the function 
which is 
materialbox initializing the material box with jQuery
add listener to button submit event click
submitForm function will call when clicking on the submit button 
addCards will add cards to index html page by a append them to the end of
card-section div.
model() function will initialize  modal with jQuery 
*/

$(document).ready(function () {
  $('.materialboxed').materialbox()
  $('#formSubmit').click(() => {
    submitForm()
  })
  addCards(catList)
  $('.modal').modal()
})

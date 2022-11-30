const cardList = [
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

$(document).ready(function () {
  $('.materialboxed').materialbox()
  $('#formSubmit').click(() => {
    submitForm()
  })
  addCards(cardList)
  $('.modal').modal()
})
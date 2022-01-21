var card = []
var allAnchor = []

//when the DOM ready...
document.addEventListener('DOMContentLoaded', function main() {
  //return an array of cards from DOM
  card = document.querySelectorAll('.card')
  //return all a tag to toggle disableLink class or not
  allAnchor = document.querySelectorAll('a')

  //iterate all cards
  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener('click', () => {
      card[i].classList.toggle('is-flipped')
      allAnchor[i].classList.toggle('disableLinks')
    })
  }
})

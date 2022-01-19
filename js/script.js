// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement
    this.words = words
    this.txt = ''
    this.wordIndex = 0
    this.wait = parseInt(wait, 10)
    this.type()
    this.isDeleting = false
  }

  type() {
    //Current index of word
    const current = this.wordIndex % this.words.length

    //Get Full Text of current word
    const fullTxt = this.words[current]

    //check if deleting
    if (this.isDeleting) {
      //remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      //add char
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

    //Initial type Speed
    let typeSpeed = 300

    if (this.isDeleting) {
      typeSpeed /= 2 // 2x faster when deleting
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      //Make pause at end
      typeSpeed = this.wait

      //Set delete to true
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === '') {
      // change the world
      this.isDeleting = false
      this.wordIndex++
      //Pause Before start typing
      typeSpeed = 500
    }

    setTimeout(() => this.type(), typeSpeed)
  }
}

//Init On DOM Load
document.addEventListener('DOMContentLoaded', init) //listen to DOM and then do init function

//Init App
function init() {
  const txtElement = document.querySelector('.txt-type')
  const words = JSON.parse(txtElement.getAttribute('data-words'))
  const wait = txtElement.getAttribute('data-wait')

  //init TypeWriter
  new TypeWriter(txtElement, words, wait)
}

$(document).ready(function () {
  $('.modal').modal()
})

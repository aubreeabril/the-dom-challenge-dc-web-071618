let paused = false
let counter = document.getElementById('counter')
let number = parseInt(counter.innerText)

function incrementCounter() {
  if (!paused) {
    number += 1
    counter.innerText = number
    return counter.innerText
  }
}

let interval = setInterval(incrementCounter, 1000)

let decrement = document.getElementById('-')
let increment = document.getElementById('+')
let pause = document.querySelector('#pause')
let like = document.getElementById('<3')
let commentForm = document.getElementById('comment-form')

pause.addEventListener('click', pauseCount)
decrement.addEventListener('click', minusCount)
increment.addEventListener('click', plusCount)
commentForm.addEventListener('submit', addComment)

function addComment(event) {
  event.preventDefault()
  let commentSection = document.querySelector('#list')
  let newComment = document.createElement('p')
  let userInput = document.querySelector('input').value
  newComment.innerHTML = userInput
  commentSection.appendChild(newComment)
  commentForm.reset()
  // debugger
}

let likeANumber = function addLike() {
  let likedNumbers = []
  let likesList = document.querySelector('.likes')

  return function() {
    if (!likedNumbers.includes(counter.innerText)) {
      let newLike = document.createElement('li')
      likes = 1
      newLike.innerText = `${counter.innerText} has been liked ${likes} time.`
      newLike.id = counter.innerText
      likesList.appendChild(newLike)
      likedNumbers.push(counter.innerText)
    } else {
      let likeToChange = document.getElementById(counter.innerText)
      likes += 1
      likeToChange.innerText = `${counter.innerText} has been liked ${likes} times.`
      // select and change li by data element
    }
  }
}()

like.addEventListener('click', likeANumber)

function plusCount() {
  number += 1
  counter.innerText = number
  return counter.innerText
}

function minusCount() {
  number -= 1
  counter.innerText = number
  return counter.innerText
}

function pauseCount() {
  if (!paused) {
    paused = true
    document.getElementById("<3").disabled = true;
    document.getElementById("-").disabled = true;
    document.getElementById("+").disabled = true;
    pause.innerText = "resume"
  }
  else {
    paused = false
    document.getElementById("<3").disabled = false;
    document.getElementById("-").disabled = false;
    document.getElementById("+").disabled = false;
    pause.innerText = "pause"
  }
}

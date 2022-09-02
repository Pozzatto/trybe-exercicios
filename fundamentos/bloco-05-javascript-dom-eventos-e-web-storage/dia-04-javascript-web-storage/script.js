window.onload = function() {

  function setBackgroundColor(color) {
    let main = document.querySelector('#main');
    main.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color)
  }
  
  let backgroundColorButtons = document.querySelectorAll("#backgroundColor>button")
  for (let index = 0; index < backgroundColorButtons.length; index += 1) {
    backgroundColorButtons[index].addEventListener("click", function(event) {
      setBackgroundColor(event.target.innerHTML)
    })
  }

  function setFontColor(color) {
    let text = document.querySelectorAll(".text")
    for (let index = 0; index < text.length; index += 1) {
      text[index].style.color = color
    }
    localStorage.setItem("fontColor", color)
  }

  let fontColorButtons = document.querySelectorAll("#text-color>button")
  for (let index = 0; index < fontColorButtons.length; index += 1) {
    fontColorButtons[index].addEventListener("click", function(event) {
      setFontColor(event.target.innerHTML)
    })
  }

  function initialize() {
    let backgroundColor = localStorage.getItem("backgroundColor")
    if (backgroundColor) setBackgroundColor(backgroundColor)

    let fontColor = localStorage.getItem("fontColor")
    if (fontColor) setFontColor(fontColor)
  }
  initialize();

}
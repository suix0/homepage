// When mouse hovers over a project image,
// Change the img src to corresponding gif equivalent
const projectImages = document.querySelectorAll('.projectImg');
const projectImagesArr = [...projectImages];
// const projectImagesContainer = document.querySelectorAll('.projectImgContainer');
// const projectImagesContainerArr = [...projectImagesContainer];

// Change to gif when mouse enters
projectImagesArr.forEach((projectImg) => {
  projectImg.addEventListener('mouseenter', () => {
    if (projectImg.getAttribute('data-project-name') === 'etchASketch') {
      projectImg.src = './assets/gif/etchGif.gif';
    } else if (projectImg.getAttribute('data-project-name') === 'calculator') {
      projectImg.src = './assets/gif/calcGif.gif';
    } else if (projectImg.getAttribute('data-project-name') === 'ticTacToe') {
      projectImg.src = './assets/gif/ticTacToeGif.gif';
    } else if (projectImg.getAttribute('data-project-name') === 'todo') {
      projectImg.src = './assets/gif/TodoGif.gif';
    } else if (projectImg.getAttribute('data-project-name') === 'weather') {
      projectImg.src = './assets/gif/weatherGif.gif';
    } else if (projectImg.getAttribute('data-project-name') === 'battleShip') {
      projectImg.src = './assets/gif/battleshipGif.gif';
    } 
    const imgContainer = document.querySelector(`[data-img-name='${projectImg.getAttribute('data-project-name')}']`)
    imgContainer.classList.add('hover');
  })

  projectImg.addEventListener('mouseleave', () => {
    const imgContainer = document.querySelector(`[data-img-name='${projectImg.getAttribute('data-project-name')}']`) 
    imgContainer.classList.remove('hover');
    if (projectImg.getAttribute('data-project-name') === 'etchASketch') {
      projectImg.src = './assets/Etch-a-Sketch.png';
    } else if (projectImg.getAttribute('data-project-name') === 'calculator') {
      projectImg.src = './assets/Calculator.png';
    } else if (projectImg.getAttribute('data-project-name') === 'ticTacToe') {
      projectImg.src = './assets/TicTacToe.png';
    } else if (projectImg.getAttribute('data-project-name') === 'todo') {
      projectImg.src = './assets/Todo.png';
    } else if (projectImg.getAttribute('data-project-name') === 'weather') {
      projectImg.src = './assets/Weather.png';
    } else if (projectImg.getAttribute('data-project-name') === 'battleShip') {
      projectImg.src = './assets/Battleship.png';
    } 
  })
})

// Change back to png when mouse leaves

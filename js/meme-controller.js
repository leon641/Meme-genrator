'use strict'

let gElCanvas
let gCtx

gElCanvas = document.querySelector('#my-canvas')
gCtx = gElCanvas.getContext('2d')

function onInit() {

  drawImgFromLocal()
}

// function renderTextOnCanvas(value) {
//   let elTxt = document.querySelector('.upper-line')
//   elTxt.innerText = value
// }

function drawText(text, x = 175, y = 50) {
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'brown'
    gCtx.fillStyle = 'black'
    gCtx.font = '40px Arial'
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(text, x, y) // Draws (fills) a given text at the given (x, y) position.
    gCtx.strokeText(text, x, y) // Draws (strokes) a given text at the given (x, y) position.
}


function renderImagesForDisplay() {
    // debugger
    let elGallery = document.querySelector('.gallery')
    let images = getImages()

    var strHtml = images.map(image => {
        `<div class = "img-gallery" onclick="onImageClick('${image.id}')"><img src='${image.ur}'></div>`
    })

    elGallery.innerHTML = strHtml.join(``)
                        
}

//  function renderMeme() {
//

//      drawImgFromLocal()
//     }

function onSelectImg() {
  selectImg()
}

function drawImgFromLocal() {
  const img = new Image()
  img.src = 'img-square/1.jpg'
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd

  }
}

// function onGallery() {


  let imgGallery = document.querySelector('.gallery')
  if (imgGallery.style.display === 'none') {
      document.querySelector('.container').style.display = 'none'
    imgGallery.style.display = 'flex'
  } else {
    imgGallery.style.display = 'none'
    document.querySelector('.container').style.display = 'flex'
  }
//   renderImagesForDisplay()
// }

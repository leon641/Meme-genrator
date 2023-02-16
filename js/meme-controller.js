'use strict'

let gElCanvas
let gCtx

gElCanvas = document.querySelector('#my-canvas')
gCtx = gElCanvas.getContext('2d')

function onInit() {
  renderCanvas()
}

function renderCanvas() {
  let meme = getMeme()
  let lineIdx = meme.selectedLineIdx
  //   clearCanvas()
  drawImgFromLocal()

  drawText(meme)
  drawRect(meme.lines[lineIdx].posX - 70, meme.lines[lineIdx].posY - 25)
}

function onAddLIne() {
  addLine()
  replaceLine()
  renderCanvas()
}

function onReplaceLine() {
  replaceLine()
}

function drawText(meme) {
  for (let i = 0; i < meme.lines.length; i++) {
    setTimeout(() => {
      gCtx.strokeStyle = meme.lines[i].color
      gCtx.fillStyle = 'green'
      gCtx.font = `${meme.lines[i].size}px Arial`
      gCtx.textAlign = meme.lines[i].align
      gCtx.textBaseline = 'middle'
      gCtx.fillText(meme.lines[i].txt, meme.lines[i].posX, meme.lines[i].posY)
      gCtx.strokeText(meme.lines[i].txt, meme.lines[i].posX, meme.lines[i].posY)
    }, 0)
  }
}

function drawRect(x, y) {
  setTimeout(() => {
    gCtx.strokeStyle = 'yellow'
    gCtx.strokeRect(x, y, 250, 40)
    gCtx.fillStyle = 'orange'
  }, 500)
}

function onDrawText(text) {
  updateText(text)
  renderCanvas()
}

function renderImagesForDisplay() {
  let strHtml = ``
  let elGallery = document.querySelector('.gallery')
  let images = getImages()

  strHtml = images.map(
    (image) =>
      `<div onclick="onSelectImage('${image.id}')"><img class="img-gallery" src='${image.url}'></div>`
  )
  debugger
  elGallery.innerHTML = strHtml.join(``)
}

function onSelectImage(imgId) {
  setSelectedImg(+imgId)
  onGallery()
  renderCanvas()
}

function drawImgFromLocal() {
  const img = new Image()
  const src = getSelectedImgSrc()
  img.src = src
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
  }
}

function onGallery() {
  let imgGallery = document.querySelector('.gallery')
  if (imgGallery.style.display === 'none') {
    document.querySelector('.container').style.display = 'none'
    imgGallery.style.display = 'flex'

    document.querySelector('.btn-gallery').innerText = 'Editor'
    renderImagesForDisplay()
  } else {
    imgGallery.style.display = 'none'
    document.querySelector('.container').style.display = 'flex'
    document.querySelector('.btn-gallery').innerText = 'Gallery'
  }
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function onFontIncrease() {
  fontIncrease()
  renderCanvas()
}

function onFontDecrease() {
  fontDecrease()
  renderCanvas()
}

function onTextAlignLeft() {
  alignLeft()
  renderCanvas()
}

function onTextAlignRight() {
  alignRight()
  renderCanvas()
}

function onTextAlignCenter() {
  alignCenter()
  renderCanvas()
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL() 

    elLink.href = data
    elLink.download = 'my-img.jpg'
}
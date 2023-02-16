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
  clearCanvas()
  drawImgFromLocal()
  drawText(meme)
  
}

function onAddLIne() {
    addLine()
    renderCanvas()
    
}

function onReplaceLine(){
    replaceLine()
}

function drawText(meme) {
    gCtx.strokeStyle = meme.color
    gCtx.fillStyle = 'green'
    gCtx.font = `${meme.size}px Arial`
    gCtx.textAlign = meme.align
    gCtx.textBaseline = 'middle'

    setTimeout(() => {
      gCtx.fillText(meme.txt, meme.posX, meme.posY)
      gCtx.strokeText(meme.txt, meme.posX, meme.posY)
      
    },0)
    saveText()
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
    document.querySelector('.btn-gallery').innerText = 'Editor'
    imgGallery.style.display = 'flex'
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

function onFontIncrease(){
    fontIncrease()
    renderCanvas()
}

function onFontDecrease(){
    fontDecrease()
    renderCanvas()
}

function onTextAlignLeft(){}

function onTextAlignCenter(){}

function onTextAlignRight(){}

function saveText() {
    gCtx.save() 
    gCtx.restore()
}


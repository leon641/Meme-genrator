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

  drawImgFromLocalThenText(meme)
}

function onAddLIne() {
  addLine()
  replaceLine()
  renderCanvas()
}

function onReplaceLine() {
  replaceLine()
}

function drawTexts(meme) {
  for (let i = 0; i < meme.lines.length; i++) {
    if (meme.selectedLineIdx === i) {
      let { txt, posX, posY, size, align, color } = meme.lines[i]
      drawTextInRect(posX - 70, posY - 25, size, txt, align, color)
    } else {
      let { txt, posX, posY, size, color, align } = meme.lines[i]
      drawText(txt, posX, posY, size, color, align)
    }
  }
}

function drawText(text, x, y, size, color, align) {
  gCtx.fillStyle = color
  gCtx.font = `${size}px Arial`
  gCtx.textAlign = align
  gCtx.textBaseline = 'middle'
  gCtx.strokeStyle = 'yellow'
  gCtx.fillText(text, x + 45, y + 22)
}

function drawTextInRect(x, y, size, text, align) {
  let lineHeight = size * 1.286
  let textWidth =
    gCtx.measureText(text).width < 225 ? 225 : gCtx.measureText(text).width

  gCtx.fillStyle = 'green'
  gCtx.font = `${size}px Arial`
  gCtx.textAlign = align
  gCtx.textBaseline = 'middle'
  gCtx.strokeStyle = 'yellow'
  gCtx.strokeRect(x, y, textWidth, lineHeight)
  gCtx.fillStyle = 'orange'
  gCtx.fillText(text, x + 45, y + 22)
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

function drawImgFromLocalThenText(meme) {
  const img = new Image()
  const src = getSelectedImgSrc()
  img.src = src
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height) //img,x,y,xEnd,yEnd
    drawTexts(meme)
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

function onImgInput(ev) {
    loadImageFromInput(ev, renderImg)
}

function renderImg(img) {
    // Draw the img on the canvas
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function onUploadImg() {
    const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        // Encode the instance of certain characters in the url
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
    }
    // Send the image to the server
    doUploadImg(imgDataUrl, onSuccess)
}

function addIcons (){
    // elContainer.innerHTML = gIcons
    
    let strHtml = ``
    let elContainer = document.querySelector('.icon-container')
    let icons = getIcons()
    // debugger
  
    strHtml = icons.map((icon) => `<td onclick="onSelectIcon()">${icon}</td>`)
  
    elContainer.innerHTML = strHtml.join(``)
}
addIcons()

function onNavClicked() {
    console.log("nav clicked");
let elContainer =  document.querySelector('.main-header')
elContainer.style="over-flow:inherit;"

//second clicked swich to over-flow : hidden;
}
'use strict'

const MAX_LENGTH = 18

let gElCanvas
let gCtx
let isNavOpen = false


gElCanvas = document.querySelector('#my-canvas')
gCtx = gElCanvas.getContext('2d')

function onInit() {
  onGallery()
  renderCanvas()
  addIcons()
}

function renderCanvas() {
  let meme = getMeme()
  drawImgFromLocalThenText(meme)
}

function onAddLIne() {
  if(getLinesLength() < 2){
    addLine()
    document.querySelector('.editor-input').value = ''
    replaceLine()
    renderCanvas()
  }
}

function onReplaceLine() {
  replaceLine()
  let selectedLine = getSelectedLine()
  document.querySelector('.editor-input').value = selectedLine.txt
  renderCanvas()
}

function drawTexts(meme) {
  for (let i = 0; i < meme.lines.length; i++) {
    if (meme.selectedLineIdx === i) {
      let { txt, posX, posY, size, align, color, icon } = meme.lines[i]
      
      drawTextInRect(posX - 70, posY - 25, size, txt, align, color, icon)
    } else {
      let { txt, posX, posY, size, color, align, icon } = meme.lines[i]
      drawText(txt, posX - 70, posY - 25, size, color, align, icon)
    }
  }
}

function drawText(text, x, y, size, color, align) {
  gCtx.fillStyle = color
  console.log(color);
  gCtx.font = `${size}px Arial`
  gCtx.textAlign = align
  gCtx.textBaseline = 'middle'
  gCtx.strokeStyle = 'yellow'
  gCtx.fillText(text, x + 1, y + 18)
}

function drawTextInRect(x, y, size, text, align,color) {
  let lineHeight = size * 1.286
  let textWidth = gCtx.measureText(text).width < 210 ? 210 : gCtx.measureText(text).width
  gCtx.lineWidth = 3
  gCtx.fillStyle = 'green'
  gCtx.font = `${size}px Arial`
  gCtx.textAlign = align
  gCtx.textBaseline = 'middle'
  gCtx.strokeStyle = 'black'
  gCtx.strokeRect(x, y, textWidth, lineHeight)
  gCtx.fillStyle = color
  gCtx.fillText(text, x + 1, y + 18)
  
}

function onDrawText(elInput) {
  if(MAX_LENGTH > elInput.value.length) {
    updateText(elInput.value)
    renderCanvas()
  } else {
    let selectedLine = getSelectedLine()
    elInput.value = selectedLine.txt
  }
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
    let strHtml = ``
    let elContainer = document.querySelector('.icon-container')
    let icons = getIcons()
    
    strHtml = icons.map((icon) => `<div class="icon" onclick="onSelectIcon(this)">${icon}</div>`)
    elContainer.innerHTML = strHtml.join(``)
}

function onSelectIcon(value) {
    updateMeme(value)
    gCtx.fillText(value.innerText,20,  150)
}

function onColorChange(color) {
    changeColor(color)
}

function onNavClicked() {
  
    let elNav = document.querySelector('.btn-list')
    
    if(isNavOpen){
      elNav.classList.add('mobile-hidden')
      isNavOpen=false
    }
    else{
      elNav.classList.remove('mobile-hidden')
    isNavOpen=true
   } 
}
 

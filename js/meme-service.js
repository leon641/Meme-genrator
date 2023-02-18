'use strick'
let gIcons = ['😛','😂','😍','😁']
var gKeyWordCountMap = { funny: 12, cat: 16, baby: 2 }
var gImages = [
  { id: 1, url: 'img-square/1.jpg', keywords: ['celebrity', 'tramp'] },
  { id: 2, url: 'img-square/2.jpg', keywords: ['animal', 'dog'] },
  { id: 3, url: 'img-square/3.jpg', keywords: ['funny', 'baby'] },
  { id: 4, url: 'img-square/4.jpg', keywords: ['animal', 'cat'] },
  { id: 5, url: 'img-square/5.jpg', keywords: ['funny', 'baby'] },
  { id: 6, url: 'img-square/6.jpg', keywords: ['celebrity', 'someone'] },
  { id: 7, url: 'img-square/7.jpg', keywords: ['funny', 'baby'] },
  { id: 8, url: 'img-square/8.jpg', keywords: ['celebrity', 'hat'] },
  { id: 9, url: 'img-square/9.jpg', keywords: ['funny', 'baby'] },
  { id: 10, url: 'img-square/10.jpg', keywords: ['celebrity', 'obama'] },
  { id: 11, url: 'img-square/11.jpg', keywords: ['celebrity', 'obama'] },
  { id: 12, url: 'img-square/12.jpg', keywords: ['celebrity', 'obama'] },
  { id: 13, url: 'img-square/13.jpg', keywords: ['celebrity', 'obama'] },
  { id: 14, url: 'img-square/14.jpg', keywords: ['celebrity', 'obama'] },
  { id: 15, url: 'img-square/15.jpg', keywords: ['celebrity', 'obama'] },
  { id: 16, url: 'img-square/16.jpg', keywords: ['celebrity', 'obama'] },
  { id: 17, url: 'img-square/17.jpg', keywords: ['celebrity', 'obama'] },
  { id: 18, url: 'img-square/18.jpg', keywords: ['celebrity', 'obama'] },
]

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'Enter text',
      size: 25,
      align: 'middle',
      color: 'yellow',
      posX: 130,
      posY: 50,      
    },
  ],
}

function addLine() {
    gMeme.lines.push( {
        txt: '',
        size: 25,
        align: 'middle',
        color: 'red',
        posX: 130,
        posY: 300,
      })
}

function replaceLine() {
    if(gMeme.selectedLineIdx === 0){
        gMeme.selectedLineIdx = 1

    }  else if(gMeme.selectedLineIdx === 1) {
        gMeme.selectedLineIdx = 0
    }
    
}

function getMeme() {
return gMeme
}

function getImages() {
  return gImages
}

function getImgById(imgId) {
    return gImages.find(image => imgId === image.id)
}

function updateText(text) {
    let idx = gMeme.selectedLineIdx
  gMeme.lines[idx].txt = text
  return gMeme
}

function getImages() {
  return gImages
}

function setSelectedImg(imgIdx) {
    gMeme.selectedImgId = imgIdx
}

function getSelectedImgSrc() {
    let img = gImages.find(image => gMeme.selectedImgId === image.id)
    
    return img.url

}

function fontIncrease() {
    
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size += 3
    if(gMeme.lines[0].size === 45) return 
    
}

function fontDecrease() {
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size -= 3
    if(gMeme.lines[0].size === 18) return 
    
}

function alignLeft() {
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].align = 'left'
    gMeme.lines[idx].posX = 20
    gMeme.lines[idx].posY = 50
}
function alignRight() {
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].align = 'right'
    gMeme.lines[idx].posX = 310
    gMeme.lines[idx].posY = 50
    
}
function alignCenter() {
    let idx = gMeme.selectedLineIdx
    gMeme.lines[idx].align = 'center'
    gMeme.lines[idx].posX = 160
    gMeme.lines[idx].posY = 50
}

// CallBack func will run on success load of the img
function loadImageFromInput(ev, onImageReady) {
    const reader = new FileReader()
    // After we read the file
    reader.onload = function (event) {
        let img = new Image() // Create a new html img element
        img.src = event.target.result // Set the img src to the img file we read
        // Run the callBack func, To render the img on the canvas
        img.onload = onImageReady.bind(null, img)
        // Can also do it this way:
        // img.onload = () => onImageReady(img)
    }
    reader.readAsDataURL(ev.target.files[0]) // Read the file we picked
}

function doUploadImg(imgDataUrl, onSuccess) {
    // Pack the image for delivery
    const formData = new FormData()
    formData.append('img', imgDataUrl)

    // Send a post req with the image to the server
    const XHR = new XMLHttpRequest()
    XHR.onreadystatechange = () => {
        // If the request is not done, we have no business here yet, so return
        if (XHR.readyState !== XMLHttpRequest.DONE) return
        // if the response is not ok, show an error
        if (XHR.status !== 200) return console.error('Error uploading image')
        const { responseText: url } = XHR
        // Same as
        // const url = XHR.responseText

        // If the response is ok, call the onSuccess callback function, 
        // that will create the link to facebook using the url we got
        console.log('Got back live url:', url)
        onSuccess(url)
    }
    XHR.onerror = (req, ev) => {
        console.error('Error connecting to server with request:', req, '\nGot response data:', ev)
    }
    XHR.open('POST', '//ca-upload.com/here/upload.php')
    XHR.send(formData)
}

function getIcons () {
    return gIcons
}



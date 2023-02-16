'use strick'

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
      txt: '',
      size: 30,
      align: 'left',
      color: 'yellow',
      posX: 130,
      posY: 50,      
    },
  ],
}

function addLine() {
    gMeme.lines.push( {
        txt: '',
        size: 40,
        align: 'left',
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



'use strick'

var gKeyWordCountMap = {'funny' : 12, 'cat' : 16, 'baby' : 2}
var gImages = [
    {id: 1, url : 'img-square/1.jpg', keywords : ['celebrity', 'tramp']},
    {id: 2, url : 'img-square/2.jpg', keywords : ['animal', 'dog']},
    {id: 3, url : 'img-square/3.jpg', keywords : ['funny', 'baby']},
    {id: 4, url : 'img-square/4.jpg', keywords : ['animal', 'cat']},
    {id: 5, url : 'img-square/5.jpg', keywords : ['funny', 'baby']},
    {id: 6, url : 'img-square/6.jpg', keywords : ['celebrity', 'someone']},
    {id: 7, url : 'img-square/7.jpg', keywords : ['funny', 'baby']},
    {id: 8, url : 'img-square/8.jpg', keywords : ['celebrity', 'hat']},
    {id: 9, url : 'img-square/9.jpg', keywords : ['funny', 'baby']},
    {id: 10, url : 'img-square/10.jpg', keywords : ['celebrity', 'obama']},
    
]

var gMeme = {
    selectedImgId : 1,
    selectedLineIdx : 0,
    lines : [
        {
            txt: '',
            size: 20,
            align : 'left',
            color : 'red'
        }
    ]

}

function getImages() {
    return gImages
}

function getMeme(){

}


function writeText (txt, id) {
}
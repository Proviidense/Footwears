document.querySelector('.dotted_logo').innerText = '....................\n..................\n................\n..............\n............\n..........'
const galleryPhotos = document.querySelector('.gallery_photos')

const main = document.querySelectorAll('.main')
const viewPort = document.querySelector('.image_viewport')
const theImage = document.querySelector('.view_image')



function addPhotos(theList) {
    const newImageDiv = document.createElement('div')
    const newImage = document.createElement('img')

    newImageDiv.classList.add('new_image_div')
    newImage.classList.add('new_image')

    newImage.src = `${theList[0]}.${theList[1]}`

    newImage.addEventListener('click', function(value) {
        viewImage(value.target.src)
    })


    newImageDiv.appendChild(newImage)
    galleryPhotos.appendChild(newImageDiv)

}

photosData.forEach(function(value) {
    addPhotos(value)
})

function viewImage(image_url) {
    main.forEach(function(value) {
        value.classList.add('image_viewport2')
    })
    viewPort.classList.remove('image_viewport2')
    theImage.src = image_url
}

function goBack() {
    viewPort.classList.add('image_viewport2')
    main.forEach(function(value) {
        value.classList.remove('image_viewport2')
    })
}

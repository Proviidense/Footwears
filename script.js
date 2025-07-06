const imageList = ['palm3.png', 'palm.png', 'palm2.png']
const image = document.querySelectorAll('.container_img')
const middleDiv = document.querySelector('.inner_b')
const containers = document.querySelector('.containers')
const theBrand = document.querySelector('.the_brand')
const hgImage = document.querySelectorAll('.hg_image')
const innerH = document.querySelectorAll('.inner_hg')
document.querySelector('.dotted_logo').innerText = '....................\n..................\n................\n..............\n............\n..........'

const animateDiv = document.querySelectorAll('.inner_a')

const detailsDiv = document.querySelector('.details_div')
const detailsInnerImg = document.querySelectorAll('.inner_details_img')
const detailsImg = document.querySelectorAll('.details_image')

const palmCraft = document.querySelector('.palm_craft')

let innerHg = []
innerH.forEach(function(theValue) {
    innerHg.push(theValue)
})

let checker = 0

function shuffleImage() {
    let check = checker
    hgImage.forEach(function(value) {
        if (check < photosData.length) {
            value.src = `${photosData[check][0]}.${photosData[check][1]}`
            check++
        } else if (check >= photosData.length && checker < photosData.length) {
            check = 0
            value.src = `${photosData[check][0]}.${photosData[check][1]}`
            check++
        } else {
            checker = 0
            value.src = `${photosData[check][0]}.${photosData[check][1]}`
            check++
        }
    })
    checker++
    
}

function animateGallery() {
    innerHg.forEach(function(theValue) {
        theValue.classList.remove(theValue.classList[2])
    })
    let target1 = innerHg[0].getBoundingClientRect()
    let target2 = innerHg[1].getBoundingClientRect()
    let target3 = innerHg[2].getBoundingClientRect()

    let newTarget1 = [target3.x-target1.x, target3.y-target1.y]
    let newTarget2 = [target1.x-target2.x, target1.y-target2.y]
    let newTarget3 = [((target2.x-target3.x) + (target2.x-target1.right)), target2.y-target3.y]

    const style = document.createElement('style')
    style.innerHTML = `
    @keyframes inner1 {
        from { transform: translate(0px, 0px); }
        to { transform: translate(${newTarget1[0]}px, ${newTarget1[1]}px); }
    }
    @keyframes inner2 {
        from { transform: translate(0px, 0px); }
        to { transform: translate(${newTarget2[0]}px, ${newTarget2[1]}px);height: 40%;width: 50%;opacity: 0.5; }
    }
    @keyframes inner3 {
        from { transform: translate(0px, 0px); }
        to { transform: translate(${newTarget3[0]}px, ${newTarget3[1]}px);height: 70%;width: 100%;opacity: 1; }
    }
        
    .inner1_animate {
        animation: inner1 2s ease-in-out forwards;
    }
    .inner2_animate {
        animation: inner2 2s ease-in-out forwards;
    }
    .inner3_animate {
        animation: inner3 2s ease-in-out forwards;
    }
    `
    document.head.appendChild(style)

    innerHg[0].classList.add('inner1_animate')
    innerHg[1].classList.add('inner2_animate')
    innerHg[2].classList.add('inner3_animate')
    shuffleImage()
    
}

setInterval(function(val) {
    animateGallery()
}, 3000)




const observer = new IntersectionObserver(function(values) {
    values.forEach(function(value) {
        if (value.isIntersecting) {
            animateDiv[0].classList.add('div_animate')
            animateDiv[1].classList.add('div_animate')
            middleDiv.classList.add('middle_animate')
            theBrand.classList.add('brand_animate')
            console.log(image[0].classList)
            
            rotateBg()
        } else {
            animateDiv[0].classList.remove('div_animate')
            animateDiv[1].classList.remove('div_animate')
            middleDiv.classList.remove('middle_animate')
            theBrand.classList.remove('brand_animate')
        }
    })
})

const secondObserver = new IntersectionObserver(function(values) {
    values.forEach(function(value) {
        if (value.isIntersecting) {
            image[0].classList.add('move_down_animate')
            image[2].classList.add('move_down_animate2')
            detailsInnerImg[0].classList.add('inner_details_animate')
            detailsInnerImg[1].classList.add('inner_details_animate')
            detailsImg[0].src = imageList[2]
            detailsImg[1].src = imageList[1]
        } else {
            image[0].classList.remove('move_down_animate')
            image[2].classList.remove('move_down_animate2')
            detailsInnerImg[0].classList.remove('inner_details_animate')
            detailsInnerImg[1].classList.remove('inner_details_animate')
        }
    })
})

function rotateBg(value) {
    let count = 0
    image.forEach(function(value) {
        value.src = imageList[count]
        count++
    })
    reshufle()
}

function reshufle(valu) {
    imageList.push(imageList[0])
    imageList.splice(0, 1)
}

observer.observe(containers)
secondObserver.observe(detailsDiv)


window.addEventListener('wheel', function(e) {
    e.preventDefault()
    this.window.scrollBy({
        top: e.deltaY * 0.3,
        behaviour: 'smooth'
    })
}, { passive:false })

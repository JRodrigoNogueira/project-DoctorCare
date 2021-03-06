window.addEventListener('scroll', onScroll)

const navigation = document.getElementById('navigation')

onScroll()
function onScroll(){
    showNavOnScroll()
    showBackToTopButtonOnScroll()
    activateMenuAtCurrentSession(home)
    activateMenuAtCurrentSession(services)
    activateMenuAtCurrentSession(about)
    activateMenuAtCurrentSession(contact)
}

function activateMenuAtCurrentSession(section) {
    const targetLine = scrollY + innerHeight / 2
    
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight

    const sectionEndsAt = sectionTop + sectionHeight

    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionBoundaries = 
    sectionTopReachOrPassedTargetLine &&
    !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries){
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if (scrollY > 0){
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 550){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
    #home, 
    #person, 
    .stats, 
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content`)
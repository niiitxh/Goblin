let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.addEventListner('click',() => {
    navlist.classList.toggle('open');
})

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.Hero-text',{delay:200,origin:'top'});
sr.reveal('.Hero-img',{delay:450,origin:'top'});
sr.reveal('.icons',{delay:500,origin:'left'});
sr.reveal('.scroll-down',{delay:200,origin:'right'});

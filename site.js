function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// document.querySelectorAll('.course button').forEach(button => {
//     button.addEventListener('click', () => {
//         alert('Mais informações sobre este curso estarão disponíveis em breve!');
//     });
// });

document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// document.querySelectorAll('.course button').forEach(button => {
//     button.addEventListener('click', () => {
//         alert('Mais informações sobre este curso estarão disponíveis em breve!');
//     });
// });


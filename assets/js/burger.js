const navOn = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav__ul');
    const navLinks = document.querySelectorAll('.nav__li');



    // Activar menú responsive al clicar la burger
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-mobile-on');

         // Animar la burger
        burger.classList.toggle('toggle');

        // Animar <a> a el menú responsive cuan presiones la burger
        navLinks.forEach((link, index) => {
                        if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });

    });


    
    // Desactivar menu al seleccionar <a> del menú responsive
    nav.addEventListener('click', () => {
        nav.classList.toggle('nav-mobile-on');
        
        // Animar la burger
        burger.classList.toggle('toggle');
        
        // Animar <a> a el menú responsive cuan presiones la <a> de la burger perque no es trenqui
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
            }
        });
    });
}

navOn();
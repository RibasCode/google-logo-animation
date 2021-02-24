const darkTheme = () => {

    var themeStyle = document.getElementById('theme-style');


    const btnMoon = document.querySelector('.change-theme-moon');
    const btnSun = document.querySelector('.change-theme-sun');


    // Carrega el theme que estava al tancar la web
    var cookieTheme = localStorage.getItem('cookieTheme');



    btnMoon.addEventListener('click', () => {

        themeStyle.href = 'assets/css/dark-theme.css'

        btnMoon.classList.add("display-none");
        btnSun.classList.remove("display-none");

        // Carrega el theme que estava al tancar la web
        localStorage.setItem('cookieTheme','dark')
    });




    btnSun.addEventListener('click', () => {

        themeStyle.href = 'assets/css/style.css'

        btnSun.classList.toggle("display-none");
        btnMoon.classList.remove("display-none");

        // Carrega el theme que estava al tancar la web
        localStorage.setItem('cookieTheme','light')
    });




    // Carrega el theme que estava al tancar la web
    if (cookieTheme == 'light'){
    
        
    }else if (cookieTheme == 'dark'){
    
        themeStyle.href = 'assets/css/dark-theme.css'
    
        btnMoon.classList.add("display-none");
        btnSun.classList.remove("display-none");
    
    }

}

darkTheme();

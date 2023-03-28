let themeToggle = document.querySelector('#theme-toggler');

themeToggle.onclick = () => {
    themeToggle.classList.toggle('fa-sun');
    if(themeToggle.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}


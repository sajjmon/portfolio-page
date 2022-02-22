const menu = document.querySelector('#menu-bar');
const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.link');
const sections = document.querySelectorAll('section');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



let activeLink = 0;

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        if (activeLink != i) {
            links[activeLink].classList.remove('active');
            link.classList.add('active');
            sections[activeLink].classList.remove('active');

            setTimeout(() => {
                activeLink = i;
                sections[i].classList.add('active');
            }, 1000);
        }
    })
})
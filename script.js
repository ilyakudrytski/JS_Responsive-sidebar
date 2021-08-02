const btn = document.querySelector('#btn-menu');
const sideBar = document.querySelector('.sidebar');
const searcBtn = document.querySelector('.bx-search');

const toggleSidebar = () => {
    sideBar.classList.toggle('active');
}

btn.addEventListener('click', toggleSidebar);
searcBtn.addEventListener('click', toggleSidebar);
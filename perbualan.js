const sidebar = document.querySelector('.sidebar');
const content = document.querySelector('.content');

document.addEventListener('DOMContentLoaded', () => {
    sidebar.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    });
});

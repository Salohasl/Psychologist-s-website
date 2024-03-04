function upMap(){
    const map = document.querySelector('.map');
    map.classList.add('active');
}

function closeMap(){
    const map = document.querySelector('.map');
    map.classList.remove('active');
}

function showRight(){
    document.addEventListener('click', ()=>{
        window.location.href = '/help/home.html';
    })
}

function showLeft(){
    document.addEventListener('click', ()=>{
        window.location.href = '/training/news.html';
    })
}

function showMenu(){
    const menuBtn = document.querySelector('.menuBtn');
    const link = document.querySelector('.menu');
    menuBtn.addEventListener('click', ()=>{
        link.classList.toggle('active');
        menuBtn.classList.toggle('active');
    })
}showMenu();